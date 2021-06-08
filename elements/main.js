function pressValue(id){
    const amount = document.getElementById(id).value;
    let amountNumber = parseFloat(amount);
    amountNumber++;
    document.getElementById(id).value = amountNumber;
    return amountNumber;
} 
function increasePrice(id,amountNumber,value){
    const phonePrice = document.getElementById(id).innerText;
    let phonePriceNum = parseFloat(phonePrice);
    document.getElementById(id).innerText = amountNumber * value;

} 
function pressValueMinus(id){
    const amount = document.getElementById(id).value;
    let amountNumber = parseFloat(amount);
    amountNumber--;
    document.getElementById(id).value = amountNumber;
   
}
function decreasePrice(id ,value){
    const phonePrice = document.getElementById(id).innerText;
    let phonePriceNum = parseFloat(phonePrice);
    document.getElementById(id).innerText = phonePriceNum - value;
}
//do
document.getElementById("plus-btn").addEventListener("click",function(){ 
    // const amount = document.getElementById("amount").value;
    // let amountNumber = parseFloat(amount);
    // amountNumber++;
    // document.getElementById("amount").value = amountNumber;
   const amountNumber = pressValue("amount");
    // increase price 
    // const phonePrice = document.getElementById("iphone-Price").innerText;
    // let phonePriceNum = parseFloat(phonePrice);
    // document.getElementById("iphone-Price").innerText = amountNumber * 1219;
    increasePrice("iphone-Price",amountNumber,1219);
})
document.getElementById("minus-btn").addEventListener("click",function(){ 
    pressValueMinus("amount");  
    decreasePrice("iphone-Price",1219);
})
//second
document.getElementById("second-minus-btn").addEventListener("click",function(){ 
    pressValueMinus("second-amount");  
    decreasePrice("box-price",56);
})
document.getElementById("second-plus").addEventListener("click",function(){ 
    
   const amountNumber = pressValue("second-amount");
    // increase price 
    // const phonePrice = document.getElementById("iphone-Price").innerText;
    // let phonePriceNum = parseFloat(phonePrice);
    // document.getElementById("iphone-Price").innerText = amountNumber * 1219;
    increasePrice("box-price",amountNumber,56);
})