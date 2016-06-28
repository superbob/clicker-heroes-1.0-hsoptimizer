'use strict';

// Ignoring foreign code
// Almost entirely taken from:
// https://github.com/DobruJ01/clicker-lister/blob/master/common/saveDecoder.js
/* eslint-disable */
/*
  ==================================================
  Contains the savefile decoding code. Most of it is
  adapted from other sources. I didn't think to save
  the source at the time, if you recognize your code
  and want credit for it, let me know.
  ==================================================
*/

const ANTI_CHEAT_CODE = 'Fe12NAfA3R6z4k0z';
const SALT = 'af0ik392jrmt0nsfdghy0';

function decryptSave(string){
  // Find anticheatcode
  var antiCheatCodeIndex = string.search(ANTI_CHEAT_CODE);
  // If found, convert string from anticheatformat
  if (antiCheatCodeIndex != -1) string = fromAntiCheatFormat(string);
  // Then decrypt the result using standard base 64 decryption
  var jsonString = atob(string);

  return JSON.parse(jsonString);
}

function fromAntiCheatFormat(string)
{
  // Separate the things by the anticheatcode
  var elements = string.split(ANTI_CHEAT_CODE);
  // Unsprinkle the actual save
  var data = unSprinkle(elements[0]);
  // Get the hash
  var hash = elements[1];
  // Calculate the actual hash from the data
  var dataHash = getHash(data);
  // Check if the calculated hash is the same as the given hash, if yes then return the data
  if (dataHash = hash) return data;
  alert("Hash is bad");
}

function unSprinkle(string)
{
  // Unsprinkles the save. Sprinkle adds randomized elements after every character. Split by "" to separate it all into separate spots in the array.
  // Splitting the array isn't strictly necessary. Strings are technically an array of letters. Might try to remove the splitting and see if it still works.

  var array = string.split("");
  // Empty array for the result.
  var result = [];
  var counter = 0;

  // Until we reach the end of the string...
  while (counter < array.length)
  {
    // Take a letter, add it to the new array at half the value it was at from the start. 0 becomes 0. 2 becomes 1. 4 becomes 2. 6 becomes 3. etc.
    result[counter / 2] = array[counter];
    // Advancing by two steps skips every other letter, effectively unsprinkling it.
    counter += 2;
  }
  return result.join("");
}

function getHash(string)
{
  // Split the string up. Again, not strictly necessary, might change at some point.
  var characters = string.split();
  // Sort the string. The hash doesn't need to be decrypted, only encrypted, thus the actual data isn't preserved.
  characters.sort();
  // Joins the characters into a variable. Not sure if this step is necessary either.
  var sortedcharacters = characters.join();
  // Returns and MD5 hash. Not the most secure of hashes, but functional and suitable for our uses.
  return CryptoJS.MD5(sortedcharacters + SALT);
}

/* eslint-enable */

export default class SaveDecoder {
  constructor () {
    'ngInject';
  }

  decryptSave(encodedSaveData) {
    return decryptSave(encodedSaveData);
  }
}
