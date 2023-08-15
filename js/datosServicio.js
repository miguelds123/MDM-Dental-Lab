
function Agregar()
{
    const select = document.getElementById("servicio");
    const table = document.getElementById("table");
    const cantidad = document.getElementById("Cantidad");
    
    var precio = 0;
    var eleccion = select.value;
    
    if(parseInt(cantidad.value)>0){
        switch(eleccion)
        {
            case "Cromo":
                precio = 45000;
                break;

            case "PartialFlex":
                precio = 50000;
                break;

            case "PartialFlex1TabI":
                precio = 55000;
                break;

            case "PartialFlex2TabI":
                precio = 60000;
                break;

            case "AcrilicaTotalYParcial":
                precio = 25000;
                break;

            case "Acrilica1TabI":
                precio = 30000;
                break;

            case "Acrilica2TabI":
                precio = 35000;
                break;

            case "AcrlicaInmediataProcesada":
                precio = 25000;
                break;

            case "AcrilicaInmediataAuto":
                precio = 15000;
                break;
    
            case "AcrilicaMallaBarra":
                precio = 35000;
                break;

            case "AcrilicaSobreCromo":
                precio = 70000;
                break;
        
            case "PulidoProtesisAcrilica":
                precio = 5000;
                break;

            case "PulidoProtesisFlex":
                precio = 10000;

            case "ReparacionProtesisAcrilica":
                precio = 10000;
                break;  

            case "CoronaEnZirconio":
                precio = 60000;
                break;

            case "CoronaMetalPorcelana":
                precio = 30000;
                break;  

            case "CoronaEMax":
                precio = 48000;
                break;

            case "CarillaEMax":
                precio = 40000;
                break;  

            case "CarillaIncrustacion":
                precio = 40000;
                break;

            case "CoronaAcrilica":
                precio = 5000;
                break;  

            case "EspigaMetal":
                precio = 13000;
                break;

            case "BlanqueamientoPar":
                precio = 10000;
                break;

            case "Retenedor":
                precio = 10000;
                break;
            
            case "Dual":
                precio = 15000;
                break; 

            case "Hawley":
                precio = 15000;
                break;

            case "Protesis":
                precio = 3000;
                break; 
                
            case "Rodetes":
                precio = 5000;
                break;
        }

        precio = precio * (parseInt(cantidad.value));

        const newRow = table.insertRow();

        const celdaServicio = newRow.insertCell(0);
        celdaServicio.textContent = select.options[select.selectedIndex].textContent;

        const celdaCantidad = newRow.insertCell(1);
        celdaCantidad.textContent = cantidad.value;

        const celdaPrecio = newRow.insertCell(2);
        celdaPrecio.textContent = precio;
        
    }else{
        alert("Debe ingresar una cantidad valida");
    }
}

function Cotizar()
{
    const newRow = table.insertRow();
    const rows = table.getElementsByTagName("tr");
    var precioT = 0;
    var cantidad = 0;

    for (let i = 1; i < rows.length; i++) { // Comenzamos desde 1 para omitir la fila de encabezado
        const cell = rows[i].getElementsByTagName("td")[2]; // Segunda columna (índice 1)
        
        if (cell) {
            precioT += parseInt(cell.textContent || 0); // Sumar el valor (parseando como entero)
        }
    }

    for (let i = 1; i < rows.length; i++) { // Comenzamos desde 1 para omitir la fila de encabezado
        const cell = rows[i].getElementsByTagName("td")[1]; // Segunda columna (índice 1)
        
        if (cell) {
            cantidad += parseInt(cell.textContent || 0); // Sumar el valor (parseando como entero)
        }
    }

    const celdaServicio = newRow.insertCell(0);
    celdaServicio.textContent = "Total";

    const celdaCantidad = newRow.insertCell(1);
    celdaCantidad.textContent = cantidad;

    const celdaPrecio = newRow.insertCell(2);
    celdaPrecio.textContent = precioT;
}
