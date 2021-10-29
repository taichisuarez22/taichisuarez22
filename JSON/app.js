var app = new Vue({
    el: "#app",
    data: {
        busquedaPelicula: "",
        peliculaEncontrada: false,
        mostrarIntro: true,
    },
    methods: {
        clickBuscarPelicula: function() {
            console.log("Hubo un click en el botón");
            buscarPelicula();
        },
    },
});

function buscarPelicula() {
    console.log("Función buscarPelicula, estoy a punto de pegarle a la API");
    $.ajax({
        url: "https://private.omdbapi.com/?apikey=bef9c583&t=" + app.busquedaPelicula,
        success: function(respuesta) {
            // Esta función SUCCESS se ejecuta cuando la API responde
            app.peliculaEncontrada = respuesta;
            app.mostrarIntro = false;
            console.log("Esta es la respuesta de la API:");
            console.log(app.peliculaEncontrada);
        },
    });
}