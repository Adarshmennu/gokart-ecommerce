document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productid=localStorage.getItem("productDetails");

    
        if (allproducts && productid) {
            let selectproduct=allproducts.find((v)=>{
                return v.id==productid;
            })
           
            if (selectproduct) {
                let costomrReview=""
                productDetails.innerHTML=`
                 <div  class="productcon">
                 
                    <div class="img">

                        <img src="${selectproduct.thumbnail}" />
                        
                    </div>

                    <div class="description">

                        <h1>${selectproduct.title}</h1> 

                        <h3 class="rating">
                            ${selectproduct.rating}${"⭐".repeat(Math.floor(selectproduct.rating))} (<a href="#reviewcontainer" target="">${selectproduct.reviews.length}</a>)
                        </h3>

                        <p class="price">
                            &#8377;${Math.round(selectproduct.price * 90-(selectproduct.price * 90*selectproduct.discountPercentage/100))}   
                            <del>
                                &#8377;${Math.floor(selectproduct.price * 90)}
                            </del>
                         </p>
                         <strong>Inclusive of all taxes</strong>
                         <p class="stock">
                            ${selectproduct.stock > 0 ? "In Stock" : "Out of Stock"}
                        </p>
                        <hr><br> 
                        <h3>Description</h3>
                        <p>${selectproduct.description}</p> 
                    </div>     
                  </div>  
                 <div class="detailscon">

                     <div class="btninfo">
                     <button id="cartbtn" ${selectproduct.stock===0?"disable" : ""}><i class="fa-solid fa-cart-shopping"></i>  Add to Cart</button>
                       <table class="about">
                      <tr>
                          <td>Warranty</td>
                          <td><i class="fa-solid fa-shield-halved"></i>${selectproduct.warrantyInformation}</td>
                      </tr>
                      </table>

                     </div>

                     <div class="info">
                     <hr>
                     <h2>About the Product</h2>  
                     <table class="about">
                         <tr>
                             <td>Brand</td>
                             <td>${selectproduct.brand}</td>
                         </tr>
                         <tr>
                             <td>Category</td>
                             <td>${selectproduct.category}</td>
                         </tr>
                         <tr>
                             <td>Tags</td>
                             <td>${selectproduct.tags.map((v)=>{return v})}</td>
                         </tr>
                         <tr>
                             <td>Weight</td>
                             <td>${selectproduct.weight} </td>
                         </tr>
                         <tr>
                             <td>width</td>
                             <td>${selectproduct.dimensions.width}</td>
                         </tr>
                         <tr>
                             <td>Height</td>
                             <td>${selectproduct.dimensions.height}</td>
                         </tr>
                         <tr>
                             <td>Depth</td>
                             <td>${selectproduct.dimensions.depth}</td>
                         </tr>
                         <tr>
                             <td>CreatedAt</td>
                             <td>${selectproduct.meta.createdAt}</td>
                         </tr><tr>
                             <td>UpdatedAt</td>
                             <td>${selectproduct.meta.updatedAt}</td>
                         </tr>
                         <tr>
                             <td>QrCode</td>
                             <td><img src="https://cdn.dummyjson.com/public/qr-code.png"alt=""/></td>
                         </tr>
                         </tr><tr>
                             <td>Barcode</td>
                             <td>${selectproduct.meta.barcode}</td>
                         </tr>     
                               
                     </table>
                     </div> 
                     

                 </div>
                 
                 <div class="reviewcon" id="reviewcontainer">
                       <hr>
                       <h1> Customer reviews  </h1>      
                      <div id="review">
                          
                             
                      </div>

                 </div>
         
                `
                  let reviewHTML = "";

                selectproduct.reviews.map((r) => {
                    
                    
                    reviewHTML += `
                        <div id="review">
                            <p><strong>${r.reviewerName}</strong></p>
                            <p>${"⭐".repeat(Math.floor(r.rating))}</p>
                            <p>${r.comment}</p>
                        </div>
                    `
                })
                
                document.getElementById("review").innerHTML = reviewHTML;
                 
                document.getElementById("cartbtn").addEventListener("click",()=>{
                    cartproduct(selectproduct)
                 })
                 
                 

            } else {
                productDetails.innerHTML="Product is NOT availble"
            }
            
        }else{
                productDetails.innerHTML="Product Not Found"
        }
    
})
 

function cartproduct(prod) {
    
   
   let cart=JSON.parse(localStorage.getItem("cart")) || []
   cart.push(prod)
   localStorage.setItem("cart", JSON.stringify(cart)); 
   alert("Product added to cart ✅");  
}

// function cartproduct(prod) {

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // check if product already exists
//     let existing = cart.find((item) => item.id === prod.id);

//     if (existing) {
//         existing.quantity += 1;  // increase quantity
//     } else {
//         cart.push({ ...prod, quantity: 1 }); // add new product
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     //updateCartCount();

//     alert("Product added to cart ✅");
// }