function Receta1() {
        
    Swal.fire({
        imageUrl: 'img/Receta1.jpg',
        imageWidth: 1200,
        imageAlt: ''
    })
    
}
function Receta2() {
        
  Swal.fire({
      imageUrl: 'img/Receta2.jpg',
      imageWidth: 1200,
      imageAlt: ''
  })
  
}
function Receta3() {
        
  Swal.fire({
      imageUrl: 'img/Receta3.jpg',
      imageWidth: 1200,
      imageAlt: ''
  })
  
}
function Favoritos() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Guardado en favoritos',
        showConfirmButton: false,
        timer: 1500
      })
    
}

function Eliminar() {

    Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Eliminado!',
            'El platillo ha sido eliminado.',
            'success'
          )
        }
      })
    
}
