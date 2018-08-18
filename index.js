console.log("hello");
let i;
function getData(){
    fetch("https://greencommunitylaundry.herokuapp.com/api/products ")
    .then(function(response){
    return response.json();
    }
)
.then(function(products)
{
    let show =document.querySelector('#list')
    for( i =0;i<=products.length;i++)
    {
        show.innerHTML+=`
        <section class="" onclick=changeValue(${i})> 
        <div class="card">
            <div class="bg-img" style="background-image:url('https://greencommunitylaundry.herokuapp.com/api/Images/${products[i].image}')"></div>
           
            <p>name:${products[i].name}</p>
            <p>price:${products[i].price} </p>
        </div>
      
        


         </section>
        `
    }

}

)
}
function changeValue(i)
{
    console.log(i);
}