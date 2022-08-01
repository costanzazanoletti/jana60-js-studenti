/* es 1 */
console.log('*** es 1 ***');
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età
const studente = {
  nome: 'Pinco',
  cognome: 'Pallo',
  eta: 23,
};
// Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto
for (let key in studente) {
  console.log(key + ': ' + studente[key]);
}

/* es 2*/
// Creare un array di oggetti di studenti.
console.log('*** es 2 ***');
const studenti = [
  {
    nome: 'John',
    cognome: 'Doe',
    eta: 21,
  },
  {
    nome: 'Jane',
    cognome: 'Smith',
    eta: 22,
  },
  {
    nome: 'Scott',
    cognome: 'Tiger',
    eta: 25,
  },
];

const jonSnow = {
  nome: 'Jon',
  cognome: 'Snow',
  eta: 40,
};

studenti.push(jonSnow);

//Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
for (let i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
  //   let currentStudente = studenti[i];
  //   for (let key in currentStudente) {
  //     console.log(key + ': ' + currentStudente[key]);
  //   }
}

/* es 3*/
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età
console.log('*** es 3 ***');

const nuovoStudente = {};

let nomeInserito = prompt('Inserisci il nome');
nuovoStudente.nome = nomeInserito;
let cognomeInserito = prompt('Inserisci il cognome');
nuovoStudente.cognome = cognomeInserito;
let etaInserita = prompt("Inserisci l'eta");
nuovoStudente.eta = parseInt(etaInserita);

nuovoStudente.eta = 12;
nuovoStudente.provenienza = 'Napoli';

console.log(nuovoStudente);
// aggiungo il nuovo studente all'array
studenti.push(nuovoStudente);

// per ogni studente stampo tutte le proprietà con i valori
for (let i = 0; i < studenti.length; i++) {
  let currentStudente = studenti[i];
  for (let key in currentStudente) {
    console.log(key + ': ' + currentStudente[key]);
  }
}

/* es 4*/
// creare un array di 3 studenti con i dati chiesti all'utente
const classe = [];

for (let i = 0; i < 3; i++) {
  let nomeIn = prompt('Inserisci il nome');
  let cognomeIn = prompt('Inserisci il cognome');
  let etaIn = prompt('Inserisci eta');
  let studente = {
    nome: nomeIn,
    cognome: cognomeIn,
    eta: etaIn,
  };
  classe.push(studente);
}
console.log(classe);
