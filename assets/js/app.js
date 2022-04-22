const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        logo: './assets/img/logo.png',// Logo Boolean
        // Containers
        f_container: 'container-md mt-3', // Primo container (logo)
        s_container: 'container-sm mt-3',
        t_container: 'container-sm mt-3 bg_t_cont ',
        hidden_section: 'p-3 d-flex justify-content-center align-items-center',
        // Rows
        f_row: 'row h_sm', // Prima row (logo)
        s_row: 'row h_xs d-flex gx-3 justify-content-center align-items-center', // Seconda row (Input e Button)
        t_row: 'row p-3 justify-content-center align-items-center flex-wrap',
        // Classi Utilities 
        input_class: 'w-100 p-2 text_sm radius', // Classi in comune tra button e Type Text
        logo_col: 'col-12 d-flex justify-content-center align-items-center', // prima col (logo)
        // task_classes: 'col-4 list-unstyled d-flex align-items-center justify-content-start',
        cross_classes: 'col-1 list-unstyled d-flex align-items-center justify-content-center', // Classi per centraggio croce
        // Dati primari 
        // Stampare all'interno di una lista, un item per ogni todo. 
        // Se la proprietà done è uguale a true, visualizzare il testo del todo.
        tasks_todo: [
            {
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Fare il bucato",
                done: false,
            },
        ],
        // Task Vuoto
        newTask: '',
    },

    methods: {
        // Function al click per un nuovo task
        addTask() {
            console.log("Sto ascoltando il bottone Aggiungi"); // verifico se funziona al click
            // Creo un nuovo oggetto?
            let newTask = {
                text: this.newTask,
                done: false
            }
            console.log(newTask); // ascolto e verifico cosa scrive l'utente nell'input
            this.tasks_todo.unshift(newTask) // pusho, in cima alla lista, il nuovo task aggiunto
            this.newTask = '' // faccio il clear del nuovo todo
        },
        // Function al click della x per rimuovere il task al click
        removeTask(index) {
            // console.log("Sto ascoltando al click");
            this.tasks_todo.pop(index, 1) // ad ogni click rimuove una task
        },
        // Task Completata ma sbarrata
        completedTask(i) {
            console.log("Sto cliccando sulla task da sbarrare"); // Funziona
            if (this.tasks_todo[i].done === false) {
                this.tasks_todo[i].done = true;
            } else if (this.tasks_todo[i].done === true) {
                this.tasks_todo[i].done = false;
            };
        }
    },
})
