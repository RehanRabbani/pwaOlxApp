console.log("hello");
function getData(){
    fetch("https://greencommunitylaundry.herokuapp.com/api/products ")
    .then(function(response){
    return response.json();
    }
)
.then(function(products)
{
    let show =document.querySelector('#list')
    for(let i =0;i<=products.length;i++)
    {
        show.innerHTML+=`
        <section class="card-show"> 
        <div class="card">
            <div class="bg-img" style="background-image:url('https://greencommunitylaundry.herokuapp.com/api/Images/${products[i].image}')"></div>
           
            <p>name:${products[i].name}</p>
            <p>details  </p>
        </div>
      
        


         </section>
        `
    }

}
)
}