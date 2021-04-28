const checkbox = document.getElementById('checkbox');
const darkModeElements = document.getElementsByClassName('dm');

checkbox.addEventListener('change',()=>{
   document.body.classList.toggle('dark'); 
   Array.from(darkModeElements).forEach((elem) => {
      elem.classList.toggle('dark');
   });
});


function onClickJoin(){
   alert('Modo de Prueba Causita');
}