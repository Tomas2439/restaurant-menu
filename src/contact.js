export default function loadContact() {
    const content = document.createElement('div');
    content.classList.add('contact-content');

    // Título
    const title = document.createElement('h1');
    title.textContent = 'Reservas & Ubicación';
    title.classList.add('premium-title');

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'Asegure su lugar en nuestra mesa';
    subtitle.classList.add('premium-subtitle');

    // Contenedor para dividir información y formulario (usaremos Flexbox básico inline)
    const splitContainer = document.createElement('div');
    splitContainer.style.display = 'flex';
    splitContainer.style.flexWrap = 'wrap';
    splitContainer.style.gap = '40px';
    splitContainer.style.justifyContent = 'center';
    splitContainer.style.marginTop = '40px';

    // Lado Izquierdo: Información
    const infoDiv = document.createElement('div');
    infoDiv.style.flex = '1';
    infoDiv.style.minWidth = '250px';
    infoDiv.style.textAlign = 'left';

    infoDiv.innerHTML = `
        <h4 style="color: #c5a059; font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 10px;">La Estancia</h4>
        <p class="premium-text" style="margin-bottom: 5px; font-size: 0.95rem;"> Lavalle 941, Buenos Aires.</p>
        <p class="premium-text" style="margin-bottom: 20px; font-size: 0.95rem;"> (011) 4326 0000</p>
        
        <h4 style="color: #c5a059; font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 10px;">Horarios</h4>
        <p class="premium-text" style="margin-bottom: 5px; font-size: 0.95rem;">Lunes a Viernes: 19:00 - 01:00</p>
        <p class="premium-text" style="margin-bottom: 5px; font-size: 0.95rem;">Sábados y Domingos: 12:00 - 16:00 | 19:00 - 01:00</p>
        <p class="premium-text" style="font-size: 0.85rem; font-style: italic;">Valet Parking disponible.</p>
    `;

    // Lado Derecho: Formulario (Simulado)
    const formDiv = document.createElement('div');
    formDiv.style.flex = '1';
    formDiv.style.minWidth = '280px';
    formDiv.style.background = 'rgba(26, 21, 20, 0.8)';
    formDiv.style.padding = '25px';
    formDiv.style.border = '1px solid rgba(197, 160, 89, 0.2)';
    
    // Estilos comunes para los inputs
    const inputStyle = "width: 100%; padding: 10px; margin-bottom: 15px; background: transparent; border: none; border-bottom: 1px solid #a09d98; color: #f4f1ea; font-family: 'Lato', sans-serif; box-sizing: border-box; outline: none;";

    formDiv.innerHTML = `
        <form onsubmit="event.preventDefault(); alert('Reserva solicitada. Nos contactaremos a la brevedad.');">
            <input type="text" placeholder="Nombre completo" style="${inputStyle}" required>
            <input type="email" placeholder="Correo electrónico" style="${inputStyle}" required>
            <div style="display: flex; gap: 10px;">
                <input type="date" style="${inputStyle} color: #a09d98;" required>
                <input type="number" placeholder="Personas" min="1" max="10" style="${inputStyle}" required>
            </div>
            <button type="submit" style="width: 100%; padding: 12px; background: #c5a059; color: #111; border: none; font-family: 'Lato', sans-serif; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; cursor: pointer; margin-top: 10px; transition: background 0.3s;">
                Solicitar Reserva
            </button>
        </form>
    `;

    splitContainer.appendChild(infoDiv);
    splitContainer.appendChild(formDiv);

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(splitContainer);

    return content;
}