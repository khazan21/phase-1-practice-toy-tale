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

  const newToy = {
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  };


});

function addToyInfo(toy) {
  let toyCollection = document.getElementById("toy-collection")

  let card = document.createElement('div');
  //card.classList.add("card");
  card.className = 'card';
  toyCollection.append(card);

  let toyName = document.createElement('h2')
  toyName.textContent = toy.name
  card.append(toyName);

  let toyImg = document.createElement('img')
  toyImg.src = toy.image;
  toyImg.classList.add('toy-avatar');
  card.append(toyImg);

  //create a paragraph with how many likes
  let likesCount = document.createElement('p');
  likesCount.id = 'likes-count'
  likesCount.textContent = toy.likes + ' likes';
  card.append(likesCount);

  //create a button for the likes
  let likeBtn = document.createElement('button');
  likeBtn.classList.add('like-btn');
  likeBtn.id = '[toy_id]';
  likeBtn.textContent = "Like";
  card.append(likeBtn);
  likeMonitor();

  let i = toy.likes;

  function likeMonitor() {
    likeBtn.addEventListener('click', () => {
      let likes = document.getElementById('likes-count').value 
      likes = ++i;
      likesCount.textContent = likes + ' likes';
    })
  }
}

const newToy = {
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
};

console.log(newToy);

async function addNewToy(url = 'http://localhost:3000/toys', data = newToy) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },

    body: JSON.stringify(data)
  });
  return console.log(response.json());

}

// addNewToy();

