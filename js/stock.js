let conteinerId = document.querySelector("#conteinerId"),
conteinerNombre = document.querySelector("#conteinerNombre"),
conteinerCategoria= document.querySelector("#conteinerCategoria"),
conteinerCosto = document.querySelector("#conteinerCosto"),
conteinerTipo = document.querySelector("#conteinerTipo"),
conteinerPrecio = document.querySelector("#conteinerPrecio");

function recuperarLS () {
	let prod= JSON.parse(localStorage.getItem("productos"));
	return prod;
}
let productosLS= recuperarLS();

function mostrarProductosIndex() {
	productosLS.forEach(el =>{
		let liId = document.createElement("li")
			liId.className = "list-group-item"
			liId.innerText = `${el.id}`
			conteinerId.appendChild(liId)
			console.log(liId)
		let liNombre = document.createElement("li")
			liNombre.className = "list-group-item"
			liNombre.innerText = `${el.nombre}`
			conteinerNombre.appendChild(liNombre)
			
		let liCategoria = document.createElement("li")
			liCategoria.className = "list-group-item"
			liCategoria.innerText = `${el.categoria}`
			conteinerCategoria.appendChild(liCategoria)
			
		let liCosto = document.createElement("li")
			liCosto.className = "list-group-item"
			liCosto.innerText = `${el.costo}`
			conteinerCosto.appendChild(liCosto)
			
		let liTipo = document.createElement("li")
			liTipo.className = "list-group-item"
			liTipo.innerText = `${el.tipo}`
			conteinerTipo.appendChild(liTipo)
	})
}

mostrarProductosIndex();
console.log(productosLS)