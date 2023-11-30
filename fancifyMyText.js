function helloWorldAlert() {
    alert("Hello, world!");
  }
function makeTextBigger() {
    // document.getElementById("userTextBox").style.propertyName = "value";
    document.getElementById("userTextBox").style.fontSize = "24px";
  }
function makeTextFancy() {
    alert("Changing text to FANCY!");
    var element = document.getElementById("userTextBox");
    element.style.fontWeight = "bold";
    element.style.color = "blue";
    element.style.textDecoration = "underline";
  }
function makeTextNormal() {
    alert("Changing text to normal.");
    var element = document.getElementById("userTextBox");
    element.style.fontWeight = "normal";
    element.style.color = "black";
    element.style.textDecoration = "none";
  }
function makeTextUppercase() {
    alert("Changing text to uppercase.");
    var element = document.getElementById("userTextBox");
    element.style.fontWeight = "normal";
    let text = element.value;
    let result = text.toUpperCase();
    element.value = result;
  }
function makeTextMoo() {
    alert("Changing text to moo.");
    var element = document.getElementById("userTextBox");
    let text = element.value;

    var parts = text.split(" ");

    let pLen = parts.length;

    for (let i = 0; i < pLen; i++) {
        if(parts[i].charAt(parts[i].length - 1) === '.') {
            let lastWordMinusPunctuationMark = parts[i].substring(0, parts[i].length - 1);
            let textMoo = "-Moo";
            let result = lastWordMinusPunctuationMark.concat(textMoo);
            let punctuationMark = parts[i].substring(parts[i].length - 1);
            result = result.concat(punctuationMark);
            parts[i] = result;
        }
    }

    /*
    var lastWord = parts.pop();
    let lastWordMinusPunctuationMark = lastWord.substring(0, lastWord.length - 1);
    let textMoo = "-Moo";
    let result = lastWordMinusPunctuationMark.concat(textMoo);
    let punctuationMark = lastWord.substring(lastWord.length - 1);
    result = result.concat(" ", punctuationMark);
    */
    // parts.push(result);

    text = parts.join(" ");

    element.value = text;
    
  }
