console.log("Entró en correo");

// Función que junto con el CSS controla si se inserta un elemento a reconocer.
(function() {

    var count = 1,
      event = function(event) {
        if (event.animationName == 'nodeInserted') {
          console.log("Pixel added");
          event.target.innerHTML = "<img src='https://picsum.photos/10/10'>";
        }
      }
  
    document.addEventListener('animationstart', event, false);
    document.addEventListener('MSAnimationStart', event, false);
    document.addEventListener('webkitAnimationStart', event, false);
  
  })();

  // servidor?id=1231?h=12193712 -> imagen.png?dummy=13213
  // servidor?id=1231?h=12193712 -> imagen.png?dummy=34124
  