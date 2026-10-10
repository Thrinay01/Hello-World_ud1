function replaceVowelsWithX(input) {
  
    let result = "";

  for (let ch of input) {
    if ("aeiou".includes(ch.toLowerCase())) {
      result += "X";
    } else {
      result += ch;
    }
  }

  return result;
}

console.log(replaceVowelsWithX("Automation"));