// Get the element with the class "row" from the HTML document
const row = document.querySelector(".row");

//1. 1. Define an array of objects representing team members:
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: " image: 'wayne-barnett-founder-ceo.jpg'",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];
// Print the array of members to the console
console.log(teamMembers);

// Iterate through the elements in the array of members
for (let key in teamMembers) {
  // Print each member to the console
  console.log(teamMembers[key]);

  // Build an HTML markup string for each members
  let card = `
  <div class="col-4">
  <div class="card" style="width: 18rem;">
    <img src="${teamMembers[key].immagine}" class="card-img-top" alt="${teamMembers[key].name}">
    <div class="card-body">
      <h5 class="card-title">${teamMembers[key].name}</h5>
      <p class="card-text">${teamMembers[key].role}</p>
    </div>
  </div>
</div>`;

  row.innerHTML += card;
}
