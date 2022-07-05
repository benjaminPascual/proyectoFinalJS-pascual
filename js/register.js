let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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
	let nuevoUser=crearUsuario();
	guardarUser(nuevoUser);
	guardarLS(usuarios);
	limpiarCampos();
	console.log(usuarios);
})