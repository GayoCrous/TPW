// const button = document.getElementById("profesor1");

// function verLista(e) {

//     e.preventDefault();

//     let list = document.getElementById("list").value;
//     let text_profesor = document.getElementById("text_profesor");

//     if(list == "17A") {

//         text_profesor.innerHTML = `
//             Aaron Martinez <br> <br>
//             Shirley Paredes <br> <br>
//         `;

//     } else if(list == "17B"){

//         text_profesor.innerHTML = `
//             Rachel James<br> <br>
//             Emma James <br> <br>
//         `;

//     } else {
//         text_profesor.innerHTML = `SECCIÓN NO ENCONTRADA.`
//     }
    
// }

// button.addEventListener('click', verLista);

// // *******************************************************************************

// let agregar = document.getElementById("agregar");

// function agregarTabla(e) {

//     e.preventDefault();

//     let section = document.getElementById("section").value;
//     let name = document.getElementById("nombre").value;
//     let curso = document.getElementById("curso").value;
//     let asistencias = parseInt(document.getElementById("asistencias").value);
//     let faltas = parseInt(document.getElementById("faltas").value);
//     let texto = document.getElementById("text2");
//     let section_input = document.querySelector(".input");
//     let name_input = document.querySelector(".input1");
//     let curso_input = document.querySelector(".input2");
//     let asistencias_input = document.querySelector(".input3");
//     let faltas_input = document.querySelector(".input4");


//     function insertarDatos() {
    
//     let table = document.getElementById("table");

//     let newTable = table.insertRow(-1);

//     let newCell = newTable.insertCell(0);
//     newCell.textContent = section;

//     newCell = newTable.insertCell(1);
//     newCell.textContent = name;

//     newCell = newTable.insertCell(2);
//     newCell.textContent = curso;

//     newCell = newTable.insertCell(3);
//     newCell.textContent = asistencias;

//     newCell = newTable.insertCell(4);
//     newCell.textContent = faltas;
//     }

//     function mostrarError() {
//         texto.textContent = "Ha cometido un error en la digitación."
//     }

//     function quitarError() {
//         texto.textContent = "";
//     }

//     function agregarInvalidInput(a) {
//         a.classList.add("invalid_inputs");
//     }

//     function quitarInvalidInput(b) {
//         b.classList.remove("invalid_inputs");
//     }

//     if(section == "17A") {
//         quitarError();
//         quitarInvalidInput(section_input);

//         if(name == "Aaron Martinez" || name == "Shirley Paredes") {
//             quitarError();
//             quitarInvalidInput(name_input);

//             if(curso == "Redes" || curso == "Fisica" || curso == "Quimica") {
//                 quitarError();
//                 quitarInvalidInput(curso_input);

//                 if(!isNaN(asistencias)) {
//                     quitarError();
//                     quitarInvalidInput(asistencias_input);

//                     if(!isNaN(faltas)) {
//                         quitarError();
//                         quitarInvalidInput(faltas_input);
//                         insertarDatos();

//                     } else {
//                         mostrarError()
//                         agregarInvalidInput(faltas_input);
//                     }

//                 } else {
//                     mostrarError();
//                     agregarInvalidInput(asistencias_input);
//                 }
//             } else {
//                 mostrarError();
//                 agregarInvalidInput(curso_input);
//             }

//         } else {
//             mostrarError();
//             agregarInvalidInput(name_input);
//         }
//     } else if(section == "17B") {
//         quitarError();
//         quitarInvalidInput(section_input);

//         if(name == "Rachel James" || name == "Emma James") {
//             quitarError();
//             quitarInvalidInput(name_input);

//             if(curso == "Redes" || curso == "Fisica" || curso == "Quimica") {
//                 quitarError();
//                 quitarInvalidInput(curso_input);

//                 if(!isNaN(asistencias)) {
//                     quitarError();
//                     quitarInvalidInput(asistencias_input);

//                     if(!isNaN(faltas)) {
//                         quitarError();
//                         quitarInvalidInput(faltas_input);
//                         insertarDatos();
//                     } else {
//                         mostrarError()
//                         agregarInvalidInput(faltas_input);
//                     } 
                
//                 }else {
//                     mostrarError();
//                     agregarInvalidInput(asistencias_input);
//                 }
//             } else {
//                 mostrarError();
//                 agregarInvalidInput(curso_input);
//             }

