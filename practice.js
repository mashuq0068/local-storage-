const str = "Javascript is the best programming language in the world now"
const splitStr = str.split(" ")
let newStr = ""
const everyWord = splitStr.map(word => reverseWord(word))
//     for(let i = word.length ; i > 0 ; i--){
//         const element = word[i];
        
//     }
//    console.log(element)
// })

function reverseWord(reverseElement){
    for (let i = reverseElement.length - 1 ; i >= 0; i--){
        const element = reverseElement[i]
        
      newStr = newStr + element
    }
    
return newStr
}
console.log(everyWord)
