let stock = [
{id: 12, nombre: "iphone", categoria: "celular", tipo: "smartphone", costo:1000}
]


const imputId = document.querySelector("#imputId"),
	imputNombre = document.querySelector("#imputNombre"),
	imputCategoria = document.querySelector("#imputCategoria"),
	imputTipo = document.querySelector("#imputTipo"),
	imputCosto = document.querySelector("#imputCosto"),
	// imputGanancia = document.querySelector("#imputGanancia"),
	gridCheck = document.querySelector("#gridCheck"),	
	btnCalcular = document.querySelector("#btnCalcular");

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
	id=imputId.value
	nombre=imputNombre.value
	categoria=imputCategoria.value
	tipo=imputTipo.value
	costo=imputCosto

	const prod = new Productos(id, nombre, categoria, tipo, costo)
	return prod;
}

function guardarProducto(producto){
	let productoGuardado=stock.push(producto)
	return productoGuardado
}

btnCalcular.addEventListener("click", ()=>{
	let nuevoProducto = crearProducto(id, nombre, categoria, tipo, costo);
	guardarProducto(nuevoProducto);
	console.log(stock);
})



const contenedorId = document.getElementById("contenedorId"),
contenedorNombre = document.getElementById("contenedorNombre"),
contenedorCategoria= document.getElementById("contenedorCategoria"),
contenedorCosto = document.getElementById("contenedorCosto"),
contenedorTipo = document.getElementById("contenedorTipo"),
contenedorPrecio = document.getElementById("contenedorPrecio");

function mostrarProductos() {
	stock.forEach(el =>{
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
mostrarProductos()
