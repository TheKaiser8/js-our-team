"use strict";

// Consegna:
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

/*------------------
    MAIN
--------------------*/
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// creo un ARRAY di OBJECTS che rappresentano ogni membro del team
const ourTeam = [
    {
        fullName: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// Stampo in console l'array degli oggetti
console.log(ourTeam);

// const membersContainer = document.getElementById('list');
const membersContainer = document.querySelector('.items');

// Con un ciclo FOR stampo in console ogni OGGETTO dell'ARRAY 
for (let i = 0; i < ourTeam.length; i++) {
    let member = ourTeam[i];
    console.log(member);

    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    // BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva

    // BONUS 2:
    // Organizzare i singoli membri in card/schede
    const boxItem = `
        <div class="box-item">
            <div class="img-item">
                <img src="img/${member.image}" alt="">
            </div>
            <div class="text-center">
                <h3>${member.fullName}</h3>
                <p>Ruolo: ${member.role}</p>
            </div>
        </div>
    `;
    membersContainer.innerHTML += boxItem;
};

