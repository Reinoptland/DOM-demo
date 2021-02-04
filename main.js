const header = document.getElementById("bigHeader");

const user = "Henk";
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
// - [ ] Verwijder alle emails

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", () => {
  console.log("I GOT CLICKED!");
  const emails = document.getElementsByClassName("email");
  const emailArray = Array.from(emails);

  emailArray.map((email) => {
    email.remove();
  });
});

console.log(deleteButton, "BUTTON?");
