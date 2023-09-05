const product = document.getElementById('product')
const quantity = document.getElementById('quantity')
const productValue = product.value
const quantityValue = quantity.value

const setDataLocalStorage = (product, quantity) => {
  const cart = callLocalStorage()
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart)
  localStorage.setItem('cart' , cartStringified)
  return cart

}

// const result = setDataLocalStorage(productValue,quantityValue);
// console.log(result)

const callLocalStorage = () => {
  let cart = {}
  const newCart = localStorage.getItem('cart')
  if(newCart){
    cart = JSON.parse(newCart)
  }
  return cart
  
  
}



 
 
  const btn = document.getElementById('btn')
 btn.addEventListener("click" , function(){
  const productValue = product.value
  const quantityValue = quantity.value
  setDataLocalStorage(productValue,quantityValue)
      const ul = document.getElementById('ul')
      const li = document.createElement('li')
      
     
        li.innerText = `${productValue}  ${quantityValue} `
        li.style.backgroundColor ="pink"
        li.style.padding = "10px"
        
        li.style.margin = "10px"
        console.log(li.innerText) 
        ul.appendChild(li)
      product.value = ""
      quantity.value = ""
      })
      

   function showingLocalStorageUi(){
    const localStorageObject = JSON.parse(localStorage.cart)
    for (const key in localStorageObject) {
      const ul = document.getElementById('ul')
      const li = document.createElement('li')
      
     
        li.innerText = `${key}  ${localStorageObject[key]} `
        li.style.backgroundColor ="pink"
        li.style.padding = "10px"
        
        li.style.margin = "10px"
        console.log(li.innerText) 
        ul.appendChild(li)
      product.value = ""
      quantity.value = ""
    }
   }
   showingLocalStorageUi()   
  




