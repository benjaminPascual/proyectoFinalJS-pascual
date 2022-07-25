const inputEmail = document.querySelector("#r-inputEmail"),
	  inputPass = document.querySelector("#r-inputPassword"),
	  inputNom = document.querySelector("#r-inputNombre"),
	  inputApe = document.querySelector("#r-inputApellido"),
	  btnRegist = document.querySelector("#btnRegist");

class usuario{
	constructor(email, pass, nombre, apellido){
	this.email=email;
	this.pass=pass;
	this.nombre=nombre;
	this.apellido=apellido;
	}
}
function crearUsuario(email, pass, nombre, apellido){
	email=inputEmail.value;
	pass=inputPass.value;
	nombre=inputNom.value;
	apellido=inputApe.value;

	const user = new usuario(email, pass, nombre, apellido);
	return user;
}
function guardarUser(user){
	let userGuardado=usuarios.push(user);
	return userGuardado;
}
function limpiarCampos() {
	inputEmail.value="";
	inputPass.value="";
	inputNom.value="";
	inputApe.value="";
}
function guardarLS(el){
	let userGuardado= localStorage.setItem("usuarios", JSON.stringify(el));
	return userGuardado;
}


btnRegist.addEventListener("click", (e)=>{
	e.preventDefault();
	let mailExistente = usuarios.find(ele=> ele.email == inputEmail.value) 
	if(inputEmail.value==="" || inputPass.value==="" || inputNom.value==="" || inputApe.value===""){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Alguno de los campos esta vacio!'
		})

	}else if(mailExistente){
		Swal.fire({
		  icon: 'info',
		  title: 'MAIL existente!',
		  text: '',
		  footer: '<a href="" id="aMail">¿Olvidaste la contraseña?</a>'
		})
		let aMail =document.querySelector("#aMail")
		aMail.addEventListener("click", (e)=>{
			e.preventDefault();
			Swal.fire({
				icon: 'info',
				title: 'Hemos enviado un instructivo a',
				text: mailExistente.email
			})
			limpiarCampos()
		})

	}else {
		e.preventDefault();
		let nuevoUser = crearUsuario();
		guardarUser(nuevoUser);
		guardarLS(usuarios);
		limpiarCampos();
		Swal.fire({
		  position: 'center',
		  icon: 'success',
		  title: 'Registro exitoso!',
		  showConfirmButton: false,
		  timer: 2000
		})
	}
})