const fs = require('fs');
const path = require('path');
const carpetaDescargas = 'C:\\Users\\SleepyLippy\\Downloads';
const carpetaMusica = 'C:\\Users\\SleepyLippy\\Music\\Musiquita';
const extensionesMusica = ['.mp3', '.wav', '.flac', '.m4a'];
fs.readdir(carpetaDescargas, (err,archivos) => {
    if (err) {
        console.error("Error al leer la carpeta", err);
        return;
    }
    archivos.forEach(archivo => {
        const extension = path.extname(archivo).toLowerCase();
    
    if (extensionesMusica.includes(extension)) {
        const rutaOrigen = path.join(carpetaDescargas, archivo);
        const rutaDestino = path.join(carpetaMusica, archivo);
        
        fs.rename(rutaOrigen, rutaDestino, (err)=> {
            if (err) {
                console.error(`error moviendo ${archivo}:`, err);
            } else {
                console.log(`Movido ${archivo}`);
            }
        });
    }
});
});