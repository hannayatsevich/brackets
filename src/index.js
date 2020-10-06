module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  let unpaired = [];
  str.split('').forEach( element => {
    let opening = bracketsConfig.find( bracketPair => element === bracketPair[0]);
    let closing = bracketsConfig.find( bracketPair => element === bracketPair[1])
    opening
    ? (opening[0] === opening[1] && element === openedBrackets[openedBrackets.length - 1] ? openedBrackets.pop() : openedBrackets.push(element))
    : (closing[0] === openedBrackets[openedBrackets.length - 1] ? openedBrackets.pop() : unpaired.push(element) );
  })
  return !openedBrackets.length && !unpaired.length;
}
