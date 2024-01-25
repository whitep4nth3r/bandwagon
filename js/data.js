// allow for selecting enharmonic equivalents when we change
// key/scale etc
// there is a formula where we could pass in the synth key number
// https://en.wikipedia.org/wiki/Synth_key_frequencies
// but this won't make sense for other instruments
// 2^((n-49)/12)*440

const FREQUENCIES = {
  3: {
    c: "130.8128",
    "c#": "138.5913",
    d: "146.8324",
    "d#": "155.5635",
    e: "164.8138",
    f: "174.6141",
    "f#": "184.9972",
    g: "195.9977",
    "g#": "207.6523",
    a: "220.0000",
    "a#": "233.0819",
    b: "246.9417",
  },
  4: {
    c: "261.6256",
    "c#": "277.1826",
    d: "293.6648",
    "d#": "311.1270",
    e: "329.6276",
    f: "349.2282",
    "f#": "369.9944",
    g: "391.9954",
    "g#": "415.3047",
    a: "440.0000",
    "a#": "466.1638",
    b: "493.8833",
  },
  5: {
    c: "523.2511",
    "c#": "554.3653",
    d: "587.3295",
    "d#": "622.2540",
    e: "659.2551",
    f: "698.4565",
    "f#": "739.9888",
    g: "783.9909",
    "g#": "830.6094",
    a: "880.0000",
    "a#": "932.3275",
    b: "987.7666",
  },
};

const OCTAVE_KEYS = [
  {
    note: "c",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "c",
    sharp: true,
    flat: false,
    color: "black",
  },
  {
    note: "d",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "d",
    sharp: true,
    flat: false,
    color: "black",
  },
  {
    note: "e",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "f",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "f",
    sharp: true,
    flat: false,
    color: "black",
  },
  {
    note: "g",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "g",
    sharp: true,
    flat: false,
    color: "black",
  },
  {
    note: "a",
    sharp: false,
    flat: false,
    color: "white",
  },
  {
    note: "a",
    sharp: true,
    flat: false,
    color: "black",
  },
  {
    note: "b",
    sharp: false,
    flat: false,
    color: "white",
  },
];
