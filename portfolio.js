
function reloadPage() {
  // The last "domLoading" Time //
  var currentDocumentTimestamp =
  new Date(performance.timing.domLoading).getTime();
  // Current Time //
  var now = Date.now();
  // Ten Seconds //
  var tenSec = 10 * 1000;
  // Plus Ten Seconds //
  var plusTenSec = currentDocumentTimestamp + tenSec;
  if (now > plusTenSec) {
  location.reload();
  } else {}
  }
  reloadPage();
const hamburger = document.getElementById('hamburger')
const navUL = document.getElementById('nav')


hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
})


let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};