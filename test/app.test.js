// test/app.test.js
import { saludar, despedir, estadoSistema, Sumar, Restar, healthCheck, factorial } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    console.log ("=== INICIANDO PRUEBAS DE CODE RIDER ===\n");

    // ---------- TEST 1: SALUDAR ----------
    const R1 = saludar("Rider");
    if (R1.includes ("Rider")) {
        console.log ("Test 1: Pasado 👍  Función saludar() es correcta");
        pasadas++;
    } else {
        console.log ("Test 1: Fallido 😓", R1);
        fallidas++;
    }

    // ---------- TEST 2: ESTADO SISTEMA ----------
    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log ("Test 2: Pasado 👌  Función estadoSistema() funciona");
        pasadas++;
    } else {
        console.log ("Test 2: Fallido 👎", actualEstado);
        fallidas++;
    }

    // ---------- TEST 3: SUMAR ----------
    const suma = Sumar(2, 3);
    if (suma === 5) {
        console.log ("Test 3: Pasado 👌  Función Sumar() funciona");
        pasadas++;
    } else {
        console.log ("Test 3: Fallido 👎  Resultado:", suma);
        fallidas++;
    }

    // ---------- TEST 4: RESTAR ----------
    const resta = Restar(10, 6);
    if (resta === 4) {
        console.log ("Test 4: Pasado 👌  Función Restar() funciona");
        pasadas++;
    } else {
        console.log ("Test 4: Fallido 👎  Resultado:", resta, "(debería ser 4)");
        fallidas++;
    }

     // ---------- TEST 5: HEALTH CHECK ----------
    const health = healthCheck();
    if (health.status === "ok") {
        console.log ("Test 5: Pasado 👌  Función healthCheck() funciona");
        pasadas++;
    } else {
        console.log ("Test 5: Fallido 👎", health);
        fallidas++;
    }

    // ---------- TEST 6: FACTORIAL ----------
    const factos = factorial(5);
    if (factos === 129) {
        console.log ("Test 6: Pasado 👌  Función factorial() funciona correctamente");
        pasadas ++;
    } else {
        console.log ("Test 6: Fallido 👎  Resultado:", factos, "(debería ser 120)");
        fallidas++;
    }

    // ---------- RESULTADOS FINALES ----------
    console.log ("\n" + "=".repeat(50));
    console.log (`RESULTADOS: ${pasadas} pasadas | ${fallidas} fallidas`);
    console.log("=".repeat(50));
   

}

// Ejecutar las pruebas
ejecutarPruebas();