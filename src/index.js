let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(toyData => {
      // addToyInfo(toyData[0])
      toyData.forEach(whatever => {
        addToyInfo(whatever)
      });
    })
});

function addToyInfo(toy) {
  let toyCollection = document.getElementById("toy-collection")
  let toyName = document.createElement('h2')
  toyName.textContent = toy.name
  toyCollection.append(toyName)

  let toyImg = document.createElement('img')
  toyImg.src = toy.image
  toyCollection.append(toyImg)
}
