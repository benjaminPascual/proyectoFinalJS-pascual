const stock = [{id: 12, nombre: "13", categoria: "Apple", tipo: "smartphone", costo:1300},
{id: 21, nombre: "S21", categoria: "Samsung", tipo: "smartphone", costo:1000}];

// const stock= JSON.parse(localStorage.getItem("productos")) || [];

const imputId = document.getElementById("imputId"),
	imputNombre = document.getElementById("imputNombre"),
	imputCategoria = document.getElementById("imputCategoria"),
	imputTipo = document.getElementById("imputTipo"),
	imputCosto = document.getElementById("imputCosto"),
	// imputGanancia = document.getElementById("imputGanancia"),
	gridCheck = document.getElementById("gridCheck"),	
	btnCalcular = document.getElementById("btnCalcular");

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
	id = imputId.value
	nombre = imputNombre.value
	categoria = imputCategoria.value
	tipo = imputTipo.value
	costo = imputCosto.value

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

const productosLS= recuperarLS();

btnCalcular.addEventListener("click", (e)=> {
	e.preventDefault();
	let nuevoProducto = crearProducto()
	guardarProducto(nuevoProducto)
	console.log(stock)
	// guardarLS(stock)
	// mostrarProductos()
})
// let nuevoProducto = crearProducto(11, "sdkgns", "kgsd", "sdkvnsd", 124634)
// 	guardarProducto(nuevoProducto)
// guardarLS(stock)

const contenedorId = document.getElementById("contenedorId"),
contenedorNombre = document.getElementById("contenedorNombre"),
contenedorCategoria= document.getElementById("contenedorCategoria"),
contenedorCosto = document.getElementById("contenedorCosto"),
contenedorTipo = document.getElementById("contenedorTipo"),
contenedorPrecio = document.getElementById("contenedorPrecio");

function mostrarProductos() {
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
		let liPrecio = document.createElement("li")
			liPrecio.className = "list-group-item"
			liPrecio.innerText = `${el.precio}`
			contenedorPrecio.appendChild(liPrecio)

	})
}

