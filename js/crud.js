import  {showMovies} from "./functions.js";

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});

export function getMovies(){
     fetch(`${URL}/peliculas`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        showMovies(json);
      })
      .catch((e) => console.log(e));
}

getMovies();


//export async function postPersonas(data){
//    let config = {
//        method: 'POST',
//        headers: headers,
//        body: JSON.stringify(data)
//    }
//
//    let personas = await (await fetch(`${URL}/persona`,config)).json();
//
//}
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