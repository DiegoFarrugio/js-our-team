/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!*/



function nameRoleImage(nome, role, image) {
    const workersTable = {
        nome: nome,
        role : role,
        image: image,
    };

    return workersTable;
}


let workersContainer = document.getElementById('workersContainer');
console.log('workersContainer', workersContainer, typeof workersContainer);


console.log(nameRoleImage);

const workersTable =[];


workersTable.push(nameRoleImage('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));

workersTable.push(nameRoleImage('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'));

workersTable.push(nameRoleImage('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'));

workersTable.push(nameRoleImage('Angela Lopez', 'Social Media', 'angela-lopez-social-media-manager.jpg'));

workersTable.push(nameRoleImage('Scoot Estrada', 'Developer', 'scott-estrada-developer.jpg'));

workersTable.push(nameRoleImage('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));

console.log(workersTable);


for(let i = 0; i < workersTable.length; i++){
    console.log('-', workersTable[i].nome, '-', workersTable[i].role, '-', workersTable[i].image);
    workersContainer.innerHTML += ' - '+"<strong>" + workersTable[i].nome+"</strong>" + '<mb-3>' + ' - ' + workersTable[i].role+ ' - '+ '<img class= "d-block" src="./img/' + workersTable[i].image +'"' +  'alt=""></img>' + '<mt-5>' + '<br>';
}