//         } else {
//             mostrarError();
//             agregarInvalidInput(name_input);
//         }
//     } else {
//         mostrarError();
//         agregarInvalidInput(section_input);
//     } 
// }
// agregar.addEventListener('click', agregarTabla)


// *******************************************************************************

const button2 = document.getElementById("boton2");

function verNotas(e) {

    e.preventDefault();

    let name = document.getElementById("nombre1").value;
    let text3 = document.getElementById("text_alumn1");

    if(name == "Aaron Martinez") {
        text3.innerHTML = `
            Física: 18  <br>
            Química: 17 <br>
            Base de datos: 18 <br>
            Redes: 15 <br>
        `;
    } else if(name == "Shirley Paredes") {
        text3.innerHTML = `
            Física: 20  <br>
            Química: 15 <br>
            Base de datos: 17 <br>
            Redes: 19 <br>
        `;
    } else if(name == "Rachel James") {
        text3.innerHTML = `
            Física: 14  <br>
            Química: 17 <br>
            Base de datos: 15 <br>
            Redes: 17 <br>
        `;
    } else if(name == "Emma James") {
        text3.innerHTML = `
            Física: 18  <br>
            Química: 16 <br>
            Base de datos: 15 <br>
            Redes: 19 <br>
        `;
    }

}

button2.addEventListener('click', verNotas);

// *******************************************************************************

const button3 = document.getElementById("boton3");

function jaladoPorInasistencia(e){

    e.preventDefault();

    let name = document.getElementById("nombre1").value;
    let name1 = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;
    let inasistencias = parseInt(document.getElementById("faltas").value);
    let text4 = document.getElementById("text_alumn2");

    if(inasistencias > 10 && name == name1) {
        text4.textContent = `
            Usted ha jalado el curso de ${curso}, porque tiene registrado
            un total de ${inasistencias} inasistencias totales.
        `;
    }else if(inasistencias <=10 && name == name1){
        text4.textContent = "No ha jalado por inasistencias"
    } else if(inasistencias = "" && name == name1) {
        text4.textContent = "El profesor todavía no ha colocado la asistencia total."
    }

}

button3.addEventListener('click', jaladoPorInasistencia);

// *******************************************************************************

const button4 = document.getElementById("boton4");

function verPonderado(e) {

    e.preventDefault();
    let text6 = document.getElementById("text_alumn4");
    let name = document.getElementById("nombre1").value;
    let text5 = document.getElementById("text_alumn3");

    function ponderado(a, b, c, d) {
        final = parseFloat((a + b + c + d) / 4);
        return final;
    }

    function verInfo(){
        text5.innerHTML = `
            Su ponderado final es de: ${final}
        `;
    }

    function superior() {
        if(final >= 17.5) {
            text6.innerHTML = `
                Felicidades <span style = 'color:orange'> ${name.toUpperCase()} </span>, 
                perteneces al Décimo superior. <b style = 'color: violet'> ʕ•́ᴥ•̀ʔっ </b>
                
            `;
        } else {
            text6.textContent = " ";
        }
    }

    if(name == "Aaron Martinez") {
        ponderado(18, 17, 18, 15);
        verInfo();
        superior();
    } else if(name == "Shirley Paredes") {
        ponderado(20, 15, 17, 19);
        verInfo();
        superior();
    } else if(name == "Rachel James") {
        ponderado(14, 17, 15, 17);
        verInfo();
        superior();
    } else if(name == "Emma James") {
        ponderado(18, 16, 15, 19);
        verInfo();
        superior();
    }

}

button4.addEventListener('click', verPonderado);

// *******************************************************************************

// *************** MODAL: PROFESORES**************

// const btn_modal_profesor = document.getElementById("btn_modal_profesor");

// function modalProfesor(e) {

//     e.preventDefault();
//     let id = document.getElementById("id").value;
//     let password = document.getElementById("contraseña").value;
//     let modal_prof = document.getElementById("modal_profesor");

//     if(id == "user01" && password == "user01") {

//         modal_prof.classList.add('modal_profesor_out');

//     } else if(id == "user02" && password == "user02") {

//         modal_prof.classList.add('modal_profesor_out');

//     } else {
        
//     }
// }

// btn_modal_profesor.addEventListener('click', modalProfesor);


