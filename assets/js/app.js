const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        logo: './assets/img/logo.png',// Logo Boolean
        f_container: 'container-md mt-3', // Primo container (logo)
        s_container: 'container-sm mt-3',
        f_row: 'row h_sm', // Prima row (logo)
        s_row: 'row h_xs d-flex gx-3 justify-content-center align-items-center', // Seconda row (Input e Button)
        input_class: 'w-100 p-2 text_sm radius',
        logo_col: 'col-12 d-flex justify-content-center align-items-center' // prima col (logo)
    },
})