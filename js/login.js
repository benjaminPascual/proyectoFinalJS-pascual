const inputMail=document.querySelector("#i-inputEmail"),
	inputPassw=document.querySelector("#i-inputPass"),
	btnIngreaar=document.querySelector("#btnIngresar");

function logIn(usuario) {
	let user=usuarios.find((usuario) =>{
		return usuario.email === inputMail.value && usuario.pass ===inputPassw.value;
	});
	if (user){
		window.location.href="pages/productos.html";
	}else {
		alert("usuario no encontrado")
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