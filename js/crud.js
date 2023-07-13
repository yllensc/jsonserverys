import  {showMovies, dataPOST} from "./functions.js";

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});

//metodo GET
export async function getMovies(){
  try {
    let response = await fetch(`${URL}/peliculas`);
    let movies = await response.json; 
    showMovies(movies);
  } catch (error) {
    console.log(error);
  }   
}
getMovies();

//Metodo POST
export async function postPersonas(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }
    try {
      let response = await fetch(`${URL}/peliculas`,config);
      let moviesPost = await response.json;
    } catch (error) {

    }

}


//
//export async function deletePersonas(tr,id){
//
//    let data = Object.fromEntries(new FormData(tr.target));
//
//    let config = {
//        method: 'DELETE',
//        headers: headers,
//        body: JSON.stringify(data)
//    };
//
//    let del = await(await fetch(`${URL}/persona/${id}`,config)).json();
//}
//
//export async function ActualizarPersona(data,id) {
//
//    let config = {
//        method: 'PUT',
//        headers: headers,
//        body: JSON.stringify(data)
//    }
//
//    let act = await (await fetch(`${URL}/persona/${id}`,config)).json();
//}