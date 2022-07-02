const user = [
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

const container = document.querySelector(".container"); 

let html = "";

for (let i = 0; i < user.length; i++) {

    html += `<h1>${user[i].name}</h1>
    <h3>Edad: ${user[i].age}</h3>
    <h3>Mis hobbies</h3>
    <ul>
        ${printHobbies(user[i].hobbies)}
    </ul>
    <h3>Por que quiero ser programador</h3>
    <div>
        <p>${user[i].question}</p>
    </div>`;
}

function printHobbies(array) {
    let html = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        html += `<li>${element}</li>`
    }   

    return html;
}

container.innerHTML = html;
console.log(container); //Ver arbol html en la consola.
console.log(html); // Ver el dibujo del html en consola, etiquetas y contenido.
