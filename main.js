const header = document.getElementById("bigHeader");

const user = "Rein";
header.textContent = `${user}'s Inbox 🔮`;

// console.log("HAIIII???");
// console.log("header", header); // -> wat gaan we zien?

// getElementsByClassName geeft een HTML Collection terug
// array maken van een HTML Collection
// const emailArray = Array.from(emails);
// // wat gaan we zien
// console.log(emails);

// for (const email of emails) {
//   console.log(email.textContent);
//   email.textContent = email.textContent + " not Opened Yet";
// }

// - [x] Selecteer knopje
// - [x] Voeg een event listener toe, die luistert naar click
// - [x] Wanneer er geclickt wordt
// - [x] Selecteer alle emails
// - [x] Verwijder alle emails

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", () => {
  console.log("I GOT CLICKED!");
  const emails = document.getElementsByClassName("email");
  const emailArray = Array.from(emails);

  emailArray.forEach((email) => {
    email.remove();
  });
});

console.log(deleteButton, "BUTTON?");

// New email

// - [x] input veld waar iemand iets in kan typen (html)
// - [x] knopje met create email (html)
// - [x] Wanneer iemand op het knopje klikt: (getElementById, addEventListener)
//   - [x] input veld selecteren (getElementById)
//   - [x] text uit het inputveld halen (met .value)
//   - [x] Nieuw element maken (createElement)
//   - [x] De text van de gebruiker aan het element toevoegen (met .textContent)
//   - [x] Het lijstje selecteren (getElementById)
//   - [x] Het element aan het lijstje "plakken" (appendChild)

const createButton = document.getElementById("createButton");
// console.log("BUTTON??", createButton);

createButton.addEventListener("click", () => {
  //   console.log("CLICKED?");
  const emailInput = document.getElementById("emailInput");
  //   console.log(emailInput.value, "VALUE OF INPUT?");
  const newEmail = document.createElement("li");
  newEmail.setAttribute("class", "email new");
  newEmail.textContent = emailInput.value;

  //   newEmail.style.backgroundColor = "orange";
  //   console.log(newEmail, "IT IS ALIVE?");
  const inbox = document.getElementById("inbox");
  //   console.log("inbox??", inbox);
  inbox.appendChild(newEmail);
});
