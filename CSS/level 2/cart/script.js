const productData = [
  {
    name: "luxury chair",
    description: "white comfortable chair",
    price: 15000,
    url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "classical design chair",
    description: "white comfortable chair",
    price: 8000,
    url: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "yellow chair",
    description: "white comfortable chair",
    price: 15000,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww",
  },
];
const popular = [
  {
    name: "luxury chair",
    description: "white comfortable chair",
    price: 15000,
    url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "classical design chair",
    description: "white comfortable chair",
    price: 8000,
    url: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "yellow chair",
    description: "white comfortable chair",
    price: 15000,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww",
  },
];
const cart = []
function products() {
  clutter = "";
  const productContainer = document.querySelector(".products");
  productData.forEach((item, index) => {
    clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image overflow-hidden object-cover   w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img class=" " src="${item.url}">
                </div>
                
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${item.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${item.description}</h3>
                            <h4 class="font-semibold mt-2">${item.price}</h4>
                        </div>
                        <button data-index="${index}" class=" add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index="${index}"
                                class=" add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });
  productContainer.innerHTML = clutter;
  document.querySelector(".products").addEventListener("click", (details) => {
    if(details.target.classList.contains("add")){
      cart.push(productData[details.target.dataset.index])
    }
    
  });
}

function showCart(){
  
  document.querySelector(".addcart").addEventListener("click", () => {
    document.querySelector(".cartexpnd").style.display = "block";
    var clutter = ""
    console.log(cart)
    cart.forEach((prod, index)=>{
      console.log(prod.name)
      clutter += `<div >${prod.name}</div>`
    })
    document.querySelector(".cartexpnd").innerHTML=clutter;
 
  });
  
}


showCart()
products();
