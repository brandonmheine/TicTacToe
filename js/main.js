const squares = document.querySelectorAll('.square');
squares.forEach(addEventListener('click', change));
let turn = 'X';


function change(e) {
    // e.target.classList.toggle('red-background');
    e.target.textContent = 'X';
}


function turns() {
    return
}
