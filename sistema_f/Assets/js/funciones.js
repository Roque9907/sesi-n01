function frmLogin(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const clave = document.getElementById("clave");
    if (usuario.value == "") {
        clave.classList.remove("is-invalid"); 
        usuario.classList.add("is-invalid");   
    }else if (clave.value ==""){
        usuario.classList.remove("is-invalid");
        clave.classList.add("is-invalid");
    }
    
}