const botonMenu = document.getElementById("botonMenu");
const menu = document.getElementById("navigation-menu");
let estadoBoton = false;

$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
  });

  botonMenu.addEventListener("click", function() {
    if (estadoBoton) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
      menu.style.flexDirection = "column";
      menu.style.justifyContent = "center";
      menu.style.alignItems = "center";
    }

    // Cambiar el estado del botón
    estadoBoton = !estadoBoton;
});
