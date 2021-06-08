function amountReader(id,value,intoPrice){
    const amount = document.getElementById(id).value;
    const amountNum = parseInt(amount);
    const total = value * amountNum;
    document.getElementById(intoPrice).innerText = total; 
    return total; 
}
function increase(id){
    const amount = document.getElementById(id).value;
    let amountNum = parseInt(amount);
    amountNum++; 
    document.getElementById(id).value = amountNum;
}
function decrease(id){
    const amount = document.getElementById(id).value;
    let amountNum = parseInt(amount); 
    if(amountNum>=1){ 
    amountNum--; 
    document.getElementById(id).value = amountNum;
    } 
}
function addMemo(){ 
    const iphone = document.getElementById("iphone-price").innerText;
    const iphoneNum = parseFloat(iphone); 
    const box = document.getElementById("box-price").innerText;
    const boxNum = parseFloat(box); 
    const result = iphoneNum + boxNum;
    document.getElementById("subtotal").innerText= result;
    document.getElementById("total").innerText= result; 
}
// phone value
const valuePhone = document.getElementById("iphone-price").innerText;
const valuePhoneNum = parseFloat(valuePhone);
//box value 
const valueBox = document.getElementById("box-price").innerText;
const valueBoxNum = parseFloat(valueBox);
//phone plus 
document.getElementById("plus-btn").addEventListener("click",function(){
    increase("amount");
    const iphone = amountReader("amount",valuePhoneNum,"iphone-price");
    addMemo()
})
//phone minus
document.getElementById("minus-btn").addEventListener("click",function(){
    decrease("amount");
    const iphone = amountReader("amount",valuePhoneNum,"iphone-price");
    addMemo()
})
//box plus 
document.getElementById("second-plus").addEventListener("click",function(){
    increase("second-amount");
    const iphone = amountReader("second-amount",valueBoxNum,"box-price");
    addMemo()
})
//box minus
document.getElementById("second-minus-btn").addEventListener("click",function(){
    decrease("second-amount");
    const iphone = amountReader("second-amount",valueBoxNum,"box-price");
    addMemo()
})