const diceFunc=()=>{
    var myexpression = document.querySelector('.expression');
    const random = Math.floor((Math.random()*6)+1)
    const twoRandom = Math.floor((Math.random()*6)+1)
    const first =document.getElementById("first")
    const second =document.getElementById("second")
    
    first.src= `./first dice/${twoRandom}.png`
    second.src=`./second dice/${random}.png`
    
    first.style.transform +='rotate(720deg)'
    first.style.transition +='.8s'
    
    second.style.transform +='rotate(720deg)'
    second.style.transition +='.8s';

    // expression code is here 
    if(random == 6 || twoRandom==6){
        myexpression.src='./all images/perfect.gif'
    }else if(random ==1 || twoRandom==1){
        myexpression.src='./all images/crying.gif'
    }else if((random + twoRandom)<=5){
        myexpression.src="./all images/cry.gif"
    }
    else if((random + twoRandom)>= 8){
        myexpression.src = './all images/dancing man.gif'
    }else{
        myexpression.src = './all images/no problem.gif'
    }

}
function myFunc(){
    const audio = document.querySelector('audio')
    audio.play()
}
const expression = ()=>{
    
    

}

