function getInput(product) {
    const productAmount = document.getElementById(product + "-amount").value;
    const productAmountNum = parseInt(productAmount);
    return productAmountNum;
}
function calculate() {
    const iphone = getInput("iphone");
    const box = getInput("box");

    let total = iphone * 1219 + box * 59;
    document.getElementById('subtotal').innerText = total;

    let tax = Math.round(total * 0.1);
    document.getElementById("tax").innerText = tax;

    const grandTotal = total + tax;
    document.getElementById("total").innerText = grandTotal;
}
function handelProductAmount(product, isIncrease) {
    const amountNum = getInput(product);
    let productCount = amountNum;

    if (isIncrease == true) {
        productCount = productCount + 1;
    }
    if (isIncrease == false && amountNum > 0) {
        productCount = productCount - 1;
    }
    document.getElementById(product + "-amount").value = productCount;
    let total = 0;
    if (product == "iphone") {
        total = 1219 * productCount;
    }
    if (product == "box") {
        total = 59 * productCount;
    }
    document.getElementById(product + "-Price").innerText = total;
    calculate();
}
