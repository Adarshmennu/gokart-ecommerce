let productcontainer=document.getElementById("productcontainer");
let products=[];
let productid=localStorage.getItem("productDetails");
function fetchdata() {
    fetch("https://dummyjson.com/products")
    .then((res)=>{
      
        
        return res.json()
    })
    .then((val)=>{
        //console.log(val.products);
        
        products=val.products;
        localStorage.setItem("allproducts",JSON.stringify(products))
        displayproducts(products)
    })
}
fetchdata() 
    
function displayproducts(prod) {
    
    
    let output=""
    
    
    
    prod.map((val)=>{
        let stockText = "";
        if (val.stock > 20) {
            stockText = `<p class="in-stock">In Stock (<strong>${val.stock}</strong>)</p>`;
        } else if (val.stock > 0) {
            stockText = `<p class="low-stock">Only <strong>${val.stock}</strong> left!</p>`;
        } else {
            stockText = `<p class="out-stock">Out of Stock</p>`;
        }
        
       output+=`
       
       <main >
        <div>
        <img src="${val.thumbnail}" />
        </div> 
       <h1>${val.title}</h1>       
        <div >
               
            <p>&#8377;${Math.round(val.price * 90-(val.price * 90*val.discountPercentage/100))}   <del>&#8377;${Math.floor(val.price*90)}</del></p> 
            <p>${stockText}</p>   
            <button class="datatbtn" onclick="viewProduct(${val.id})">Details</button>
            <button class="ratetbtn" onclick="ratings()">${val.rating} ⭐</button>
       </div> 
       <button onclick="cartproduct(${val.id})"  class="cartbtn" ${val.stock===0?"disable" : ""}><i class="fa-solid fa-cart-shopping"></i>  Add to Cart</button>
       </main>
       
       `
       
 
    })

    productcontainer.innerHTML=output;
    // document.getElementById("cartbtn").addEventListener("click",()=>{
    //                 cartproduct(prod)
    // })
    
}

document.getElementById("Searchproduct").addEventListener("input",(e) =>{
    console.log(e.target.value);
    
 let searchterm=e.target.value.toLowerCase()
 let filteredproduct=products.filter((v)=>{
      return v.title.toLowerCase().includes(searchterm)|| v.category.toLowerCase().includes(searchterm)
 })
 displayproducts(filteredproduct)
})


 
function viewProduct(id) {
    //console.log(id);
    
      //let selectproduct=products.find((p)=>{
         
        
        //  p.id===id
           //localStorage.setItem("productDetails",JSON.stringify(products))
           localStorage.setItem("productDetails",id)
         window.location.href="../Details/details.html"
    // })
      
     
} 

// function cartproduct(prod) {
//  console.log(prod);
 
   
//     let items=JSON.parse(localStorage.getItem("items")) || []
//    items.push(prod)
//    localStorage.setItem("items", JSON.stringify(items)); 
//    alert("Product added to cart ✅");  
// }