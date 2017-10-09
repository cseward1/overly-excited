

let sentence =["The", "walrus", "danced", "through","the","trees","in", 
"the", "light", "of", "the", "moon"];

function addExcitment (theWordArray) {
    let row= "";
    let count= 0
    
 for(let i= 0; i < theWordArray.length; i++) {
  row += "" + theWordArray[i]

     if (i % 3 === 2) { 
        row += "!";
        count++
        for (let j= count; j > 1; j--) {
            row +="!"}
     }  row += " "
    
     console.log(row);
     

}
    
    
 }


addExcitment(sentence)



