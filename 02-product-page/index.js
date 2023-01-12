const btn360 = document.querySelector('#btn360')
const btnClose = document.querySelector('#btnClose')
const imgProduct = document.querySelector('#img-product')
const imgProduct360 = document.querySelector('#img-product-360')

btn360.addEventListener('click', () => {
  imgProduct.className = "hide"
  imgProduct360.className = "show"

  btn360.className.baseVal = "hide"
  btnClose.className.baseVal = "show"
})

btnClose.addEventListener('click', () => {
  imgProduct360.className = "hide"
  imgProduct.className = "show"

  btnClose.className.baseVal = "hide"
  btn360.className.baseVal = "show"
})