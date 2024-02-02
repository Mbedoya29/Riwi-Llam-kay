//_______________Translate________________
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: ',en,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}
//_________________Theme__________________
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
//____________Mostrar coders____________ 
function showCoders(data){
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
        skill4.classList.add("badge", 'text-bg-1', "mb-3", "me-3");
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
            nameModal.classList.add("fs-2", "text-center", "nameCoder")
            nameModal.innerText = element.name + " " + element.lastname;

            let emailModal = document.getElementById('emailModal');
            emailModal.innerText = `Correo: ${element.email}`;
            
            let phoneModal = document.getElementById('phoneNumber');
            phoneModal.innerText = `Celular: ${element.phone}`;  
            
            let skillsModal = document.getElementById('skills');
            skillsModal.innerText = `Habilidades en: ${element.skill1}, ${element.skill2}, ${element.skill3}, ${element.skill4}`;  

            let lang = document.getElementById('lang');
            lang.innerText = `Idiomas: ${element.lang}`; 

            let englishLevel = document.getElementById('englishLevel')
            englishLevel.innerText = `Nivel de ingles: ${element.englishLevel}`

            let portfolio = document.getElementById('portfolio');
            portfolio.classList.add("font-weight-bold")
            portfolio.innerText = `Portafolio: ${element.link}`; 
        });
})
}
//________________listar________________       
var root = document.getElementById("root");

    fetch("http://localhost:3000/coders")
    .then(response => {
         return response.json()
    }).then(data => {
      showCoders(data)
})
//_______________Detalles______________
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
        showCoders(data)
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
        showCoders(data)
    )) 
}
//______________Filtro A1_______________
function levelA1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=A1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
    )) 
}
//______________Filtro A2_______________
function levelA2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=A2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
    )) 
}
//______________Filtro B1_______________
function levelB1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=B1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
    )) 
}
//______________Filtro B2_______________
function levelB2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=B2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
    )) 
}
//______________Filtro C1_______________
function levelC1(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=C1`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
    )) 
}
//______________Filtro C2_______________
function levelC2(){
    document.getElementById("root").innerHTML = "";
    fetch(`http://localhost:3000/coders?englishLevel=C2`, {
      method: "GET",
    })
      .then((result) => {return result.json()
    })
      .then((data) => (
        showCoders(data)
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
        showCoders(data)
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
      showCoders(data)
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
      showCoders(data)
  )) 
}
//__________________Edad___________________
function filterAge(){
  let filtro  = document.getElementById("edad").value
  data = [];
  document.getElementById("root").innerHTML = "";
  fetch(`http://localhost:3000/coders`).then(r => r.json()).then(coders=> {

  coders.forEach(function(element){
    if(filtro == 1){
      if(element.age >= 18 && element.age<=25){
         data.push(element);
         document.getElementById("root").innerHTML = "";

         showCoders(data)
      } 
    }else if(filtro == 2){
      if(element.age >= 25 && element.age<=35){
         data.push(element);
         document.getElementById("root").innerHTML = "";

         showCoders(data)
      } 
    }else if(filtro == 3){
      if(element.age >= 35 ){
         data.push(element);
         document.getElementById("root").innerHTML = "";
         
         showCoders(data)
        }
      }
    });
  });
}
//________________Lenguajes________________
function filtreSkills(){
  let lenguajes = document.getElementById("languages").value
  data = [];
  document.getElementById("root").innerHTML = "";
  fetch(`http://localhost:3000/coders`).then(r => r.json()).then(coders=> {

    coders.forEach(function(element){
      if(lenguajes == 4){
        if(element.skill2 == "python" || element.skill3 == "python" || element.skill4 == "python"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
          console.log(data)
          showCoders(data)
        }
      }else if(lenguajes == 5){
        if(element.skill2 == "JavaScript" || element.skill3 == "JavaScript" || element.skill4 == "JavaScript"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 6){
        if(element.skill2 == "SQL" || element.skill3 == "SQL" || element.skill4 == "SQL"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 7){
        if(element.skill2 == "Java" || element.skill3 == "Java" || element.skill4 == "Java"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 8){
        if(element.skill2 == "C#" || element.skill3 == "C#" || element.skill4 == "C#"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 9){
        if(element.skill2 == ".NET" || element.skill3 == ".NET" || element.skill4 == ".NET"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 10){
        if(element.skill2 == "PHP" || element.skill3 == "PHP" || element.skill4 == "PHP"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }else if(lenguajes == 11){
        if(element.skill2 == "React" || element.skill3 == "React" || element.skill4 == "React"){
          data.push(element);
          document.getElementById("root").innerHTML = "";
        
          showCoders(data)
        }
      }
    })
  })
}