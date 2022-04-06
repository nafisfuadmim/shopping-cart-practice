function updateProduct(isIncresing) {
  const caseInput = document.getElementById("case-number");
  let caseNumber = caseInput.value;
  if (isIncresing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  const inputTotal = document.getElementById("case-total");
  inputTotal.innerText = caseNumber * 59;
}
//phone

//case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct(true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct(false);
});
