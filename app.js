const personalData = document.getElementById('datosPersonales');
const boton0 = document.querySelector('.boton0');
const boton1 = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');

const desplegable = document.getElementsByClassName('desplegable');
const botonNavBar = document.getElementsByClassName('viajeRapido');

let isOpen0 = false;
let isOpen1 = false;
let isOpen2 = false;

const solicitarDatos = async () => {
  const resp = await fetch('https://randomuser.me/api/')
  const data = await resp.json()
  let datos = data.results;
  
  datos.forEach((element) => {
    personalData.innerHTML = `
    <div class="seccion1">
        <div>
          <img src="${element.picture.large}" alt="cv picture">
        </div>
        <ul>
          <li class="nombre">${element.name.last}, ${element.name.first}</li>
          <li>Edad: ${element.dob.age} años</li>
          <li>Tel: ${element.cell}</li>
          <li>Correo: ${element.email}</li>
          <li>Direccion: ${element.location.street.name}, ${element.location.street.number}</li>
        </ul>
    </div>
    ` 
  });
};

solicitarDatos();

for (let i = 0; i < botonNavBar.length; i++) {
  botonNavBar[i].addEventListener('click', (e) => {
    
    if (e.target.id == botonNavBar[0].id && isOpen0 == false) {
      desplegable[0].style.display='flex';
      isOpen0 = true;
      boton0.style.rotate='180deg'
    } else if (e.target.id == botonNavBar[1].id && isOpen1 == false) {
      desplegable[1].style.display='flex';
      isOpen1 = true;
      boton1.style.rotate='180deg' 
    } else if (e.target.id == botonNavBar[2].id && isOpen2 == false) {
      desplegable[2].style.display='flex';
      isOpen2 = true;
      boton2.style.rotate='180deg'
    }
  })  
};

boton0.addEventListener('click',(e)=> {

    if (e.target.id == desplegable[0].id && isOpen0 == false) {
      e.target.style.rotate='180deg' 
      desplegable[0].style.display='flex';
      isOpen0 = true;
    } else if (e.target.id === desplegable[0].id && isOpen0 == true) {
      e.target.style.rotate='0deg' 
      desplegable[0].style.display='none';
      isOpen0 = false;
    }
});

boton1.addEventListener('click',(e)=> {

  if (e.target.id == desplegable[1].id && isOpen1 == false) {
    e.target.style.rotate='180deg'
    desplegable[1].style.display='flex';
    isOpen1 = true;
  } else if (e.target.id === desplegable[1].id && isOpen1 == true) {
    e.target.style.rotate='0deg'
    desplegable[1].style.display='none';
    isOpen1 = false;
  }
});

boton2.addEventListener('click',(e)=> {

  if (e.target.id == desplegable[2].id && isOpen2 == false) {
    e.target.style.rotate='180deg'
    desplegable[2].style.display='flex';
    isOpen2 = true;
  } else if (e.target.id === desplegable[2].id && isOpen2 == true) {
    e.target.style.rotate='0deg'
    desplegable[2].style.display='none';
    isOpen2 = false;
  }
});