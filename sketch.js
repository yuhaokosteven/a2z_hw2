// A2Z F18
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F18
// http://shiffman.net/a2z

let clicked = false;

function setup() {
  noCanvas();

  // Make a text input field
  input = select('#sentence');
  // Make a submit button
  let button1 = select('#submit');
  let button2 = select('#submit');
  let button3 = select('#submit');
  let button4 = select('#submit');


  button1.mousePressed(pluralize);
  button2.mousePressed(negate);
  button3.mousePressed(futureTense);
  button4.mousePressed(pastTense);


  function pluralize() {
    let output = input.value();
    let doc = nlp(output);
    let nouns = doc.nouns().data();
    for (var i = 0; i < nouns.length; i++) {
      output = output.replace(nouns[i].singular, nouns[i].plural);
    }
    createP('Pluralize : ' + output).class('text');
  }

  function negate() {
    let output = nlp(input.value()).sentences().toNegative().out('text');
    createP('Negate :' + output).class('text');
  }

  function futureTense() {
    let output = input.value();
    let doc = nlp(output);
    output = doc.sentences().toFutureTense().out('text');
    createP('FutureTense : ' + output).class('text ');
  }

  function pastTense() {
    let output = input.value();
    let doc = nlp(output);
    output = doc.sentences().toPastTense().out('text');
    createP('PastTense : ' + output).class('text');
  }



}
