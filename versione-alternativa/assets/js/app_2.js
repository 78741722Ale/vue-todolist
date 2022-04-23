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
                text: "Do Something else",
                done: true
            },
            {
                title: "Completed",
                text: "Do Else",
                done: true
            },
            {
                title: "Trashed",
                text: "Do Something",
                done: true
            },
        ],
        // Task per i completi dove pusho
        tasks_complete: [],
        // Task per i completi trash pove pusho
        tasks_trash: [],
        // Aggiunto un task vuoto
        newTask: '',
    },

    methods: {
        // Method per il ascolto dell'input
        inputTask() {
            console.log("Sto Ascoltando l'input ");
        },
        // Method per il button add task dell'input
        // FATTO NON GUARDARE PIU
        addTask() {
            console.log("Sto Ascoltando il bottone 'add' ");
            // Creo un nuovo oggetto?
            let newTask = {
                text: this.newTask,
                done: false
            }
            // Avvio una condizione, se non c'è niente non può pushare
            if (this.newTask != '') {
                console.log(`Questo testo è lungo ${this.newTask.length}`);
                this.tasks.push(newTask)
            }
            else {
                alert("Non puoi non scrivere niente")
            }
            console.log(newTask);
            this.newTask = ''
        },
        // Method per task completata
        doneTask() {
            console.log("Sto Ascoltando il click del check completato");
            // Creo di nuovo oggetto?
            this.tasks_complete.push(this.tasks_complete.text)
        },
        // Method per spostare nel cestino dalla todoList
        moveToBinTask() {
            console.log("Sto Ascoltando la task che se ne va nel cestino");
        },
        // Method per task nel completed, serve a far rientrare la task in todo
        // Equivale a returnTask()
        notYetTask() {
            console.log("Sto Ascoltando il rientro della task nei completati");
        },
        // Method per task nel cestino, serve a far rientrare la task in todo
        returnTask() {
            console.log("Sto Ascoltando il rientro in To do list");
        }
    },
})