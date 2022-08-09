let productoElegido = parseInt(
  prompt(
    "¿Que producto desea comprar? Ingrese el número que hace referencia a la opción que desea elegir \n\n1. Remera $2300 \n2. Jean $4250 \n3. Campera $8400 \n4. Zapatillas $11800"
  )
);
while (productoElegido != 1 && 2 && 3 && 4) {
  alert("Por favor ingrese un numero valido");
  parseInt(
    prompt(
      "¿Que producto desea comprar? Ingrese el número que hace referencia a la opción que desea elegir \n\n1. Remera $2300 \n2. Jean $4250 \n3. Campera $8400 \n4. Zapatillas $11800"
    )
  );
}

let precioProducto;

if (productoElegido == 1) {
  precioProducto = 2300;
} else if (productoElegido == 2) {
  precioProducto = 4250;
} else if (productoElegido == 3) {
  precioProducto = 8400;
} else if (productoElegido == 4) {
  precioProducto = 11800;
}

let cuantasCuotas = parseInt(
  prompt(
    "¿En cuántas cuotas desea realizar el pago? Ingrese el número de cuotas según las opciones disponibles. \n\n 1 cuota (sin interés). \n 3 cuotas (10% de interés). \n 6 cuotas (15% de interés). \n 12 cuotas (20% de interés)."
  )
);

let precioFinal;

function recargoCuotas(cuantasCuotas) {}
