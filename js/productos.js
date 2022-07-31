let conteinerId = document.querySelector("#conteinerId"),
conteinerNombre = document.querySelector("#conteinerNombre"),
conteinerCategoria = document.querySelector("#conteinerCategoria"),
conteinerCosto = document.querySelector("#conteinerCosto"),
conteinerTipo = document.querySelector("#conteinerTipo"),
conteinerPrecio = document.querySelector("#conteinerPrecio"),
conteinerDel = document.querySelector("#conteinerDel"),
selectCat = document.querySelector("#selectCat"),
selectType = document.querySelector("#selectType"),
selectCost = document.querySelector("#selectCost"),
btnSelectCost = document.querySelector("#btnSelectCost");

const contenedorProductos=document.querySelector("#contenedorProductos")

function guardarLS(el){
	let arrayGuardado= localStorage.setItem("productos", JSON.stringify(el));
	return arrayGuardado;
}

function mostrar(array) {

	contenedorProductos.innerHTML = ""

	array.forEach((el)=>{
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

	function actualizacion() {
		let idProducto = `${el.id}`
			let precio = Math.round((inputsCosto.value * (1+(inputsGanancia.value)/100))*100)/100
			let productoActualizado = stock.find((el) => el.id === idProducto)
			productoActualizado.precio = precio
			productoActualizado.costo = inputsCosto.value
			productoActualizado.ganancia = inputsGanancia.value
			tdPrecio.innerText = `${el.precio}`

			let id = el.id
			stock = stock.filter((item)=> item.id !== id)
				
			stock.push(productoActualizado);

			guardarLS(stock)
	}
		inputsCosto.addEventListener("input", ()=>{
			actualizacion();
		})

		inputsGanancia.addEventListener("input", ()=>{
			actualizacion();
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
			      'success'
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

function agregarCats() {
	categorias.forEach((el)=>{
		let nueva = document.createElement("option")
		nueva.setAttribute('value', el)
		nueva.innerText = el
		selectCat.appendChild(nueva)
	})
}
function agregarTypes() {
	tipos.forEach((el)=>{
		let nueva = document.createElement("option")
		nueva.setAttribute('value', el)
		nueva.innerText = el
		selectType.appendChild(nueva)
	})
}
function mostrarFiltrado() {
	if(selectCat.value === "all" && selectType.value==="all"){
		mostrar(stock)
	}else if(selectCat.value === "all" && selectType.value !== "all"){
		let filtroType = stock.filter(item=> item.tipo === selectType.value);
		mostrar(filtroType)
	}else if(selectCat.value !== "all" && selectType.value === "all"){
		let filtroCat = stock.filter(item=> item.categoria === selectCat.value);
		mostrar(filtroCat)
	}else {
		let filtroCat = stock.filter(item=> item.categoria === selectCat.value);
		let filtroAll = filtroCat.filter(item=> item.tipo === selectType.value);
		mostrar(filtroAll)
	}
}
mostrar(stock);

agregarCats()
agregarTypes()

selectCat.addEventListener("change", ()=>{
	mostrarFiltrado();
})

selectType.addEventListener("change", ()=>{
	mostrarFiltrado()
})

btnSelectCost.addEventListener("click", (e)=> {
	e.preventDefault()
	function actualizacionCosto(array) {
		array.forEach((el)=>{
			let newCosto = Math.round((el.costo * (1+selectCost.value/100))*100)/100
			let tdPrecio = document.getElementById(`tdPrecio${el.id}`)
			let inputsCosto = document.getElementById(`inputCosto${el.id}`)
			let idProducto = `${el.id}`
			let precio = Math.round((newCosto * (1+(el.ganancia)/100))*100)/100
			let productoActualizado = stock.find((el) => el.id === idProducto)
			productoActualizado.precio = precio
			productoActualizado.costo = newCosto
			inputsCosto.value = `${el.costo}`
			tdPrecio.innerText = `${el.precio}`

			let id = el.id
			stock = stock.filter((item)=> item.id !== id)
					
			stock.push(productoActualizado);

			guardarLS(stock)
		})
	}
	if(selectCat.value === "all" && selectType.value==="all"){
		actualizacionCosto(stock)
	}else if(selectCat.value === "all" && selectType.value !== "all"){
		let filtroType = stock.filter(item=> item.tipo === selectType.value);
		actualizacionCosto(filtroType)
	}else if(selectCat.value !== "all" && selectType.value === "all"){
		let filtroCat = stock.filter(item=> item.categoria === selectCat.value);
		actualizacionCosto(filtroCat)
	}else {
		let filtroCat = stock.filter(item=> item.categoria === selectCat.value);
		let filtroAll = filtroCat.filter(item=> item.tipo === selectType.value);
		actualizacionCosto(filtroAll)
	}
})

const url= "./js/datos.json";
async function mostrarProd(){
	const datos= await fetch(url);
	const productos= await datos.json();
	console.log(datos)
	console.log(productos)
}

// mostrarProd()
