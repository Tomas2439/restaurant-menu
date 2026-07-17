// Importamos las imágenes de los platos
import imgEmpanada from './assets/empanada.jpg';
import imgProvoleta from './assets/provoleta.jpg';
import imgBife from './assets/bife.jpg';
import imgEntrana from './assets/entrana.jpg';
import imgFlan from './assets/flan.jpg';
import imgPanqueque from './assets/panqueque.jpg';

export default function loadMenu() {
    const content = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Nuestra Carta';
    title.classList.add('premium-title');

    // Actualizamos la función para recibir la imagen
    const createMenuItem = (name, description, price, imgSrc) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item-container');
        
        itemDiv.innerHTML = `
            <img src="${imgSrc}" alt="${name}" class="menu-image">
            <div class="menu-text-container">
                <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px dotted rgba(197, 160, 89, 0.3); padding-bottom: 5px;">
                    <h4 style="font-family: 'Playfair Display', serif; color: #c5a059; margin: 0; font-size: 1.5rem;">${name}</h4>
                    <span style="color: #f4f1ea; font-family: 'Lato', sans-serif;">$${price}</span>
                </div>
                <p style="color: #a09d98; margin: 5px 0 0 0; font-size: 0.9rem; font-style: italic;">${description}</p>
            </div>
        `;
        return itemDiv;
    };

    const sectionEntradas = document.createElement('h2');
    sectionEntradas.textContent = 'Entradas rapidas';
    sectionEntradas.classList.add('premium-subtitle');
    sectionEntradas.style.textAlign = 'left';
    sectionEntradas.style.marginTop = '40px';

    content.appendChild(title);
    content.appendChild(sectionEntradas);
    
    // Le pasamos la variable de la imagen importada al final
    content.appendChild(createMenuItem('Empanada Cortada a Cuchillo', 'Carne de novillo, comino, pimentón de Cachi y verdeo.', '4.500', imgEmpanada));
    content.appendChild(createMenuItem('Provoleta Estacionada', 'Queso provolone hilado, costra crocante, orégano fresco y oliva.', '9.200', imgProvoleta));
    
    const sectionCortes = document.createElement('h2');
    sectionCortes.textContent = 'Cortes premium a la parrilla';
    sectionCortes.classList.add('premium-subtitle');
    sectionCortes.style.textAlign = 'left';
    sectionCortes.style.marginTop = '40px';
    
    content.appendChild(sectionCortes);
    
    content.appendChild(createMenuItem('Ojo de Bife (400g)', 'Corte ancho de la costilla, madurado por 21 días. Punto recomendado: Jugoso.', '28.000', imgBife));
    content.appendChild(createMenuItem('Entraña Fina', 'Corte jugoso y tierno, con su membrana dorada a la parrilla.', '31.000', imgEntrana));


    const sectionPostres = document.createElement('h2');
    sectionPostres.textContent = 'Postres de la casa';
    sectionPostres.classList.add('premium-subtitle');
    sectionPostres.style.textAlign = 'left';
    sectionPostres.style.marginTop = '40px';
    
    content.appendChild(sectionPostres);
    
    content.appendChild(createMenuItem('Flan Casero Mixto', 'Receta tradicional con huevos de campo. Servido con abundante dulce de leche y crema chantilly.', '6.500', imgFlan));
    content.appendChild(createMenuItem('Panqueque de Dulce de Leche', 'Masa fina caramelizada a fuego lento, relleno con dulce de leche artesanal.', '7.800', imgPanqueque));

    return content;
}