const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const vowel = ["a", "i", "o", "u", "e"];
const ending = "ay";

textInput.addEventListener("keyup", (i) => {
  const input = i.target.value;
  const output = input
    .split(" ")
    .map((word) => {

      //if word starts with vowel add 'ay'(ending)
      if (vowel.includes(word[0])) {
        return word + ending;
      }

      //go through each character of word until it finds a vowel
      let consonant = "";
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowel.includes(char)) {
          break;
        }
        consonant += char;
      }
      return (
        word.substring(consonant.length) + consonant + ending
      );
    })
    .join(" ");
  textOutput.innerText = output;
});
