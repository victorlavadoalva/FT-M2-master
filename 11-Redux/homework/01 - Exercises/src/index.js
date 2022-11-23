const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const currentState = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML= currentState;
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,

// hagan un dispatch al store de la acción correspondiente:
document.querySelector("#incremento").addEventListener(
  "click", () => {
    store.dispatch(incremento()); //quiero pasar el objeto que retorna incremento()
  }
);

document.querySelector("#decremento").addEventListener(
  "click", () => {
    store.dispatch(decremento()); //quiero pasar el objeto que retorna incremento()
  }
);

const incrementoImpar = () => {
  const currentState = store.getState().contador;
  if(currentState % 2 !== 0){
    store.dispatch(incremento());
  }
}

document.querySelector("#incrementoImpar").addEventListener(
  "click", () => {
    incrementoImpar();  
  }
);

const incrementoAsync = () => {
  setTimeout(() => store.dispatch(incremento()), 4000) //se pasa como cb para que no ejecute rapido
}

document.querySelector("#incrementoAsync").addEventListener(
  "click", () => {
    incrementoAsync();  
  }
);