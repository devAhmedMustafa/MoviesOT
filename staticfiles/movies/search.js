import {containerBox, movie_box} from './components.js';

const contentBox = document.querySelector(".content");
const searchBar = document.querySelector("#search");

searchBar.addEventListener('change', ()=>{

    let search_query = searchBar.value;

    $.ajax({

        url: "/movie/search/",
        type: "GET",
        data: { 'query': search_query},
        success: function(data){
            contentBox.innerHTML = containerBox("Search");
            data.forEach(movie => {
                document.querySelector('.cont_box').innerHTML += movie_box(movie);
            })


        }

    })

});