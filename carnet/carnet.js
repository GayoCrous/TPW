const formulario = document.getElementById("form_tarjeta");

// ************************** FUNCION PARA VOLTEAR EL CARNET Y MOSTRAR LA PARTE DELANTERA **************************

function mostrarFrente() {
    if(tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// ******************************************* BOTON ----> GIRAR CARNET ********************************************

const tarjeta = document.querySelector("#tarjeta");

function rotarTarjeta() {
   tarjeta.classList.toggle('active');
}

tarjeta.addEventListener('click', rotarTarjeta);


// *************************************** BOTON ----> GIRAR BOTON ***********************************************
// ********************************* BOTON ----> ENSEÑAR FORMULARIO **********************************************

const btn_abrir_form = document.querySelector("#btn_abrir_form");
const form = document.querySelector("#form_tarjeta");

function girarBoton() {
    btn_abrir_form.classList.toggle('active');
    form.classList.toggle('active')
}

btn_abrir_form.addEventListener('click', girarBoton);


// ******************************** INPUT ----> DNI *************************************

const dniCarnet = document.querySelector('#tarjeta .dni');

formulario.inputDni.addEventListener('keyup', (e) => {
    // ***** AGARRA EL VALOR DEL INPUT
    let valorInput = e.target.value;

    formulario.inputDni.value = valorInput
    // **** ELIMINA ESPACIOS EN BLANCO ****
    .replace(/\s/g, '')
    // **** ELIMINA LAS LETRAS ****
    .replace(/\D/g, '');
    // **** PERMITE VISUALIZAR EN EL CARNET LO QUE ESTAMOS ESCRIBIENDO ****
    dniCarnet.textContent = valorInput;
    // **** AL MOMENTO DE BORRAR LO QUE ESCRIBIMOS, COLOCA ---> ******
    if(valorInput == '') {
        dniCarnet.textContent = '*******';
    }

    // **** MOSTRAR FRENTE DEL CARNET ****
    mostrarFrente();
});


// ******************************** INPUT ----> NOMBRE *************************************

const nombresCarnet = document.querySelector('#tarjeta .nombres');

formulario.inputNombres.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombres.value = valorInput.replace(/[0-9]/g, '');

    nombresCarnet.textContent = valorInput;

    if(valorInput == '') {
        nombresCarnet.textContent = '*******';
    }

    mostrarFrente();

});

// ******************************** INPUT ----> APELLIDO *************************************

const apellidosCarnet = document.querySelector('#tarjeta .apellidos');

formulario.inputApellidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputApellidos.value = valorInput.replace(/[0-9]/g, '');

    apellidosCarnet.textContent = valorInput;

    if(valorInput == '') {
        apellidosCarnet.textContent = '*******';
    }

    mostrarFrente();

});

// ******************************** INPUT ----> CARRERA *************************************

const carreraCarnet = document.querySelector('#tarjeta .carrera');

formulario.inputCarrera.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputCarrera.value = valorInput.replace(/[0-9]/g, '');

    carreraCarnet.textContent = valorInput;

    if(valorInput == '') {
        carreraCarnet.textContent = '*******';
    }

    mostrarFrente();

});

// ******************************** INPUT ----> CÓDIGO *************************************

const codigoCarnet = document.querySelector('#tarjeta .codigo');

formulario.inputCodigo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputCodigo.value = valorInput.replace(/\s/g, '')

    codigoCarnet.textContent = valorInput;

    if(valorInput == '') {
        codigoCarnet.textContent = '*******';
    }

    mostrarFrente();
});

// ************ INPUT ----> SELECT ----> RELLENAR DÍA ***********

for(let i = 1; i <= 31; i++) {

    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectDia.appendChild(opcion);
}

function seleccionDia() {
    let selectDia = document.getElementById('selectDia');
    let dia = selectDia.value;

    document.getElementById('diaExp').textContent = dia;
}

// *************** INPUT ----> SELECT ----> RELLENAR MES ************

for(let i = 1; i <= 12; i++) {

    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

function seleccionMes() {
    let selectMes = document.getElementById('selectMes');
    let mes = selectMes.value;

    document.getElementById("mesExp").textContent = mes;
}

// ********** INPUT ----> SELECT ----> RELLENAR AÑO *****************

const yearActual = new Date().getFullYear(); // Obtener el año actual

for(let i = yearActual; i <= yearActual + 10; i++) {

    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

function seleccionYear() {
    let selectYear = document.getElementById("selectYear");
    let year = parseInt(selectYear.value);
    let yearFinal = year + 1;

    document.getElementById("yearExp").textContent = yearFinal;
}

// ******************************** INPUT ----> INSERTAR FOTOGRAFÍA*************************************

function previewImage(event, querySelector) {

    // Recuperamos el input que desencadenó la acción
    const input = event.target;

    // Recuperamos la etiqueta img donde cargaremos la imagen
    $imgPreview = document.querySelector(querySelector);

    // Verificamos si existe una imagen seleccionada
    if(!input.files.length) return;

    //Recuperamos el archivo subido
    file = input.files[0];

    //Creamos la url
    ObjectURL = URL.createObjectURL(file);

    //Modificamos el atributo src de la etiqueta img
    $imgPreview.src = ObjectURL;
}