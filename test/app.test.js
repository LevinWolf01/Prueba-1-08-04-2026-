// ========================================================================================================
import {saludar, despedir, estadoSistema, Sumar} from "../src/app.js"
// ========================================================================================================

function ejecutarPruebas(){
    let pasadas     = 0;
    let fallidas    = 0;

    // ----------TESTEO FUNCIÓN SALUDAR----------
    const R1        = saludar("Rider");
    if (R1.includes("Rider")){
        console.log ("Test 1 Pasado 👍: Funcion Saludar en CodeRider es correcta!");
        pasadas++;
    } 

    else {
        console.log ("Test 1 Fallido 😓", R1);
        fallidas++;
    }

    // ----------FUNCION ESTADO SISTEMA----------
    const actualEstado = estadoSistema()
    if (actualEstado.estado === "activo"){
        console.log ("Test 2: Pasado👌: 'estadoSistema()' funciona en CodeRider");
        pasadas++;
    }
    else {
        console.log ("Test 2: Fallido👎: ", estado, "en 'codeRider");
        fallidas++;
    }

    // ----------FUNCION SUMAR----------
    const a = 2;
    const b = 3;
    
    const Sumerios = Sumar(a, b);
    if (Sumerios === 5){
        console.log ("Test 3: Pasado👌: 'Sumar()' funciona en CodeRider");
        pasadas++;
    }
    else {
        console.log ("Test 3: Fallido👎: ", Sumerios, "en 'codeRider");
        fallidas++;
    }

    // ----------RESULTADOS FINALES----------
    console.log ("\nResultados: " + pasadas + " pasadas; ", + fallidas + " fallidas");
    if (fallidas > 0) {process.exit(1)}

    
}
// 1ra. Funcion a Ejecutar!
ejecutarPruebas();