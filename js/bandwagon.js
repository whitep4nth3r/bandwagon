const audioContext = new AudioContext();
const synthOcsillators = [];
let synthGainNode = null;

function playSynthTone(freq) {
  const osc = audioContext.createOscillator();
  osc.connect(synthGainNode);
  osc.type = "sine";

  osc.frequency.value = Number(freq);
  osc.start();

  return osc;
}

function getSynthNoteIdentifier(note, octave, sharp, flat) {
  return `${note}_${sharp}${flat}_${octave}`;
}

function notePressed(event, freq, note, octave, sharp, flat) {
  const noteIdentifier = getSynthNoteIdentifier(note, octave, sharp, flat);

  if (event.buttons & 1) {
    synthOcsillators[noteIdentifier] = playSynthTone(freq);
  }
}

function noteReleased(note, octave, sharp, flat) {
  const noteIdentifier = getSynthNoteIdentifier(note, octave, sharp, flat);

  if (synthOcsillators[noteIdentifier]) {
    synthOcsillators[noteIdentifier].stop();
    delete synthOcsillators[noteIdentifier];
  }
}

class SynthKey extends HTMLElement {
  constructor() {
    super();
    this.note = this.getAttribute("note");
    this.octave = this.parentElement.getAttribute("octave");
    this.sharp = this.getAttribute("sharp") === "true" ? "#" : "";
    this.flat = this.getAttribute("flat") === "true" ? "♭" : "";
    this.color = this.getAttribute("color");
    this.freq = this.getAttribute("freq");
  }

  connectedCallback() {
    const note = `${this.note}${this.sharp}${this.flat}<br>${this.octave}`;
    const html = `<button class="synthKey synthKey--${this.color}"></button>`;

    this.innerHTML = html;

    this.addEventListener("mousedown", (event) => {
      notePressed(
        event,
        this.freq,
        this.note,
        this.octave,
        this.sharp,
        this.flat,
      );
    });

    this.addEventListener("mouseup", () => {
      noteReleased(this.note, this.octave, this.sharp, this.flat);
    });

    this.addEventListener("mouseover", (event) => {
      notePressed(
        event,
        this.freq,
        this.note,
        this.octave,
        this.sharp,
        this.flat,
      );
    });

    this.addEventListener("mouseleave", () => {
      noteReleased(this.note, this.octave, this.sharp, this.flat);
    });
  }
}

class SynthOctave extends HTMLElement {
  constructor() {
    super();
    this.octave = this.getAttribute("octave");
  }

  connectedCallback() {
    let html = "";

    OCTAVE_KEYS.forEach((key) => {
      const sharp = key.sharp ? "#" : "";
      const flat = key.flat ? "♭" : "";
      const fullNote = `${key.note}${sharp}${flat}`;

      html += `<synth-key note="${key.note}" color="${key.color}" sharp="${
        key.sharp
      }" flat="${key.flat}" freq="${
        FREQUENCIES[this.octave][fullNote]
      }"></synth-key>`;
    });

    this.innerHTML = html;
  }
}

customElements.define("synth-octave", SynthOctave);
customElements.define("synth-key", SynthKey);

const synthVolumeControl = document.querySelector(
  "input[name='volume__synth']",
);

function initSynth() {
  synthVolumeControl.addEventListener("change", (e) => {
    synthGainNode.gain.value = e.target.value;
  });

  synthGainNode = audioContext.createGain();
  synthGainNode.connect(audioContext.destination);
  synthGainNode.gain.value = synthVolumeControl.value;
}

initSynth();
