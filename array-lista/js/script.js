const fruits =[
    'banana', 
    'mela', 
    'pera', 
    'ciliegia', 
    'arancia', 
    'mandarino', 
    'cocomero',
    'limone', 
    'fragola',
]
const textel=document.getElementById('text')
const tavolo = ('pesca')
let cocktail = false
textel.innerHTML=`Adesso ho ${fruits}<br>`

fruits.push(tavolo)
textel.innerHTML +=`Adesso ho ${fruits}<br>`
for(let i=0;i < fruits.length-1;i++){
    let currentfruit = fruits[i]
    if(currentfruit === 'cocomero'){
        cocktail=true
    }
}
if (cocktail == true){
    textel.innerHTML +=`Ho il cocomero`
}
else{
    textel.innerHTML +=`non ho il cocomero`
}