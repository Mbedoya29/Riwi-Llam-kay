
        var root = document.getElementById("root");

        fetch("http://localhost:3000/coders")
        .then(response => {
            return response.json()
        }).then(data => {

            
           data.forEach(function(element){
                  let col = document.createElement('div');
                  col.classList.add("col-md-3");
                  root.appendChild(col)

                  let card = document.createElement("div");
                  card.classList.add("card",);
                  card.setAttribute('style', "width: 18rem");
                  col.appendChild(card);

                  let img = document.createElement("img");
                  img.classList.add('card-img-top', 'img-fluid');
                  img.setAttribute('src' , element.img );
                  card.appendChild(img);

    

                  let card_body = document.createElement("div");
                  card_body.classList.add("card-body");
                  card.appendChild(card_body);


                  let nombre = document.createElement("h5");
                  nombre.innerText= element.name +element.lastname;
                  nombre.classList.add("title-text")
                  card.appendChild(nombre);
                  nombre.setAttribute('id' , element.id);
                  card.appendChild(nombre);
                  

                  let skill1 = document.createElement("button");
                  skill1.classList.add("badge",  'text-bg-info');
                  skill1.innerText= element.skill1;
                  card_body.appendChild(skill1);

                  let skill2 = document.createElement("button");
                  skill2.classList.add("badge", 'text-bg-info');
                  skill2.setAttribute("type", "button");
                  skill2.innerText= element.skill2;
                  card_body.appendChild(skill2);
                  
                  let skill3 = document.createElement("button");
                  skill3.classList.add("badge", 'text-bg-info');
                  skill3.setAttribute("type", "button");
                  skill3.innerText= element.skill3;
                  card_body.appendChild(skill3);

                  let detalles = document.createElement("button");
                  detalles.classList.add("btn", "btn-primary");
                  detalles.setAttribute("src", element.link);
                  detalles.setAttribute("type", "button");
                  detalles.innerText= "ver perfil";
                  card_body.appendChild(detalles);
                  
                })
            })

