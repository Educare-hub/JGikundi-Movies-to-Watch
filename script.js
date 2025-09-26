document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    // delete movies
    list.addEventListener("click", function (e) {
    const deleteButton = e.target.closest('.delete');
    if (deleteButton) {
        const li = deleteButton.parentElement;
        li.remove();
    }
});

    //add movie
    const addMovieForm = forms['add-movie']
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();


        // create elements
        const value = addMovieForm.querySelector('input[type="text"]').value;
        console.log("value", value)

        // check if the input is empty
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }


        const li = document.createElement('li');
        const movieName = document.createElement('span')
        const deleteBtn = document.createElement('span')
        const editBtn = document.createElement('button')


        // adding content
        movieName.textContent = value;
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';


        // adding classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');
        editBtn.classList.add('edit-btn');



        // append to DOM
        li.appendChild(movieName);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        // list.addEventListener("click", function (e) {
        list.appendChild(li);
        // reset the form
        addMovieForm.reset();
    

    })

    //    const editBtn = document.createElement('button');
    // editBtn.textContent = 'Edit';
    // editBtn.classList.add('edit-btn');


   // EditMovieForm.
   // edit movies
list.addEventListener("click", function(e) {
    const editButton = e.target.closest('.edit-btn');
    if (editButton) {
        const li = editButton.parentElement; 
        const movieName = li.querySelector('.name'); 
        const newName = prompt("Edit movie name:", movieName.textContent); 
        if (newName) { 
            movieName.textContent = newName;
        }
    }
});
});