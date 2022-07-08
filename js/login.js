const inputMail=document.querySelector("#i-inputEmail"),
	inputPassw=document.querySelector("#i-inputPass"),
	btnIngreaar=document.querySelector("#btnIngresar");

function logIn(usuario) {
	let user=usuarios.find((usuario) =>{
		return usuario.email === inputMail.value && usuario.pass ===inputPassw.value;
	});
	if (user){
		Swal.fire(
		  'Bienvenido/a!',
		  'Has click en OK para continuar',
		  'success'
		)
		setTimeout(()=>{
			window.location.href="pages/productos.html";
		}, 2000)
		
	}else {
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Usuario y/o Contraseña incorrecto',
		  footer: '<a href="pages/register.html">¿aun no te registraste?</a>'
		})
	}
}
function recuperarLS () {
	let dato= JSON.parse(localStorage.getItem("usuarios"));
	return dato;
}
const usuarioLS= recuperarLS(); 

btnIngresar.addEventListener("click", (e)=>{
	e.preventDefault();
	logIn(usuarioLS);
})