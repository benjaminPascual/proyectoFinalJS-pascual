let inputId = document.querySelector("#inputId"),
	inputNombre = document.querySelector("#inputNombre"),
	inputCategoria = document.querySelector("#inputCategoria"),
	inputTipo = document.querySelector("#inputTipo"),
	inputCosto = document.querySelector("#inputCosto"),
	inputGanancia = document.querySelector("#inputGanancia"),
	btnAgregar = document.querySelector("#btnAgregar"),
	btnLimpiar = document.querySelector("#btnLimpiar"),
	btnNewCat = document.querySelector("#btnNewCat"),
	inputNewCat = document.querySelector("#inputNewCat");

class Productos{
	constructor(id, nombre, categoria, tipo, costo, ganancia){
		this.id=id;
		this.nombre=nombre;
		this.categoria=categoria;
		this.tipo=tipo;
		this.costo=costo;
		this.ganancia=ganancia;
		this.precio=precio;
	}
}

function crearProducto(id, nombre, categoria, tipo, costo, ganancia){
	id = inputId.value;
	nombre = inputNombre.value;
	categoria = inputCategoria.value;
	tipo = inputTipo.value;
	costo = inputCosto.value;
	ganancia = inputGanancia.value;
	precio = inputCosto.value * (1 + (inputGanancia.value)/100)

	const prod = new Productos(id, nombre, categoria, tipo, costo, ganancia);
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


function limpiarCampos() {
	inputId.value = ""
	inputNombre.value = ""
	inputCategoria.value = ""
	inputTipo.value = ""
	inputCosto.value = ""
	inputGanancia.value = ""
	inputNewCat.value = ""
}

btnLimpiar.addEventListener("click", (e)=>{
	e.preventDefault();
	limpiarCampos();
	const Toast = Swal.mixin({
	  toast: true,
	  position: 'center',
	  showConfirmButton: false,
	  timer: 1000,
	  timerProgressBar: true,
	  didOpen: (toast) => {
	    toast.addEventListener('mouseenter', Swal.stopTimer)
	    toast.addEventListener('mouseleave', Swal.resumeTimer)
	  }
	})

	Toast.fire({
	  icon: 'success',
	  title: 'Campos limpiados'
	})
})

btnAgregar.addEventListener("click", (e)=> {
	e.preventDefault();
	let idExistente = stock.find(ele=> ele.id === inputId.value)
	if(idExistente){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Este producto ya existe!'
		})
	}else if(inputId.value===""||inputNombre.value===""||inputTipo.value===""||inputCosto.value===""||inputGanancia.value===""){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'No inresaste un ID y/o alguno de los campos esta vacio'
		})
	}else{
		let nuevoProducto = crearProducto();
		guardarProducto(nuevoProducto);
		guardarLS(stock);
		Swal.fire({
		  position: 'center',
		  icon: 'success',
		  title: 'Producto agregado correctamente!',
		  showConfirmButton: false,
		  timer: 2000
		})
	}
	
})

function agregarCats() {
	categorias.forEach((el)=>{
		let nueva = document.createElement("option")
		nueva.setAttribute('value', el)
		nueva.innerText = el
		inputCategoria.appendChild(nueva)
	})
}

agregarCats()

btnNewCat.addEventListener("click",(e)=>{
	e.preventDefault()
	let catExistente = categorias.find(ele=> ele === inputNewCat.value)
	if(catExistente){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Esta categoria ya existe!'
		})
		setTimeout(()=>{
			window.location.href="newProduct.html";
		}, 2000)
	}else if(inputNewCat.value === ""){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'El campo se encuentra vacio!'
		})
		setTimeout(()=>{
			window.location.href="newProduct.html";
		}, 2000)
	}else{
		let newCat = inputNewCat.value
		categorias.push(newCat)
		localStorage.setItem("cat", JSON.stringify(categorias));
		setTimeout(()=>{
			window.location.href="newProduct.html";
		}, 2000)
		Swal.fire({
		  position: 'center',
		  icon: 'success',
		  title: 'Categoria agregada correctamente!',
		  showConfirmButton: false,
		  timer: 2000
		})
	}
})




