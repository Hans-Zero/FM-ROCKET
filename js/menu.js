const barritas = document.querySelector('.barritas');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(barritas)

barritas.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != barritas  ){
            menu.classList.toggle("spread")
        }
})