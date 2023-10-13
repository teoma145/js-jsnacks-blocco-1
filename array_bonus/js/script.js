let textel=document.getElementById('text')

let array1 =[
    'uno,',
    'due',
    'tre',
    'quattro',
    'cinque',
    'sei',
    'sette',
    'otto',
]
let array2 =[
    'nove',
    'dieci',
    'unidici',
    'dodici',
]
for(let x=0;array2.length < array1.length;x++){
    const elementoDaSpostare = array1.shift();
    array2.push(elementoDaSpostare);
    textel.innerHTML =`${array2}`
}