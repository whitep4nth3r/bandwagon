# Bandwagon

## Join in, everyone else is here

### Task 1

Create a synth keyboard, that plays sound, on which the notes available to play
can be enabled/disabled based on a selected key/mode.

- [x] play sound on click
- [x] volume control???
- [x] style synth on click
- [ ] make synth responsive
- [ ] bind synth to keys?
- [ ] set up partykit
- [ ] identify different users with something on the cursor
- [ ] send click event over websocket
- [ ] confirm it works in two windows
- [ ] limit notes based on key

### What we learned in Task 1

- [`event.buttons`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons)
- [Bitwise AND (&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
- There's a formula to calculate Hz of a note — but the input is based on the
  note number of the piano key — so it doesn't really translate to other
  instrument concepts — so we defined the frequencies manually found
  [here](https://en.wikipedia.org/wiki/Piano_key_frequencies)
- It's very difficult to create a piano sound with the Web Audio API unless you
  use sample files. You can change the pitch of sample files by using the detune
  function (where you can edit the sound in cents, 100 cents is a semitone).
- HTML range input has `orient="vertical"`
