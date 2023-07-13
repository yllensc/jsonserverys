import {deleteMovie, postMovie, patchMovie} from './crud.js'
import {formAddMovie,nameInput,genderInput,directorInput,imageInput,formEditMovie,nameInputEdit,genderInputEdit,directorInputEdit,btnGuardarCambios,modalEdit} from './selectors.js'

export function showMovies(movies) {
  movies.forEach((movie) => {
    const cardContainer = document.querySelector('.card__container');

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.cardId = movie.id;

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.alt = '...';
    img.src = movie.image; // Asignar la URL de la imagen
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = movie.name;
    cardBody.appendChild(title);

    const gender = document.createElement('p');
    gender.classList.add('card-text');
    gender.textContent = 'Género: ' + movie.gender;
    cardBody.appendChild(gender);

    const director = document.createElement('p');
    director.classList.add('card-text');
    director.textContent = 'Director: ' + movie.director;
    cardBody.appendChild(director);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Eliminar';
    cardBody.appendChild(deleteButton);

      const botonEdit = document.createElement("button");
      botonEdit.textContent = "Editar";
      botonEdit.addEventListener("click", function () {
        editMovie(movie);
      });
      cardBody.appendChild(botonEdit);
    // Agregar evento para eliminar la película al hacer clic en el botón "Eliminar"
    deleteButton.addEventListener('click', async () => {
      console.log(movie.id);
      deleteMovie(movie.id);
      card.remove();
    });

    cardContainer.appendChild(card);
  });
}

formAddMovie.addEventListener("submit", (event) => {
  event.preventDefault();
  saveMovie();
});

function saveMovie() {
  formAddMovie.style.display = "block";
  formEditMovie.style.display = "none";
  const movieId = Date.now();
  const name = nameInput.value;
  const gender = genderInput.value;
  const director = directorInput.value;
  const image = imageInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = reader.result;

    const movieData = {
      id: movieId,
      name: name,
      gender: gender,
      director: director,
      image: imageData
    };

    postMovie(movieData);
  };
  reader.readAsDataURL(image);
}

function editMovie(movie){
  console.log(movie);
  const modal = new bootstrap.Modal(modalEdit);
  modal.show();
  formAddMovie.style.display = "none";
  formEditMovie.style.display = "block";

  // Rellenar los campos del formulario con los datos del cliente
  nameInputEdit.value = movie.name;
  genderInputEdit.value = movie.clasificacion;
  directorInputEdit.value = movie.director;

  // Agregar un evento al botón de guardar cambios
 
  btnGuardarCambios.addEventListener("click", function (e) {
    e.preventDefault();
    // Obtener los nuevos valores editados del formulario
    const newName = nameInputEdit.value;
    const newDirector = directorInputEdit.value;
    const newGender = genderInputEdit.value;

    const movieData = {
      id: movie.id,
      name: newName,
      gender: newGender,
      director: newDirector,
      image: movie.image
    };

    patchMovie(movieData);

    
});
}