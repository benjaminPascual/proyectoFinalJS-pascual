const btn = document.getElementById('button'),
      name=document.querySelector("#name"),
      last=document.querySelector("#last"),
      email=document.querySelector("#email"),
      message=document.querySelector("#message");

function limpiarCampos() {
  name.value=""
  last.value=""
  email.value=""
  message.value=""
}

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_a0tmpza';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
      icon: 'info',
      title: 'Mensaje enviado exitosamente!',
      text: 'Gracias por su consulta',
      footer: '<a href="../index.html" class="alert-link text-secondary">Inicio</a>'
    });
      limpiarCampos();
    }, (err) => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'error',
        title: 'Oops... ocurrio un error..',
        text: JSON.stringify(err),
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });
});