//Popular Movies
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// Searched Movie
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box")

const getMovie = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data);
    showMovies(data.results);
}

const showMovies = (data) => {
    // console.log(data);
    // Every movie is shown using forEach
    movieBox.innerHTML = "";
    // Empty the movie data if not used then the movie will add in the last
    data.forEach(
        (item) => {
            // console.log(item);
            const box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML = `
                <img src="${IMGPATH+item.poster_path}" alt="NA">
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>Overview</h3>
                    <p>${item.overview}</p>
                </div>
                `;  
                movieBox.appendChild(box)
         }
    )
}

document.querySelector("#search").addEventListener("keyup", (e)=>{
// console.log(e.target.value);
    if(e.target.value != ""){
        getMovie(SEARCHAPI + e.target.value)
    } else {
        getMovie(APIURL)
    }
})

//init call
getMovie(APIURL)