let arraynumeri=[]
let btn= document.getElementById('mybutton')

btn.addEventListener('click',function(){
    let uservalue =document.getElementById('elementi').value;
    
    for(let x=0; x < uservalue;x++){
        let numerogenerato = Math.floor(getRandomNumber(1, 100));
        let arraynumeri=[]
        arraynumeri.push(numerogenerato)
        console.log(arraynumeri)
    }
})




function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}