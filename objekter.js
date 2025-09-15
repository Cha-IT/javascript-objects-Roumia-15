// Oppgave 2

// 2a - Array med filmer (5 sett, 5 ikke sett)
let filmer = [
  { tittel: "Inception", regissør: "Christopher Nolan", sett: true },
  { tittel: "Interstellar", regissør: "Christopher Nolan", sett: true },
  { tittel: "The Matrix", regissør: "Lana & Lilly Wachowski", sett: true },
  { tittel: "Parasite", regissør: "Bong Joon-ho", sett: true },
  { tittel: "The Dark Knight", regissør: "Christopher Nolan", sett: true },
  
  { tittel: "Avatar", regissør: "James Cameron", sett: false },
  { tittel: "Titanic", regissør: "James Cameron", sett: false },
  { tittel: "Joker", regissør: "Todd Phillips", sett: false },
  { tittel: "Oppenheimer", regissør: "Christopher Nolan", sett: false },
  { tittel: "Dune", regissør: "Denis Villeneuve", sett: false }
];

// 2b - Løkke som skriver ut tittel og regissør
console.log("=== 2b: Utskrift av filmer ===");
filmer.forEach(film => {
  console.log(film.tittel + " - " + film.regissør);
});

// 2c - Sortere etter tittel
filmer.sort((a, b) => a.tittel.localeCompare(b.tittel));

console.log("\n=== 2c: Etter sortering ===");
filmer.forEach(film => {
  console.log(film.tittel + " - " + film.regissør);
});

// 2d - Legge til tekst som viser om filmen er sett
console.log("\n=== 2d: Med status (sett/ikke sett) ===");
filmer.forEach(film => {
  let status = film.sett ? "Sett: " : "Ikke sett: ";
  console.log(status + film.tittel + " - " + film.regissør);
});
