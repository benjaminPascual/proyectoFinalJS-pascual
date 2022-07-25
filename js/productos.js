let conteinerId = document.querySelector("#conteinerId"),
conteinerNombre = document.querySelector("#conteinerNombre"),
conteinerCategoria= document.querySelector("#conteinerCategoria"),
conteinerCosto = document.querySelector("#conteinerCosto"),
conteinerTipo = document.querySelector("#conteinerTipo"),
conteinerPrecio = document.querySelector("#conteinerPrecio"),
conteinerDel=document.querySelector("#conteinerDel"),
inputGanancia = document.querySelector(".form-control");

const contenedorProductos=document.querySelector("#contenedorProductos")

function guardarLS(el){
	let arrayGuardado= localStorage.setItem("productos", JSON.stringify(el));
	return arrayGuardado;
}

function mostrar() {
	stock.forEach((el)=>{
		let nuevo=document.createElement("tr")
		nuevo.innerHTML=`<td>${el.id}</td>
						         <td>${el.nombre}</td>
						         <td>${el.categoria}</td>
						         <td>${el.tipo}</td>
						         <td><input type="number" id="inputCosto${el.id}" value="${el.costo}"></td>
						         <td><input type="number" id="inputGanancia${el.id}" value="${el.ganancia}"></td>
						         <td id="tdPrecio${el.id}">${el.precio}</td>
						         <button type="submit" class="btn btn-secondary" id="btnDel${el.id}">
						         	<img src="https://icongr.am/fontawesome/trash.svg?size=20&color=ffffff" alt="">
						         </button>`
		contenedorProductos.appendChild(nuevo)

	let inputsGanancia = document.getElementById(`inputGanancia${el.id}`)
	let inputsCosto = document.getElementById(`inputCosto${el.id}`)
	let btnsDel = document.getElementById(`btnDel${el.id}`)
	let tdPrecio = document.getElementById(`tdPrecio${el.id}`)

		inputsCosto.addEventListener("input", ()=>{
			let idProducto = `${el.id}`
			let precio = inputsCosto.value * (1+(inputsGanancia.value)/100)
			let productoActualizado = stock.find((el) => el.id === idProducto)
			productoActualizado.precio = precio
			productoActualizado.costo = inputsCosto.value
			productoActualizado.ganancia = inputsGanancia.value
			tdPrecio.innerText = `${el.precio}`

			let id = el.id
			stock = stock.filter((item)=> item.id !== id)
				
			stock.push(productoActualizado);

			guardarLS(stock)
		})

		inputsGanancia.addEventListener("input", ()=>{
			let idProducto = `${el.id}`
			let precio = inputsCosto.value * (1+(inputsGanancia.value)/100)
			let productoActualizado = stock.find((el) => el.id === idProducto)
			productoActualizado.precio = precio
			productoActualizado.costo = inputsCosto.value
			productoActualizado.ganancia = inputsGanancia.value
			tdPrecio.innerText = `${el.precio}`

			let id = el.id
			stock = stock.filter((item)=> item.id !== id)
				
			stock.push(productoActualizado);

			guardarLS(stock)
		})

		btnsDel.addEventListener("click", ()=>{
			Swal.fire({
			  title: 'Eliminar producto!',
			  text: "¿Desea continuar?",
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Si eliminar!'
			}).then((result) => {
			  if (result.isConfirmed) {
			    Swal.fire(
			      'Eliminado!',
			      'Usted acaba de eliminar un producto',
			      'ok'
			    )

			    btnsDel.parentElement.remove()
				let id = el.id
				stock = stock.filter((item)=> item.id !== id)
				guardarLS(stock)
			  }
			})
		})
	})
}

mostrar();




const url= "./js/datos.json";
async function mostrarProd(){
	const datos= await fetch(url);
	const productos= await datos.json();
	
}

// mostrarProd()
