let totalOption=1;

const winSound= new Audio("images/winSound.mp3")

const submit = document.querySelector('#submit');
const addButton=document.querySelector('.button')
const loader = document.querySelector("#load-bar")
addButton.addEventListener('click', function() {
    winSound.pause()
    // Create a new input element
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.required=true;
    newInput.className = 'option'; // Use 'option' instead of 'options'
    newInput.name = 'inputBox[]';
    newInput.placeholder = 'Enter the name';
     

    document.querySelector(".pay").style.display = "none";
    // Append the new input element to the container
    document.getElementById('input-container').appendChild(newInput);
    totalOption++ ;
});

submit.addEventListener('click', (e) => {
    
    console.log("Total Option are :" , totalOption);
    collectName(totalOption);
});

const showWinner=(winner)=>{
    winSound.pause()
    winSound.currentTime=0;
    loader.style.display="block"
    document.querySelector('.loader').scrollIntoView({ behavior: 'smooth' });
    document.querySelector(".pay").style.display = "none";
    setTimeout(() => {
        winSound.play()
        loader.style.display="none"
        document.getElementById("msg").innerText = winner;
        document.querySelector(".pay").style.display = "block";
    }, 2000);
}

function findwinner(arrayName){
    let num= Math.floor(Math.random()* totalOption)

    let winnner=arrayName[num];
    console.log(winnner);
   showWinner(winnner)
}
const collectName=(totalOption)=>{
    let arrayName =[]
   let options = document.querySelectorAll(".option");
   let alertShown = false; // Flag to track if alert has been shown

   options.forEach(option => {
       if(option.value == "" && !alertShown) {
           alert("Fill all the box.. ");
           alertShown = true; // Set the flag to true
       } else if(option.value != "") {
           console.log(option.value);
           arrayName.push(option.value);
       }
   });
if (alertShown) {
    return
}else{
    findwinner(arrayName)
}
}