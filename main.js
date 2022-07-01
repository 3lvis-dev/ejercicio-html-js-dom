const me = [
    {
        name: "Elvis Espinoza",
        age: 25,
        hobbies: [
            "Program",
            "Play videogames",
            "To do physical exercise",
            "Wacth anime",
            "Recording music",
            "Wacth sacary movies"
        ],
        question: "Why do you want to be a programmer?",
        answer: "I like tecnology and computers, I love programming but I need to practice, study and learn more"
    },
];

const elvis = document.querySelector(".elvis");
let html = `<h2>Name: ${me[0].name}</h2>
    <h2>Age: ${me[0].age}</h2>
    <h3>My hobbies</h3>
    <ul>
        ${myHobbies(me[0].hobbies)}
    </ul>
    <h3>${me[0].question}</h3>
    <p>${me[0].answer}</p>`;

function myHobbies(array) {
    let html = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html += `<li>${element}</li>`;
    }

    return html;
}

elvis.innerHTML = html;
console.log(elvis); //Ver arbol html en la consola.
console.log(html); // Ver el dibujo del html en consola, etiquetas y contenido.


const user = [
    {
        name: "Brayan stiven munoz quiroz",
        age: "22 años",
        hobbies: [
            "Jugar futbol",
            "Salir a comer",
            "Trotar",
            "Aprender",
            "Programar",
        ],
        question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, quis quas laborum consequuntur corrupti
            accusamus vel nihil iusto tempora quos, fugiat harum omnis. Eligendi molestiae minima inventore
            aspernatur
            illum quibusdam.`,
    },
    {
        name: "Eleazar Geneste",
        age: 34,
        hobbies: ["Programar", "Praticar con familia y amigos"],
        question:
            "Me gusta crear , imaginar, al aprender a programar es una forma de aterizar mis ideas.",
    },
    {
        name: "Francis Martinez",
        age: 32,
        hobbies: ["Teatro", "Programar", "Leer"],
        question: "Quiero tener un empleo que me permita hacer magia,",
    },
    {
        name: "Oscar Nicolas Stella",
        age: 56,
        hobbies: [
            "escuchar musica",
            "informatica",
            "caminar",
            "ver peliculas",
        ],
        question: "Por que siempre me han gustado las computadoras",
    },
];

const brayan = document.querySelector(".brayan");
let html1 = `<h1>${user[0].name}</h1>
    <h3>Edad: ${user[0].age}</h3>
    <h3>Mis hobbies</h3>
    <ul>
        ${printHobbies(user[0].hobbies)}
    </ul>
    <h3>Por que quiero ser programador</h3>
    <div>
        <p>${user[0].question}</p>
    </div>`;
function printHobbies(array) {
    let html1 = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html1 += `<li>${element}</li>`;
    }
    return html1;
}
brayan.innerHTML = html1;

const eleazar = document.querySelector(".eleazar");
let html2 = `<h1>${user[1].name}</h1>
    <h3>Edad: ${user[1].age}</h3>
    <h3>Mis hobbies</h3>
    <ul>
        ${printHobbiesHtml2(user[1].hobbies)}
    </ul>
    <h3>Por que quiero ser programador</h3>
    <div>
        <p>${user[1].question}</p>
    </div>`;
function printHobbiesHtml2(array) {
    let html2 = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html2 += `<li>${element}</li>`;
    }
    return html2;
}
eleazar.innerHTML = html2;

const francis = document.querySelector(".francis");
let html3 = `<h1>${user[2].name}</h1>
    <h3>Edad: ${user[2].age}</h3>
    <h3>Mis hobbies</h3>
    <ul>
        ${printHobbiesHtml2(user[2].hobbies)}
    </ul>
    <h3>Por que quiero ser programador</h3>
    <div>
        <p>${user[1].question}</p>
    </div>`;
function printHobbiesHtml2(array) {
    let html3 = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html3 += `<li>${element}</li>`;
    }
    return html3;
}
francis.innerHTML = html3;