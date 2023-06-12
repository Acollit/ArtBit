const call = document.querySelector('.subscribe__price')
if (call) {
  var price = document.getElementById("price").innerHTML;
  var priceTwo = document.getElementById("priceTwo").innerHTML;
  var discount = 15;
  var discountTwo = 25;
  var discountAmount = Math.floor(price * (1 + discount / 100));
  var discountAmountTwo = Math.floor(priceTwo * (1 + discountTwo / 100));

  document.getElementById("discount").innerHTML = discountAmount.toFixed(0);
  document.getElementById("discountTwo").innerHTML = discountAmountTwo.toFixed(0);

}

const passwordInput = document.getElementById('passwordd')
const element = document.getElementById('btn')
const seved = document.querySelector('.form__saved')

if (passwordInput) {
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value) {
      element.classList.remove('btn--disabel')
    } else {
      element.classList.add('btn--disabel')
    }
  })

  element.addEventListener("click", function () {
    if (passwordInput.value) {
      seved.style.visibility = "visible";
    }



  })
}

