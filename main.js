
let words = "virat sachin dhoni virat rahul virat rahul sachin"
 function countRepeatedWords(sentence){
     let words = sentence.split(" ");
     let wordMap = {};

     for (let i =0; i<words.length; i++){
         let currentWordCount = wordMap[words[i]];
         let count = currentWordCount ? currentWordCount:0;
         wordMap[words[i]] =count +1
     }
     return wordMap;
 }
 console.log(countRepeatedWords(words))