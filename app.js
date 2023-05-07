const colors = ["green", "red", "blue", "purple", 'yellow'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    getRandomNumber = rando()
    document.body.style.backgroundColor = colors[getRandomNumber]
    color.textContent = colors[getRandomNumber]
    color.style.color = color.textContent
 
})

const rando = () => {
    return  Math.floor(Math.random() * colors.length)
   
}