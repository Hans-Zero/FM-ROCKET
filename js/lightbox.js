const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const barritas1 = document.querySelector('.barritas');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{ //e.target es el elemento al que se le hizo click, lo guarda en la variable e
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show') //tootle es agrewgar la clase, en este caso la clase show
        imagenesLight.classList.toggle('showImage')
        barritas1.style.opacity = '1'

    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src=imagen
    contenedorLight.classList.toggle('show') //tootle es agrewgar la clase, en este caso la clase show
    imagenesLight.classList.toggle('showImage') 
    barritas1.style.opacity = '0'
}