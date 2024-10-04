function colorChange(id,color){
    document.getElementById(id).style.backgroundColor=color
    document.body.style.backgroundColor = color
}

function resetButton(){
    document.getElementById('red').style.backgroundColor='white'
    document.getElementById('green').style.backgroundColor='white'
    document.getElementById('blue').style.backgroundColor='white'
    document.body.style.backgroundColor = 'white'
}