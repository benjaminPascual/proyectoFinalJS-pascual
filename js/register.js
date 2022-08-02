const inputEmail = document.querySelector("#email"),
	  inputPass = document.querySelector("#pass"),
	  inputNom = document.querySelector("#name"),
	  inputApe = document.querySelector("#last"),
	  btnRegist = document.querySelector("#button");

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
			(async () => {
			const { value: email } = await Swal.fire({
			  title: 'Recuperar Contraseña',
			  input: 'email',
			  inputLabel: 'Enviaremos un instructivo.',
			  inputPlaceholder: 'Ingrese su email'
			})

			if (email) {
			  Swal.fire(`Hemos enviado un instructivo a: ${email}`)
			}

			})()
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