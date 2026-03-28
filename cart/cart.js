document.addEventListener( "DOMContentLoaded",()=>{
    displaycart()
} )
function displaycart() {
  let cartcontent=document.getElementById("cartcontent") 
  let totalprice=document.getElementById("totalprice") 
  let cart=JSON.parse(localStorage.getItem("cart")) || []
  

 
  cartcontent.innerHTML="";
  let totalBill=0
  if (cart.length===0) {
      cartcontent.innerHTML=`
      <div class="empty">
     <img src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAiZAAZAA0" />

      <p>Your cart is Empty 🛒 </p>
      </div>
      ` 

      totalprice.innerHTML=""

      return;
  }

  // cart.map((product,i)=>{
   cart.forEach((product,i) => {
    
   
    
    let price =Math.round(product.price*90);
    // let price = product.price ? Math.round(product.price * 90) : 0;
    let itemtotal=price ;
    totalBill+=itemtotal;
    
    let newprod = document.createElement("div")
    newprod.setAttribute("class","prod-info")
    newprod.innerHTML=`
    <div class="cartdetails">

    <div class="img">
        <img src="${product.thumbnail}" />
     </div>

     <div class="details">

    <h1>${product.title}</h1>

    <div>
    <p>${product.category}</p>
    <p>${product.availabilityStatus}</p>
    <p>${product.returnPolicy}</p>
    </div>
   
    <div class="btncon"> 
    <p>Price : <i class="fa-solid fa-indian-rupee"></i>
    ₹${product.price.toFixed(2)*90}</p>

    <button class="remove" onclick="removeFromcart(${i})">Remove</button>
    </div>

    </div>
    </div>
    `
    cartcontent.append(newprod)
  })
   totalprice.innerHTML=`<div class="total"><h2>Total price: &#8377 ${totalBill}</h2></div>`

}


function removeFromcart(indax) {
  let cart=JSON.parse(localStorage.getItem("cart")) ||[]
  cart.splice(indax,1)
  localStorage.setItem("cart",JSON.stringify(cart))
  displaycart()
  
}