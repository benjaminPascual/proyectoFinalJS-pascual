const inputMail=document.querySelector("#i-inputEmail"),
	inputPass=document.querySelector("#i-inputPass"),
	btnIngresar=document.querySelector("#btnIngresar")
	usuarioLS= recuperarLS();

function logIn(usuario) {
	let user=usuarios.find((usuario) =>{
		return usuario.email === inputMail.value && usuario.pass ===inputPass.value;
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
		
	}else{
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Usuario y/o Contraseña incorrecto',
		  footer: '<a href="pages/register.html">¿aun no te registraste?</a><a href="" id="aMail">¿Olvidaste la contraseña?</a>'
		})

		let aMail =document.querySelector("#aMail")
		aMail.addEventListener("click", (e)=>{
			e.preventDefault();
			let user=usuarios.find((usuario) =>{
				return usuario.email === inputMail.value;
			});

			console.log(user)
			if(user){
			Swal.fire({
				icon: 'info',
				title: 'Hemos enviado un instructivo a',
				text: user.email
			})
			limpiarCampos()
			}else{ 
				Swal.fire('Por favor ingrese su email')
			}
		})
	}
}
function recuperarLS () {
	let dato= JSON.parse(localStorage.getItem("usuarios"));
	return dato;
}
function limpiarCampos() {
	inputMail.value="";
	inputPass.value="";
}

btnIngresar.addEventListener("click", (e)=>{
	e.preventDefault();
	logIn(usuarioLS);
})