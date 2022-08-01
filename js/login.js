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
		  footer: '<a href="pages/register.html" class="alert-link text-secondary">¿aun no te registraste?</a><a href="" id="aMail" class="alert-link text-secondary">¿Olvidaste la contraseña?</a>'
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

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let data = xhttp.responseText;
       console.log(data)
    }
};
xhttp.open("GET", "datos.json", true);
xhttp.send();