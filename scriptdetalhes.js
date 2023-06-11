let url = window.location.href;
const id = url.substring(url.lastIndexOf('=') + 1);
const dataConteudo = document.getElementById('random');
console.log(id)
fetch(`https://fakestoreapi.com/products`)
.then(res => res.json())
    .then(data => {
      
      for(let i=0; i<data.length;i++){
        if (data[i].id==id) {
            document.querySelector('#random').innerHTML= `
            <div class="row justify-content-center">
            <div class="card bg-dark m-4 p-4" style="width: 700px;">
                    <img src="${data[i].image}" class="card-img-top" alt="Imagem do Card" style="width: 450px; height: 500px;>
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">R$${data[i].price}</p>
                        <p class="card-text">Avaliação: ${data[i].rating.rate}☆</p>
                        <p class="card-text">Descrição: ${data[i].description}</p>
                    </div>
                </div>`;
        }
        
      }
    })
   ;
