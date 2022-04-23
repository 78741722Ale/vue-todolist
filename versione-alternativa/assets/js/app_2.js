const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Classi dinamiche
        container_class: "container p-0", // Main container
        row_class: "row g-0 p-0 d-flex justify-content-center align-items-center flex-wrap", // Row per le col
        logo_input: "col-5 h-25 d-flex justify-content-center flex-wrap", // Colonna per logo e input
        main_tasks: "col-12 h-75 d-flex justify-content-evenly align-items-center", // Colonna per 3 mini container
        // Tutte classi del logo
        col_logo: "col-8 h-50 d-flex justify-content-center",
        logo: "../assets/img/logo.png", // immagine del logo
        logo_class: "w-100 h-100", // classi del logo
        // Tutte le classi dell'input
        col_input: "col-12 d-flex justify-content-center align-items-start",
        // classi Todo List 
        todo_classes: "col-4 h-75 task_style d-flex justify-content-start flex-column align-items-center flex-wrap",
        completed_classes: "col-3 h-75 task_style d-flex justify-content-start flex-column align-items-center flex-wrap",
        trash_classes: "col-4 h-75 task_style d-flex justify-content-start flex-column align-items-center flex-wrap",
        // Dati delle task to do
        tasks: [
            {
                title: "Todo List",
                text: "Do Something else"
            },
            {
                title: "Completed",
                text: "Do Else"
            },
            {
                title: "Trashed",
                text: "Do Something"
            },
        ],
    },
})