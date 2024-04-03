    fetch(`https://fakestoreapi.com/products`).then(data=>data.json()).then(data=>display(data))

    function display(data) {
        for(i of data){
            main_div.innerHTML+=
        `<div class="card shadow" style="width: 18rem;">
        <img src="${i.image}" class="card-img-top" alt="..." style="height:18rem">
         <div class="card-body">
         <h5 class="card-title text-center">${i.title}</h5>

        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               More...
             </button>
            </h2>
           <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
             <div class="accordion-body">
                 <p>${i.description}</p>
             </div>
           </div>
        </div>
        </div>
     

         <h5 class="card-title">${i.price}$</h5>
         <div class="d-flex align-items-end">
         <div><span class="badge text-bg-warning"><h6>${i.rating.rate}</h6></span></div>
         <div><a href="#" class="btn btn-primary ms-5">Add to Cart</a></div>
         </div>
         </div>`
        }

    }
