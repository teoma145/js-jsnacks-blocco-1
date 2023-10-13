let arraynumeri=['']
let btn= document.getElementById('mybutton')

btn.addEventListener('click',function(){
    let uservalue =document.getElementById('elementi').value;
    console.log(uservalue)
    
})




function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}