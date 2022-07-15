let conteinerId = document.querySelector("#conteinerId"),
conteinerNombre = document.querySelector("#conteinerNombre"),
conteinerCategoria= document.querySelector("#conteinerCategoria"),
conteinerCosto = document.querySelector("#conteinerCosto"),
conteinerTipo = document.querySelector("#conteinerTipo"),
conteinerPrecio = document.querySelector("#conteinerPrecio"),
inputGanancia = document.querySelector(".form-control");


function mostrarProductos() {
	stock.forEach(el =>{
		let liId = document.createElement("li")
			liId.className = "list-group-item"
			liId.innerText = `${el.id}`
			conteinerId.appendChild(liId)

		let liNombre = document.createElement("li")
			liNombre.className = "list-group-item"
			liNombre.innerText = `${el.nombre}`
			conteinerNombre.appendChild(liNombre)
			
		let liCategoria = document.createElement("li")
			liCategoria.className = "list-group-item"
			liCategoria.innerText = `${el.categoria}`
			conteinerCategoria.appendChild(liCategoria)

		let liCosto = document.createElement("input")
			liCosto.className = "form-control"
			liCosto.setAttribute("type","number")
			liCosto.setAttribute("id","inputCosto"+`${el.id}`)
			liCosto.value=`${el.costo}`
			conteinerCosto.appendChild(liCosto)
			
		let liTipo = document.createElement("li")
			liTipo.className = "list-group-item"
			liTipo.innerText = `${el.tipo}`
			conteinerTipo.appendChild(liTipo)

		let liGanancia = document.createElement("input")
			liGanancia.className = "form-control"
			liGanancia.setAttribute("type","number")
			liGanancia.setAttribute("id","inputGanancia"+`${el.id}`)
			conteinerGanancia.appendChild(liGanancia)

		let liPrecio = document.createElement("li")
			liPrecio.className = "list-group-item"
			liPrecio.setAttribute("id","liPrecio"+`${el.id}`)
			conteinerPrecio.appendChild(liPrecio)

		let inputs = document.getElementById(`inputGanancia${el.id}`)
		let inputsCostos=document.getElementById(`inputCosto${el.id}`)
		inputsCostos.addEventListener("input", ()=>{
				// console.log(inputsCostos.value)
			let precio = inputsCostos.value * (1+(inputs.value)/100)
			let nuevoPrecio = document.getElementById(`liPrecio${el.id}`)
			nuevoPrecio.innerText = precio
		})
	})
}

mostrarProductos();

const url= "../js/datos.json";
async function mostrarProd(){
	const datos= await fetch(url);
	const productos= await datos.json();
	
	productos.forEach(el =>{
		let liId = document.createElement("li")
			liId.className = "list-group-item"
			liId.innerText = `${el.id}`
			conteinerId.appendChild(liId)

		let liNombre = document.createElement("li")
			liNombre.className = "list-group-item"
			liNombre.innerText = `${el.nombre}`
			conteinerNombre.appendChild(liNombre)
			
		let liCategoria = document.createElement("li")
			liCategoria.className = "list-group-item"
			liCategoria.innerText = `${el.categoria}`
			conteinerCategoria.appendChild(liCategoria)

		let liCosto = document.createElement("input")
			liCosto.className = "form-control"
			liCosto.setAttribute("type","number")
			liCosto.setAttribute("id","inputCosto"+`${el.id}`)
			liCosto.value=`${el.costo}`
			conteinerCosto.appendChild(liCosto)
			
		let liTipo = document.createElement("li")
			liTipo.className = "list-group-item"
			liTipo.innerText = `${el.tipo}`
			conteinerTipo.appendChild(liTipo)

		let liGanancia = document.createElement("input")
			liGanancia.className = "form-control"
			liGanancia.setAttribute("type","number")
			liGanancia.setAttribute("id","inputGanancia"+`${el.id}`)
			conteinerGanancia.appendChild(liGanancia)

		let liPrecio = document.createElement("li")
			liPrecio.className = "list-group-item"
			liPrecio.setAttribute("id","liPrecio"+`${el.id}`)
			conteinerPrecio.appendChild(liPrecio)

		let inputs = document.getElementById(`inputGanancia${el.id}`)
		let inputsCostos=document.getElementById(`inputCosto${el.id}`)
		inputsCostos.addEventListener("input", ()=>{
				// console.log(inputsCostos.value)
			let precio = inputsCostos.value * (1+(inputs.value)/100)
			let nuevoPrecio = document.getElementById(`liPrecio${el.id}`)
			nuevoPrecio.innerText = precio
		})
	})
}
// mostrarProd()
