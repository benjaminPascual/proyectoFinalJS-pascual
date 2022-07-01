let stock = [];

// const stock= JSON.parse(localStorage.getItem("productos")) || [];

let inputId = document.querySelector("#inputId"),
	inputNombre = document.querySelector("#inputNombre"),
	inputCategoria = document.querySelector("#inputCategoria"),
	inputTipo = document.querySelector("#inputTipo"),
	inputCosto = document.querySelector("#inputCosto"),
	// imputGanancia = document.querySelector("#inputGanancia"),
	gridCheck = document.querySelector("#gridCheck"),	
	btnCalcular = document.querySelector("#btnCalcular"),
	btnLimpiar = document.querySelector("#btnLimpiar");


class Productos{
	constructor(id, nombre, categoria, tipo, costo){
		this.id=id;
		this.nombre=nombre;
		this.categoria=categoria;
		this.tipo=tipo;
		this.costo=costo;
	}
}

function crearProducto(id, nombre, categoria, tipo, costo){
	id = inputId.value;
	nombre = inputNombre.value;
	categoria = inputCategoria.value;
	tipo = inputTipo.value;
	costo = inputCosto.value;

	const prod = new Productos(id, nombre, categoria, tipo, costo);
	return prod;
}

function guardarProducto(producto){
	let productoGuardado = stock.push(producto);
	return productoGuardado;
}

function guardarLS(el){
	let prodGuardado= localStorage.setItem("productos", JSON.stringify(el));
	return prodGuardado;
}

function recuperarLS () {
	let prod= JSON.parse(localStorage.getItem("productos"));
	return prod;
}

let productosLS= recuperarLS();

function limpiarCampos() {
	inputId.value = ""
	inputNombre.value = ""
	inputCategoria.value = ""
	inputTipo.value = ""
	inputCosto.value = ""
}

let contenedorId = document.getElementById("contenedorId"),
contenedorNombre = document.getElementById("contenedorNombre"),
contenedorCategoria= document.getElementById("contenedorCategoria"),
contenedorCosto = document.getElementById("contenedorCosto"),
contenedorTipo = document.getElementById("contenedorTipo"),
contenedorPrecio = document.getElementById("contenedorPrecio");

function mostrarProductosIndex() {
	productosLS.forEach(el =>{
		let liId = document.createElement("li")
			liId.className = "list-group-item"
			liId.innerText = `${el.id}`
			contenedorId.appendChild(liId)
		let liNombre = document.createElement("li")
			liNombre.className = "list-group-item"
			liNombre.innerText = `${el.nombre}`
			contenedorNombre.appendChild(liNombre)
		let liCategoria = document.createElement("li")
			liCategoria.className = "list-group-item"
			liCategoria.innerText = `${el.categoria}`
			contenedorCategoria.appendChild(liCategoria)
		let liCosto = document.createElement("li")
			liCosto.className = "list-group-item"
			liCosto.innerText = `${el.costo}`
			contenedorCosto.appendChild(liCosto)
		let liTipo = document.createElement("li")
			liTipo.className = "list-group-item"
			liTipo.innerText = `${el.tipo}`
			contenedorTipo.appendChild(liTipo)
		// let liPrecio = document.createElement("li")
		// 	liPrecio.className = "list-group-item"
		// 	liPrecio.innerText = `${el.precio}`
		// 	contenedorPrecio.appendChild(liPrecio)

	})
}

btnLimpiar.addEventListener("click", (e)=>{
	e.preventDefault();
	limpiarCampos();
})

btnCalcular.addEventListener("click", (e)=> {
	e.preventDefault();
	let nuevoProducto = crearProducto();
	guardarProducto(nuevoProducto);
	guardarLS(stock);
	mostrarProductosIndex();

})




