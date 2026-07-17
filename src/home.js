// Importamos la imagen para que Webpack la reconozca
import imgParrilla from './assets/parrilla.jpg';

export default function loadHome() {
    const content = document.createElement('div');
    content.classList.add('home-content');

    const title = document.createElement('h1');
    title.textContent = 'Fuego, Hierro y Tradición';
    title.classList.add('premium-title');

    const subtitle = document.createElement('h3');
    subtitle.textContent = 'La auténtica experiencia de la parrilla argentina';
    subtitle.classList.add('premium-subtitle');

    // Creamos la imagen
    const image = document.createElement('img');
    image.src = imgParrilla; // Le pasamos la variable importada
    image.alt = 'Brasas y carne en la parrilla';
    image.classList.add('home-image');

    const description = document.createElement('p');
    description.textContent = 'Seleccionamos cuidadosamente los mejores cortes de pastura, madurados a la perfección y asados lentamente sobre brasas de quebracho y espinillo. Acompañado de nuestra exclusiva cava de vinos, cada plato es un homenaje a la cultura gastronómica de nuestra tierra.';
    description.classList.add('premium-text');

    const separator = document.createElement('div');
    separator.style.width = '50px';
    separator.style.height = '1px';
    separator.style.backgroundColor = '#c5a059';
    separator.style.margin = '0 auto';

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(image); // Inyectamos la imagen aquí
    content.appendChild(description);
    content.appendChild(separator);

    return content;
}