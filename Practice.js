function removeVowels(word){


    for(let ch of word.split("").toLowerCase()){

        if("aeiou".includes(ch)){

            word= word.replace(ch, "x");
        }
    }
     return word;
}

let word = 'Automation';

console.log(removeVowels(word));