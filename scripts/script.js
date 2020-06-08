const stepOne = document.getElementById("step-one"), 
stepTwo = document.getElementById("step-two"); 

/**
 * Esta función hace el cambio de contenido en la pantalla.
 */
function changeContent(current, next) {

    current.classList.add("hide");

    next.classList.remove("hide");
}

/**
 * Esta función asigna el nombre y el apellido ingresado en el sitio.
 */
function setNames(name, lastName) {
    const nameElement = document.getElementById("username"),
        lastNameElement = document.getElementById("userlastname");

    nameElement.innerHTML = name;
    lastNameElement.innerHTML = lastName;
}

/**
 * Esta función recibe el evento click del botón iniciar validando la edad para continuar con el proceso de inscripción. 
 */
function handleClick() {
    let age = window.prompt("Por favor ingrese su edad (+18): ");

    if(isNaN(age)) {
        alert("A Mazu no le gusta la desobediencia...");
    } else if(parseInt(age) <= 18){
        alert("Indigno de la iluminación...");
    } else {
        let name = window.prompt("Por favor ingrese su primer nombre: ");
        let lastName = window.prompt("Por favor ingrese su primer apellido: ");
        
        setNames(name, lastName);

        changeContent(stepOne, stepTwo);
    }
   
}

function handleBack() {

   changeContent(stepTwo, stepOne);
}

