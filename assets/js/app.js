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
        cross_button: 'col-1 d-flex justify-content-end align-items-center border-0',
        task_class: 'col-4 d-flex justify-content-start align-items-center',
    },
})