const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        logo: './assets/img/logo.png',// Logo Boolean
        // Containers
        f_container: 'container-md mt-3', // Primo container (logo)
        s_container: 'container-sm mt-3',
        t_container: 'container-sm mt-3',
        // Rows
        f_row: 'row h_sm', // Prima row (logo)
        s_row: 'row h_xs d-flex gx-3 justify-content-center align-items-center', // Seconda row (Input e Button)
        t_row: 'row p-3 justify-content-center align-items-center bg_t_cont flex-wrap',
        // Classi Utilities 
        input_class: 'w-100 p-2 text_sm radius', // Classi in comune tra button e Type Text
        logo_col: 'col-12 d-flex justify-content-center align-items-center', // prima col (logo)
        task_classes: 'col-4 list-unstyled d-flex align-items-center justify-content-start',
        cross_classes: 'col-1 list-unstyled d-flex align-items-center justify-content-center', // Classi per centraggio croce
        // Dati primari 
        // Stampare all'interno di una lista, un item per ogni todo. 
        // Se la proprietà done è uguale a true, visualizzare il testo del todo.
        tasks_todo: [
            {
                text: "Fare i compiti",
                done: true,
            },
            {
                text: "Fare la spesa",
                done: true,
            },
            {
                text: "Fare il bucato",
                done: true,
            },
        ],
        // Task Vuoto
        newTask: '',
    },

    methods: {
        addTask() {
            console.log("Sto ascoltando il bottone Aggiungi"); // verifico se funziona al click
            console.log(this.newTask); // ascolto e verifico cosa scrive l'utente nell'input
            this.tasks_todo.unshift(this.newTask) // pusho, in cima alla lista, il nuovo task aggiunto
            this.newTask = '' // faccio il clear del nuovo todo
        }
    },
})
