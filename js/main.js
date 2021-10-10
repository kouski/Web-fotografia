$("document").ready(function(){

//Función para procesar la petición de formulario
$("#do_contact_form").on("submit", do_contact_form);
function do_contact_form(event){
    event.preventDefault();

    var data = new FormData($("do_contact_form").get(0));
    console.log(data);
}
    





});