var direccion = `http://localhost:5000/amigos`; 

var obtenerAmigos = () =>{

    var list = $('#lista')
    //vaciar lista
    list.empty();
    //get al servidor
    $.get(direccion, res =>{
        for(let i = 0; i < res.length; i++){
            list.append(`<li>${res[i].id} : ${res[i].name}</li>`);
        }
    } )
}


//mostrar
$('#boton').click(obtenerAmigos)
// buscar
$('#search').click(() => {
    var id = $('#input').val();

    $.get(direccion+`/${id}`, res => {
        $('#amigo').text(res.name);
    })
})

//eliminar
$('#delete').click(() => {
    var id = $('#inputDelete').val();
    var nombre;
    $.get(direccion+`/${id}`, res => {
        nombre = res.name;
    })
    
    $.ajax({
    url: direccion+`/${id}`,
    type: 'DELETE',
    success: () => {
        $('#success').text(`${nombre} fue borrado exitosamente`);
        obtenerAmigos();        
     }
    })
})