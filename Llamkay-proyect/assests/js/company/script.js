function changeTheme(param){
  let color = document.getElementById('theme-body');
  if (param == "dark"){
      color.removeAttribute("data-bs-theme","light");
      color.setAttribute("data-bs-theme", "dark")
  }else{
      color.removeAttribute("data-bs-theme", "dark");
      color.setAttribute("data-bs-theme", "light")
  }

  if(param == "dark"){
      document.getElementById('footer').classList.remove('light');
      document.getElementById('footer').classList.add('dark')
  }else{
      document.getElementById('footer').classList.remove('dark');
      document.getElementById('footer').classList.add('light')
  }
}

function showCoders(){
  fetch("http://localhost:3000/coders")
    .then(response => {
         return response.json()
    }).then(data => {

      const {results} = data
      const cards = document.querySelector('#cards')

      results.forEach(element => {
        coder += `
      <div class="col-md-3">
        <div class="card text-center" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top img-fluid mx-auto d-block mt-3" alt="...">
          <h4 id="${element.id}" class="title-text text-center mt-3 mb-3">${element.name}+ " " +${element.lastname}</h4>
          <button class="badge text-bg skill1 mx-auto">${element.skill1}</button>
          <div class="card-body">
            <button class="badge text-bg-1 mb-3">${element.skill2}</button>
            <button class="badge text-bg-1 mb-3">${element.skill3}</button>
            <button class="badge text-bg-1 mb-3">${element.skill4}</button>
            <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#information" value="${element.id}" src="${element.link}" >Ver perfil</button>
          </div>
        </div>
      </div>
      `
      cards.innerHTML = coder
      })
})
}


//listar
        
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
                card.classList.add("card", "text-center");
                card.setAttribute('style', "width: 18rem");
                col.appendChild(card);

                let img = document.createElement("img");
                img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
                img.setAttribute('src' , element.img );
                card.appendChild(img);

                let nombre = document.createElement("h4");
                nombre.innerText= element.name + " " +element.lastname;
                nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
                card.appendChild(nombre);
                nombre.setAttribute('id' , element.id);
                card.appendChild(nombre);

                let skill1 = document.createElement("button");
                skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
                skill1.innerText= element.skill1;
                card.appendChild(skill1);

                let card_body = document.createElement("div");
                card_body.classList.add("card-body");
                card.appendChild(card_body);              
                  
                let skill2 = document.createElement("button");
                skill2.classList.add("badge", 'text-bg-1', "mb-3");
                skill2.innerText= element.skill2;
                card_body.appendChild(skill2);
                  
                let skill3 = document.createElement("button");
                skill3.classList.add("badge", 'text-bg-1', "mb-3");
                skill3.innerText= element.skill3;
                card_body.appendChild(skill3);

                let skill4 = document.createElement("button");
                skill4.classList.add("badge", 'text-bg-1', "mb-3");
                skill4.innerText= element.skill4;
                card_body.appendChild(skill4);

                let details = document.createElement("button");
                details.classList.add("btn", "btn-primary");
                details.setAttribute("src", element.link);
                details.setAttribute("type", "button");
                details.setAttribute("data-bs-toggle","modal")
                details.setAttribute("data-bs-target","#information")
                details.setAttribute("value", element.id)
                details.innerText= "ver perfil";
                card_body.appendChild(details);
                
                details.addEventListener("click", function () {
                    coderDetails(element.id);

                    let nameModal = document.getElementById('nameModal');
                    nameModal.classList.add("fs-2", "text-center")
                    nameModal.innerText = element.name + " " + element.lastname;

                    let emailModal = document.getElementById('emailModal');
                    emailModal.innerText = `Correo: ${element.email}`;
                    
                    let phoneModal = document.getElementById('phoneNumber');
                    phoneModal.innerText = `Celular: ${element.phone}`;  
                    
                    let skillsModal = document.getElementById('skills');
                    skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  

                    let lang = document.getElementById('lang');
                    lang.innerText = `Idiomas: ${element.lang}`; 

                    let portfolio = document.getElementById('portfolio');
                    portfolio.classList.add("font-weight-bold")
                    portfolio.innerText = `Portafolio: ${element.link}`; 

                });
    })
})

