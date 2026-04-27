const { version } = require("react");

const VERSION = "1.2.0";

function saludar(nombre){
    return `Hola, ${nombre}! Bienvenido a CoderRider versión ${VERSION}`;
}

function healthCheck(){
    return {
        status: "ok",
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: "Sistemas CodeRider funcionando correctamente"
    }
}

function verificarSistema(){
    const resultado = healthCheck();
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
    statusDiv.style.color = '#00AD0B';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("version").textContent = `v${VERSION}`;
    verificarSistema();
});
