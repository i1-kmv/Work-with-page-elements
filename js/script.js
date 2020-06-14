'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img');
    const genre = document.querySelector('.promo__genre');
    const poster = document.querySelector('.promo__bg');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector(".adding__input");
    const checkbox = addForm.querySelector('[type = "checkbox"]');
    
    const deleteAdv = (arg) => {
        arg.forEach(item=> {
            item.remove();
        }); 
    };
  
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if (favorite) {
                console.log('Любимый фильм');
            }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        }

        createMovieList(movieDB.movies, movieList);

        event.target.reset();
    });
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += ` 
                <li class="promo__interactive-item">${i + 1}. ${film}
                      <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

  
    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
});