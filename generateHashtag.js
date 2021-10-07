// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  //if input is empty string, return false;
  if (str.length === 0) {
    return false;
  }

  //turn string into array split into words;
  let strArr = str.split(" ");
  let newWordArr = [];

  //for each word in the array, capitalize the first letter in each word and push capitalized word into a new array
  let newStrArr = strArr.forEach((word) => {
    let wordArr = word.split("");
    let firstLetter = wordArr.shift();
    if (firstLetter !== undefined) {
      let upperCasedLetter = firstLetter.toUpperCase();
      wordArr.unshift(upperCasedLetter);
    }
    word = wordArr.join("");
    newWordArr.push(word);
  });

  newWordArr.unshift("#");
  if (newWordArr.length > 140) {
    return false;
  }
  return newWordArr.join("");
}

generateHashtag(" Hello there thanks for trying my Kata"); //  "#HelloThereThanksForTryingMyKata"
generateHashtag("    Hello     World   "); // "#HelloWorld"
generateHashtag(""); //false
