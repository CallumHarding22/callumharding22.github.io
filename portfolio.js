
const hamburger = document.getElementById('hamburger')
const navUL = document.getElementById('nav')


hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
})


let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};