function updateProduct(product, price, isIncresing) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isIncresing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  //update total
  const inputTotal = document.getElementById(product + "-total");
  inputTotal.innerText = caseNumber * price;
  //total calculation
  totalCalculation();
}
//get input;
function getInput(product) {
  const getinput = document.getElementById(product + "-number");
  const getNumber = parseInt(getinput.value);
  return getNumber;
}
//Total calculation
function totalCalculation() {
  const phoneInput = getInput("phone") * 1219;
  const caseInput = getInput("case") * 59;
  const subTotal = phoneInput + caseInput;
  const taxTotal = subTotal / 10;
  const total = subTotal + taxTotal;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-total").innerText = taxTotal;
  document.getElementById("total").innerText = total;
}
//phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});

//case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct("case", 59, false);
});
