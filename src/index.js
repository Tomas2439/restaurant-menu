import './style.css'; 

import loadHome from './home.js';
import loadMenu from './menu.js';       
import loadContact from './contact.js'; 

const contentDiv = document.getElementById('content');
const buttons = document.querySelectorAll('.nav-btn'); // Actualicé la clase del botón a nav-btn

function clearContent() {
    contentDiv.innerHTML = '';
}

function switchTab(e) {
    clearContent();
    
    // Quitamos la clase active de todos y se la ponemos al que clickeamos
    buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const btnId = e.target.id;

    // Aquí llamamos a la función correspondiente según el botón
    if (btnId === 'btn-home') {
        contentDiv.appendChild(loadHome());
    } else if (btnId === 'btn-menu') {
        contentDiv.appendChild(loadMenu()); 
    } else if (btnId === 'btn-contact') {
        contentDiv.appendChild(loadContact()); 
    }
}

// Añadimos el evento a cada botón
buttons.forEach(btn => {
    btn.addEventListener('click', switchTab);
});

// Cargar la página de inicio por defecto
contentDiv.appendChild(loadHome());