/*__________URl terminal json __________ */
const url = "http://localhost:3000/"

/* ____________inicio de sesion____________ */
function autenticador(){
    
    let username = document.getElementById('user_login').value; /* capturamos el usuario del inicio de sesion */
    let password = document.getElementById('pass_login').value; /* capturamos la contraseña del inicio de sesion */
    let type_acount_login = document.getElementById('type_acount_login').value;

    if(type_acount_login == "0"){ 
        fetch (url+"coders")
        .then(response => response.json())
        .then(data =>{
            let resultado = data.filter(function(element){
                return element.username == username;
                console.log(resultado)
            })
            if(resultado.length > 0){
                if(resultado[0].pass == password){
                    localStorage.setItem("autenticado","si");
                    location.href= "./coder-profile.html"
                }else{
                    alert("Usuario o Contraseña Incorrecta");
                }
            }else{                
                alert("Es Necesario Registrarse.");
                }
            })
    }
    else if(type_acount_login == "1"){   
        fetch(url+"company")
        .then(response => response.json())
        .then(data =>{
            let resultado = data.filter(function(element){
                return element.username == username;
            })
            if (resultado.length > 0){
                if(resultado[0].pass == password){
                    localStorage.setItem("autenticado","si");
                    location.href = "./company.html"
                }else{
                    alert("Usuario o Contraseña Incorrecta");
                }}
            else{
                    alert("Es Necesario Registrarse.");
                }
        })
    }
}
/* ____________/inicio de sesion____________ */

/* ____________Crear usuario____________ */
function nuevo_usuario(){

    const type_acount = document.getElementById("type_acount").value;    
    let new_username = document.getElementById("new_username");
    let new_email = document.getElementById("new_email");
    let new_pass = document.getElementById("new_pass");
    let new_acount = {
        username: new_username.value,
        email: new_email.value,
        pass: new_pass.value};

    if(type_acount== "0"){
        fetch(url+"coders",{
            method: "POST",
            body: JSON.stringify(new_acount),
            Headers:{"Content-Type":"application/json",},
        })
        .then((result)=> result.json())
        .then((data)=>{
            location.href= "";
        })
    }else if(type_acount== "1"){
        fetch(url+"company",{
            method: "POST",
            body: JSON.stringify(new_acount),
            Headers:{"content-Type":"application/json",},
        })
        .then((result)=> result.json())
        .then((data)=>{
            location.href= "";
        })
    }
}
/* ____________/Crear usuario____________ */