let btn= document.getElementById('mybutton')
let textel=document.getElementById('data')

btn.addEventListener('click',function(){
    let uservalue =parseInt(document.getElementById('elementi').value);
    let stampvalue =parseInt(document.getElementById('stampare').value);
    let arraynumeri=[]
    textel.innerHTML=``
    for(let x=0; x < uservalue;x++){
        let numerogenerato = Math.floor(getRandomNumber(1, 100));
        arraynumeri.push(numerogenerato)
        console.log(arraynumeri)
    }
    if(stampvalue >= uservalue){
        textel.innerHTML=`Il numero di elementi da scegliere deve essere più grande di quello da stampare`
    }
  
     else if(stampvalue >= 0){
        let lastElements = arraynumeri.slice(-stampvalue);
        textel.innerHTML=`${lastElements}`
    }
    else if (stampvalue === '' || stampvalue === '0' || isNaN(stampvalue)) {
        let lastElements = arraynumeri.slice(-5);
        textel.innerHTML=`${lastElements}`
    }
    
})




function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}