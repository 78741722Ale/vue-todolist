const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Classi dinamiche
        container_class: "container p-0", // Main container
        row_class: "row g-0 gy-3 p-0 d-flex justify-content-center align-items-center flex-wrap", // Row per le col
        logo_input: "col-5 bg_prova h-25 d-flex justify-content-center flex-wrap", // Colonna per logo e input
        main_tasks: "col-12 bg_prova h-75", // Colonna per 3 mini container
        // Tutte classi del logo
        col_logo: "col-8 h-50 d-flex justify-content-center",
        logo: "../assets/img/logo.png", // immagine del logo
        logo_class: "w-100 h-100" // classi del logo
    },


})