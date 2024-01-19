class PianoKey extends HTMLElement {
  constructor() {
    super();
    this.note = this.getAttribute("note");
    this.octave = this.parentElement.getAttribute("octave");
    this.sharp = this.getAttribute("sharp") === "true" ? "#" : "";
    this.flat = this.getAttribute("flat") === "true" ? "♭" : "";
    this.color = this.getAttribute("color");
  }

  connectedCallback() {
    const note = `${this.note}${this.sharp}${this.flat}<br>${this.octave}`;
    const html = `<button class="pianoKey pianoKey--${this.color}">${note}</button>`;

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
    let html = '';

    const keys = [
      {'note':'c', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'c', 'octave':this.octave, 'sharp':true, 'flat':false, 'color':'black'},
      {'note':'d', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'d', 'octave':this.octave, 'sharp':true, 'flat':false, 'color':'black'},
      {'note':'e', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'f', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'f', 'octave':this.octave, 'sharp':true, 'flat':false, 'color':'black'},
      {'note':'g', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'g', 'octave':this.octave, 'sharp':true, 'flat':false, 'color':'black'},
      {'note':'a', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
      {'note':'a', 'octave':this.octave, 'sharp':true, 'flat':false, 'color':'black'},
      {'note':'b', 'octave':this.octave, 'sharp':false, 'flat':false, 'color':'white'},
    ];

    keys.forEach((key) => {
      html += `<piano-key note="${key.note}" color="${key.color}" sharp="${key.sharp}" flat="${key.flat}"></piano-key>`;
    });

    this.innerHTML = html;

  }
}

customElements.define("piano-octave", PianoOctave);
customElements.define("piano-key", PianoKey);
