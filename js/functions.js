export function showMovies(movies) {
  movies.forEach((movie) => {
    const cardContainer = document.querySelector(".card__container");

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.cardId = movie.id;

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.alt = "...";
    img.src = movie.image; // Asignar la URL de la imagen
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = movie.name;
    cardBody.appendChild(title);

    const gender = document.createElement("p");
    gender.classList.add("card-text");
    gender.textContent = "Género: " + movie.gender;
    cardBody.appendChild(gender);

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.textContent = "Duración: " + movie.time;
    cardBody.appendChild(duration);

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.textContent = "Director: " + movie.director;
    cardBody.appendChild(director);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Eliminar";
    cardBody.appendChild(deleteButton);

    // Agregar evento para eliminar la película al hacer clic en el botón "Eliminar"
    deleteButton.addEventListener("click", () => {
      deleteMovie(movie.id);
      card.remove();
    });

    cardContainer.appendChild(card);
  });
}

function addMovie(){
  
}
