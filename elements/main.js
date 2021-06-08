function pressValue(id){
    const amount = document.getElementById(id).value;
    let amountNumber = parseFloat(amount);
    amountNumber++;
    document.getElementById(id).value = amountNumber;
    return amountNumber;
} 
function increasePrice(id,amountNumber,value,id2,subtotal){
    const phonePrice = document.getElementById(id).innerText;
    let phonePriceNum = parseFloat(phonePrice);
    phonePriceNum = amountNumber * value;
    document.getElementById(id).innerText = phonePriceNum;

    const boxPrice = document.getElementById(id2).innerText;
    const boxPriceNum = parseFloat(boxPrice);
    document.getElementById(subtotal).innerText = phonePriceNum + boxPriceNum;

} 
function pressValueMinus(id){
    const amount = document.getElementById(id).value;
    let amountNumber = parseFloat(amount);
    amountNumber--;
    document.getElementById(id).value = amountNumber;
   
}
function decreasePrice(id ,value,id2,subtotal){
    const phonePrice = document.getElementById(id).innerText;
    const phonePriceNum = parseFloat(phonePrice);
    const result = phonePriceNum - value;
    document.getElementById(id).innerText = result;
    
    const boxPrice = document.getElementById(id2).innerText;
    const boxPriceNum = parseFloat(boxPrice);
    document.getElementById(subtotal).innerText = result + boxPriceNum;
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
    increasePrice("iphone-price",amountNumber,1219,"box-price","subtotal");
})
document.getElementById("minus-btn").addEventListener("click",function(){ 
    pressValueMinus("amount");  
    decreasePrice("iphone-price",1219,"box-price","subtotal");
})
//second
document.getElementById("second-minus-btn").addEventListener("click",function(){ 
    pressValueMinus("second-amount");  
    decreasePrice("box-price",59,"iphone-price","subtotal");
})
document.getElementById("second-plus").addEventListener("click",function(){  
   const amountNumber = pressValue("second-amount");
    // increase price 
    // const phonePrice = document.getElementById("iphone-Price").innerText;
    // let phonePriceNum = parseFloat(phonePrice);
    // document.getElementById("iphone-Price").innerText = amountNumber * 1219;
    increasePrice("box-price",amountNumber,59,"iphone-price","subtotal");
})