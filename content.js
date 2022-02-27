console.log("Entró en correo");

// Función que junto con el CSS controla si se inserta un elemento a reconocer.
(function() {

    var count = 1,
      event = function(event) {
        if (event.animationName == 'nodeInserted') event.target.textContent = "Email trackeado con eTracker";
      }
  
    document.addEventListener('animationstart', event, false);
    document.addEventListener('MSAnimationStart', event, false);
    document.addEventListener('webkitAnimationStart', event, false);
  
  })();
  