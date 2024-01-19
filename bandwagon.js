class PianoKey extends HTMLElement {
  constructor() {
    super();
    this.note = this.getAttribute("note");
    this.octave = this.parentElement.parentElement.getAttribute("octave");
    this.sharp = this.getAttribute("sharp") === "true" ? "#" : "";
    this.flat = this.getAttribute("flat") === "true" ? "♭" : "";
    this.color = this.getAttribute("color");
  }

  connectedCallback() {
    const html = `<button class="pianoKey pianoKey--${this.color}">${this.note}${this.sharp}${this.flat} ${this.octave}</button>`;

    this.innerHTML = html;

    this.addEventListener("click", () => {
      console.log(this.note, this.sharp, this.flat, this.octave);
    });
  }
}

class PianoOctave extends HTMLElement {
  constructor() {
    super();
    this.octave = this.getAttribute("octave");
  }

  connectedCallback() {
    //create 12 PianoKey components
  }
}

customElements.define("piano-octave", PianoOctave);
customElements.define("piano-key", PianoKey);
