let productoElegido = parseInt(
  prompt(
    "¿Que producto desea comprar? Ingrese el número que hace referencia a la opción que desea elegir \n\n1. Remera $2300 \n2. Jean $4250 \n3. Campera $8400 \n4. Zapatillas $11800"
  )
);

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

function recargoCuotas(cuotas) {
  switch (cuotas) {
    case 1:
      return precioProducto * 0;
      break;
    case 3:
      return precioProducto * 0.1;
      break;
    case 6:
      return precioProducto * 0.15;
      break;
    case 12:
      return precioProducto * 0.2;
      break;
  }
}

let recargo = recargoCuotas(cuantasCuotas);

let precioFinal = precioProducto + recargo;

alert(
  "el precio final del producto es " +
    precioFinal +
    " pagando " +
    cuantasCuotas +
    " cuotas de " +
    precioFinal / cuantasCuotas
);
