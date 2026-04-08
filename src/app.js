import { version } from "react";

export function saludar(nombre){
    return "hola " + nombre + ", bienvenido a la aplicación de CodeRider!";
}

export function despedir(nombre){
    return "Hata pronto, " + nombre + " ¡CodeRider!";
}

export function estadoSistema(){
    return {
        estado: "activo",
        version: "1.0.0",
        message: "Sistema CodeRider funcionando Correctamente"
    };
}

export function Sumar(a, b) {
    return a + b;
}