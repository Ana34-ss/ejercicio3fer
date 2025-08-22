// Tenemos un li de productos

// Primero, defino la lista de productos que quiero mostrar.
// Cada producto tiene nombre, tipo, color e imagen.
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Selecciono el contenedor donde voy a mostrar los productos.
// Me aseguro de que en el HTML tenga el id correcto: "lista-de-productos".
const contenedorProductos = document.getElementById("lista-de-productos");

// También selecciono el input de búsqueda para leer lo que escriba el usuario.
const inputBusqueda = document.querySelector(".input");

// Esta función muestra productos en pantalla.
// Limpia el contenedor y agrega elementos HTML por cada producto.
function mostrarProductos(productosAMostrar) {
  contenedorProductos.innerHTML = ""; // Limpio lo anterior

  productosAMostrar.forEach(producto => {
    // Creo el div principal del producto
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Creo el párrafo para el nombre del producto
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    // Creo la imagen y le agrego la ruta
    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    // Añado el título y la imagen al div
    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    // Añado el div al contenedor principal
    contenedorProductos.appendChild(divProducto);
  });
}

// Al cargar la página, muestro todos los productos
mostrarProductos(productos);

// Esta función filtra productos por tipo o color usando el texto del input
function filtrarProductos(lista, texto) {
  const textoLimpio = texto.toLowerCase().trim(); // Limpio espacios y paso a minúsculas

  // Devuelvo los productos cuyo tipo o color coincidan con el texto
  return lista.filter(item =>
    item.tipo.includes(textoLimpio) || item.color.includes(textoLimpio)
  );
}

// Cuando el usuario hace clic en el botón, filtro los productos
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = () => {
  const textoBusqueda = inputBusqueda.value; // Obtengo lo que escribió el usuario

  // Aplico el filtro
  const productosFiltrados = filtrarProductos(productos, textoBusqueda);

  // Muestro los resultados
  mostrarProductos(productosFiltrados);
};


//este es el codigo que use pero me modifico la pagina :( 