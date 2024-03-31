let elList = document.querySelector('.list')

fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data)=>{
    data.forEach(item =>{
        let newLi = document.createElement('li')
        newLi.innerHTML=`
    <div class="cards"
        <div class="card" style="width: 18rem;">
        <img width"200" src=${item.image} alt="...">
        <div class="card-body">
          <p>${item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
        `
        elList.appendChild(newLi)
    });
})