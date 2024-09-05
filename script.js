//your JS code here. If required.
function mapLetters(word) {
  let result = {};

  // Iterate through each character in the string
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    // Use Symbol to store unique key
    let symbolKey = Symbol.for(char);

    // If the symbolKey doesn't exist, initialize it with an empty array
    if (!result[symbolKey]) {
      result[symbolKey] = [];
    }

    // Push the index to the array corresponding to the symbolKey
    result[symbolKey].push(i);
  }

  return result;
}