const select = document.getElementById("provincia");

const url = "https://gist.githubusercontent.com/Anthony0912/903cf82739e8662f3e757753921bbcf3/raw/eb8298c4c77032c74c4686678c2beea191b1d30a/locations.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const provincias = data.provincias || [];  // Obtener la lista de provincias

    provincias.forEach(provincia => {
      const nombre = provincia.nombre || "Nombre no disponible";
      
      var opcion = document.createElement("option");

      opcion.value = nombre;
      opcion.textContent = nombre;

      select.appendChild(opcion);


    });
  });