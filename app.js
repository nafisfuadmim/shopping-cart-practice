function updateProduct(isIncresing) {
  const caseInput = document.getElementById("case-number");
  const caseNumber = caseInput.value;
  if (isIncresing == true) {
    caseInput.value = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseInput.value = parseInt(caseNumber) - 1;
  }
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct(true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct(false);
});
