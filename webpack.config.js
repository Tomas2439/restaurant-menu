const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Modo desarrollo para ver errores fácilmente
    entry: './src/index.js', // Tu archivo JS principal
    output: {
        filename: 'main.js', // El archivo JS final empaquetado
        path: path.resolve(__dirname, 'dist'), // Carpeta destino
        clean: true, // Limpia la carpeta dist en cada compilación
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html', // Usa tu HTML como plantilla
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // Si el archivo termina en .css...
                use: ['style-loader', 'css-loader'], // ...usa estos loaders
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Para importar imágenes directamente en JS
                type: 'asset/resource',
            },
        ],
    },
};