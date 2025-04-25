let add = document.getElementById("Agregar");
let namePokemon = document.getElementById("nombrePokemon");
let img = document.getElementById("imagen");


add.addEventListener('click', (e) => {
    e.preventDefault()
    const text = nombrePokemon.value.trim()
    const img1 = img.value
    if (!text || !img1) {
        alert('NO se puede,tienes que agregar algo');
        return
    }
    const card = document.createElement('div')
    const nameP = document.createElement('h2')
    const url = document.createElement('img')
    const _delete = document.createElement('button')
    _delete.textContent = 'x'
    _delete.classList = 'delete'
    url.src = img1
    nameP.textContent = text
    card.appendChild(url)
    card.appendChild(nameP)
    card.appendChild(_delete)
    card.classList = "card"
    
    card.addEventListener('dblclick', () => {
        let newUrl = prompt("Ingresa otra URL de la imagen del Pokémon");
        let imagen = card.querySelector('img');
        if (newUrl) {
            imagen.src = newUrl;
        }
    });
    let close_button = card.querySelector(".delete");
    close_button.addEventListener("click", () => {
    card.remove(); 

});
    document.getElementById('cards').appendChild(card)
})