function coderDetails(id) {
    fetch(`http://localhost:3000/coders/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
}
//___________Filtro Femenino___________
function femaleGender(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?gender=Femenino`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//___________Filtro Masculino___________
function maleGender(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?gender=Masculino`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro A1_______________
function levelA1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=A1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro A2_______________
function levelA2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=A2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro B1_______________
function levelB1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=B1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro B2_______________
function levelB2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=B2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro C1_______________
function levelC1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=C1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//______________Filtro C2_______________
function levelC2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?english-level=C2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//_______________Frontend_______________
function frontend(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?skill1=frontend`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        data.forEach(function(element) {

            let col = document.createElement('div');
            col.classList.add("col-md-3");
            root.appendChild(col)
    
            let card = document.createElement("div");
            card.classList.add("card", "text-center");
            card.setAttribute('style', "width: 18rem");
            col.appendChild(card);
    
            let img = document.createElement("img");
            img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
            img.setAttribute('src' , element.img );
            card.appendChild(img);
    
            let nombre = document.createElement("h4");
            nombre.innerText= element.name + " " +element.lastname;
            nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
            card.appendChild(nombre);
            nombre.setAttribute('id' , element.id);
            card.appendChild(nombre);
    
            let skill1 = document.createElement("button");
            skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
            skill1.innerText= element.skill1;
            card.appendChild(skill1);
    
            let card_body = document.createElement("div");
            card_body.classList.add("card-body");
            card.appendChild(card_body);              
                        
            let skill2 = document.createElement("button");
            skill2.classList.add("badge", 'text-bg-1', "mb-3");
            skill2.innerText= element.skill2;
            card_body.appendChild(skill2);
                        
            let skill3 = document.createElement("button");
            skill3.classList.add("badge", 'text-bg-1', "mb-3");
            skill3.innerText= element.skill3;
            card_body.appendChild(skill3);
    
            let skill4 = document.createElement("button");
            skill4.classList.add("badge", 'text-bg-1', "mb-3");
            skill4.innerText= element.skill4;
            card_body.appendChild(skill4);
    
            let details = document.createElement("button");
            details.classList.add("btn", "btn-primary");
            details.setAttribute("src", element.link);
            details.setAttribute("type", "button");
            details.setAttribute("data-bs-toggle","modal")
            details.setAttribute("data-bs-target","#informacion")
            details.setAttribute("value", element.id)
            details.innerText= "ver perfil";
            card_body.appendChild(details);
                        
            details.addEventListener("click", function () {
                coderDetails(element.id);
    
                let nameModal = document.getElementById('nameModal');
                nameModal.classList.add("fs-2", "text-center")
                nameModal.innerText = element.name + " " + element.lastname;
    
                let emailModal = document.getElementById('emailModal');
                emailModal.innerText = `Correo: ${element.email}`;
                            
                let phoneModal = document.getElementById('phoneNumber');
                phoneModal.innerText = `Celular: ${element.phone}`;  
                            
                let skillsModal = document.getElementById('skills');
                skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
    
                let lang = document.getElementById('lang');
                lang.innerText = `Idiomas: ${element.lang}`; 
    
                let portfolio = document.getElementById('portfolio');
                portfolio.classList.add("font-weight-bold")
                portfolio.innerText = `Portafolio: ${element.link}`; 
            });      
        })
    )) 
}
//_______________Backend________________
function backend(){
  document.getElementById("root").innerHTML = "";
  fetch(`http://localhost:3000/coders?skill1=backend`, {
    method: "GET",
  })
    .then((result) => {return result.json()
  })
    .then((data) => (
      data.forEach(function(element) {

          let col = document.createElement('div');
          col.classList.add("col-md-3");
          root.appendChild(col)
  
          let card = document.createElement("div");
          card.classList.add("card", "text-center");
          card.setAttribute('style', "width: 18rem");
          col.appendChild(card);
  
          let img = document.createElement("img");
          img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
          img.setAttribute('src' , element.img );
          card.appendChild(img);
  
          let nombre = document.createElement("h4");
          nombre.innerText= element.name + " " +element.lastname;
          nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
          card.appendChild(nombre);
          nombre.setAttribute('id' , element.id);
          card.appendChild(nombre);
  
          let skill1 = document.createElement("button");
          skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
          skill1.innerText= element.skill1;
          card.appendChild(skill1);
  
          let card_body = document.createElement("div");
          card_body.classList.add("card-body");
          card.appendChild(card_body);              
                      
          let skill2 = document.createElement("button");
          skill2.classList.add("badge", 'text-bg-1', "mb-3");
          skill2.innerText= element.skill2;
          card_body.appendChild(skill2);
                      
          let skill3 = document.createElement("button");
          skill3.classList.add("badge", 'text-bg-1', "mb-3");
          skill3.innerText= element.skill3;
          card_body.appendChild(skill3);
  
          let skill4 = document.createElement("button");
          skill4.classList.add("badge", 'text-bg-1', "mb-3");
          skill4.innerText= element.skill4;
          card_body.appendChild(skill4);
  
          let details = document.createElement("button");
          details.classList.add("btn", "btn-primary");
          details.setAttribute("src", element.link);
          details.setAttribute("type", "button");
          details.setAttribute("data-bs-toggle","modal")
          details.setAttribute("data-bs-target","#informacion")
          details.setAttribute("value", element.id)
          details.innerText= "ver perfil";
          card_body.appendChild(details);
                      
          details.addEventListener("click", function () {
              coderDetails(element.id);
  
              let nameModal = document.getElementById('nameModal');
              nameModal.classList.add("fs-2", "text-center")
              nameModal.innerText = element.name + " " + element.lastname;
  
              let emailModal = document.getElementById('emailModal');
              emailModal.innerText = `Correo: ${element.email}`;
                          
              let phoneModal = document.getElementById('phoneNumber');
              phoneModal.innerText = `Celular: ${element.phone}`;  
                          
              let skillsModal = document.getElementById('skills');
              skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
  
              let lang = document.getElementById('lang');
              lang.innerText = `Idiomas: ${element.lang}`; 
  
              let portfolio = document.getElementById('portfolio');
              portfolio.classList.add("font-weight-bold")
              portfolio.innerText = `Portafolio: ${element.link}`; 
          });      
      })
  )) 
}
//_______________Full Stack________________
function fullStack(){
  document.getElementById("root").innerHTML = "";
  fetch(`http://localhost:3000/coders?skill1=fullstack`, {
    method: "GET",
  })
    .then((result) => {return result.json()
  })
    .then((data) => (
      data.forEach(function(element) {

          let col = document.createElement('div');
          col.classList.add("col-md-3");
          root.appendChild(col)
  
          let card = document.createElement("div");
          card.classList.add("card", "text-center");
          card.setAttribute('style', "width: 18rem");
          col.appendChild(card);
  
          let img = document.createElement("img");
          img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
          img.setAttribute('src' , element.img );
          card.appendChild(img);
  
          let nombre = document.createElement("h4");
          nombre.innerText= element.name + " " +element.lastname;
          nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
          card.appendChild(nombre);
          nombre.setAttribute('id' , element.id);
          card.appendChild(nombre);
  
          let skill1 = document.createElement("button");
          skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
          skill1.innerText= element.skill1;
          card.appendChild(skill1);
  
          let card_body = document.createElement("div");
          card_body.classList.add("card-body");
          card.appendChild(card_body);              
                      
          let skill2 = document.createElement("button");
          skill2.classList.add("badge", 'text-bg-1', "mb-3");
          skill2.innerText= element.skill2;
          card_body.appendChild(skill2);
                      
          let skill3 = document.createElement("button");
          skill3.classList.add("badge", 'text-bg-1', "mb-3");
          skill3.innerText= element.skill3;
          card_body.appendChild(skill3);
  
          let skill4 = document.createElement("button");
          skill4.classList.add("badge", 'text-bg-1', "mb-3");
          skill4.innerText= element.skill4;
          card_body.appendChild(skill4);
  
          let details = document.createElement("button");
          details.classList.add("btn", "btn-primary");
          details.setAttribute("src", element.link);
          details.setAttribute("type", "button");
          details.setAttribute("data-bs-toggle","modal")
          details.setAttribute("data-bs-target","#informacion")
          details.setAttribute("value", element.id)
          details.innerText= "ver perfil";
          card_body.appendChild(details);
                      
          details.addEventListener("click", function () {
              coderDetails(element.id);
  
              let nameModal = document.getElementById('nameModal');
              nameModal.classList.add("fs-2", "text-center")
              nameModal.innerText = element.name + " " + element.lastname;
  
              let emailModal = document.getElementById('emailModal');
              emailModal.innerText = `Correo: ${element.email}`;
                          
              let phoneModal = document.getElementById('phoneNumber');
              phoneModal.innerText = `Celular: ${element.phone}`;  
                          
              let skillsModal = document.getElementById('skills');
              skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
  
              let lang = document.getElementById('lang');
              lang.innerText = `Idiomas: ${element.lang}`; 
  
              let portfolio = document.getElementById('portfolio');
              portfolio.classList.add("font-weight-bold")
              portfolio.innerText = `Portafolio: ${element.link}`; 
          });      
      })
  )) 
}
function edadfiltro(){
  let filtro  = document.getElementById("edad").value
  data = [];
  document.getElementById("root").innerHTML = "";
  fetch(`http://localhost:3000/coders`).then(r => r.json()).then(coders=> {

  coders.forEach(function(element){
    if(filtro == 1){
      if(element.age >= 18 && element.age<=25){
         data.push(element);
         document.getElementById("root").innerHTML = "";
          data.forEach(function(element) {
    
              let col = document.createElement('div');
              col.classList.add("col-md-3");
              root.appendChild(col)
      
              let card = document.createElement("div");
              card.classList.add("card", "text-center");
              card.setAttribute('style', "width: 18rem");
              col.appendChild(card);
      
              let img = document.createElement("img");
              img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
              img.setAttribute('src' , element.img );
              card.appendChild(img);
      
              let nombre = document.createElement("h4");
              nombre.innerText= element.name + " " +element.lastname;
              nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
              card.appendChild(nombre);
              nombre.setAttribute('id' , element.id);
              card.appendChild(nombre);
      
              let skill1 = document.createElement("button");
              skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
              skill1.innerText= element.skill1;
              card.appendChild(skill1);
      
              let card_body = document.createElement("div");
              card_body.classList.add("card-body");
              card.appendChild(card_body);              
                          
              let skill2 = document.createElement("button");
              skill2.classList.add("badge", 'text-bg-1', "mb-3");
              skill2.innerText= element.skill2;
              card_body.appendChild(skill2);
                          
              let skill3 = document.createElement("button");
              skill3.classList.add("badge", 'text-bg-1', "mb-3");
              skill3.innerText= element.skill3;
              card_body.appendChild(skill3);
      
              let skill4 = document.createElement("button");
              skill4.classList.add("badge", 'text-bg-1', "mb-3");
              skill4.innerText= element.skill4;
              card_body.appendChild(skill4);
      
              let details = document.createElement("button");
              details.classList.add("btn", "btn-primary");
              details.setAttribute("src", element.link);
              details.setAttribute("type", "button");
              details.setAttribute("data-bs-toggle","modal")
              details.setAttribute("data-bs-target","#informacion")
              details.setAttribute("value", element.id)
              details.innerText= "ver perfil";
              card_body.appendChild(details);
                          
              details.addEventListener("click", function () {
                  coderDetails(element.id);
      
                  let nameModal = document.getElementById('nameModal');
                  nameModal.classList.add("fs-2", "text-center")
                  nameModal.innerText = element.name + " " + element.lastname;
      
                  let emailModal = document.getElementById('emailModal');
                  emailModal.innerText = `Correo: ${element.email}`;
                              
                  let phoneModal = document.getElementById('phoneNumber');
                  phoneModal.innerText = `Celular: ${element.phone}`;  
                              
                  let skillsModal = document.getElementById('skills');
                  skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
      
                  let lang = document.getElementById('lang');
                  lang.innerText = `Idiomas: ${element.lang}`; 
      
                  let portfolio = document.getElementById('portfolio');
                  portfolio.classList.add("font-weight-bold")
                  portfolio.innerText = `Portafolio: ${element.link}`; 
              });      
          })
      } 
    }else if(filtro == 2){
      if(element.age >= 25 && element.age<=35){
         data.push(element);
         document.getElementById("root").innerHTML = "";
         data.forEach(function(element) {
   
             let col = document.createElement('div');
             col.classList.add("col-md-3");
             root.appendChild(col)
     
             let card = document.createElement("div");
             card.classList.add("card", "text-center");
             card.setAttribute('style', "width: 18rem");
             col.appendChild(card);
     
             let img = document.createElement("img");
             img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
             img.setAttribute('src' , element.img );
             card.appendChild(img);
     
             let nombre = document.createElement("h4");
             nombre.innerText= element.name + " " +element.lastname;
             nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
             card.appendChild(nombre);
             nombre.setAttribute('id' , element.id);
             card.appendChild(nombre);
     
             let skill1 = document.createElement("button");
             skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
             skill1.innerText= element.skill1;
             card.appendChild(skill1);
     
             let card_body = document.createElement("div");
             card_body.classList.add("card-body");
             card.appendChild(card_body);              
                         
             let skill2 = document.createElement("button");
             skill2.classList.add("badge", 'text-bg-1', "mb-3");
             skill2.innerText= element.skill2;
             card_body.appendChild(skill2);
                         
             let skill3 = document.createElement("button");
             skill3.classList.add("badge", 'text-bg-1', "mb-3");
             skill3.innerText= element.skill3;
             card_body.appendChild(skill3);
     
             let skill4 = document.createElement("button");
             skill4.classList.add("badge", 'text-bg-1', "mb-3");
             skill4.innerText= element.skill4;
             card_body.appendChild(skill4);
     
             let details = document.createElement("button");
             details.classList.add("btn", "btn-primary");
             details.setAttribute("src", element.link);
             details.setAttribute("type", "button");
             details.setAttribute("data-bs-toggle","modal")
             details.setAttribute("data-bs-target","#informacion")
             details.setAttribute("value", element.id)
             details.innerText= "ver perfil";
             card_body.appendChild(details);
                         
             details.addEventListener("click", function () {
                 coderDetails(element.id);
     
                 let nameModal = document.getElementById('nameModal');
                 nameModal.classList.add("fs-2", "text-center")
                 nameModal.innerText = element.name + " " + element.lastname;
     
                 let emailModal = document.getElementById('emailModal');
                 emailModal.innerText = `Correo: ${element.email}`;
                             
                 let phoneModal = document.getElementById('phoneNumber');
                 phoneModal.innerText = `Celular: ${element.phone}`;  
                             
                 let skillsModal = document.getElementById('skills');
                 skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
     
                 let lang = document.getElementById('lang');
                 lang.innerText = `Idiomas: ${element.lang}`; 
     
                 let portfolio = document.getElementById('portfolio');
                 portfolio.classList.add("font-weight-bold")
                 portfolio.innerText = `Portafolio: ${element.link}`; 
             });      
         })
      } 
    }else if(filtro == 3){
      if(element.age >= 35 ){
         data.push(element);
         document.getElementById("root").innerHTML = "";
         data.forEach(function(element) {
   
             let col = document.createElement('div');
             col.classList.add("col-md-3");
             root.appendChild(col)
     
             let card = document.createElement("div");
             card.classList.add("card", "text-center");
             card.setAttribute('style', "width: 18rem");
             col.appendChild(card);
     
             let img = document.createElement("img");
             img.classList.add('card-img-top', 'img-fluid', "mx-auto","d-block", "mt-3");
             img.setAttribute('src' , element.img );
             card.appendChild(img);
     
             let nombre = document.createElement("h4");
             nombre.innerText= element.name + " " +element.lastname;
             nombre.classList.add("title-text", "text-center", "mt-3", "mb-3")
             card.appendChild(nombre);
             nombre.setAttribute('id' , element.id);
             card.appendChild(nombre);
     
             let skill1 = document.createElement("button");
             skill1.classList.add("badge",  'text-bg', "skill1", "mx-auto");
             skill1.innerText= element.skill1;
             card.appendChild(skill1);
     
             let card_body = document.createElement("div");
             card_body.classList.add("card-body");
             card.appendChild(card_body);              
                         
             let skill2 = document.createElement("button");
             skill2.classList.add("badge", 'text-bg-1', "mb-3");
             skill2.innerText= element.skill2;
             card_body.appendChild(skill2);
                         
             let skill3 = document.createElement("button");
             skill3.classList.add("badge", 'text-bg-1', "mb-3");
             skill3.innerText= element.skill3;
             card_body.appendChild(skill3);
     
             let skill4 = document.createElement("button");
             skill4.classList.add("badge", 'text-bg-1', "mb-3");
             skill4.innerText= element.skill4;
             card_body.appendChild(skill4);
     
             let details = document.createElement("button");
             details.classList.add("btn", "btn-primary");
             details.setAttribute("src", element.link);
             details.setAttribute("type", "button");
             details.setAttribute("data-bs-toggle","modal")
             details.setAttribute("data-bs-target","#informacion")
             details.setAttribute("value", element.id)
             details.innerText= "ver perfil";
             card_body.appendChild(details);
                         
             details.addEventListener("click", function () {
                 coderDetails(element.id);
     
                 let nameModal = document.getElementById('nameModal');
                 nameModal.classList.add("fs-2", "text-center")
                 nameModal.innerText = element.name + " " + element.lastname;
     
                 let emailModal = document.getElementById('emailModal');
                 emailModal.innerText = `Correo: ${element.email}`;
                             
                 let phoneModal = document.getElementById('phoneNumber');
                 phoneModal.innerText = `Celular: ${element.phone}`;  
                             
                 let skillsModal = document.getElementById('skills');
                 skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  
     
                 let lang = document.getElementById('lang');
                 lang.innerText = `Idiomas: ${element.lang}`; 
     
                 let portfolio = document.getElementById('portfolio');
                 portfolio.classList.add("font-weight-bold")
                 portfolio.innerText = `Portafolio: ${element.link}`; 
             });      
         })
      } 
    }
  });
   
     
  });
  }

        