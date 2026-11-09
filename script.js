document.addEventListener("DOMContentLoaded", () => {
    const cardHeaders = document.querySelectorAll(".card-header");

    cardHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const categoriaId = header.getAttribute("data-categoria");
            const desplegable = document.getElementById(categoriaId);
            
            const estaAbierto = desplegable.classList.contains("active");

            document.querySelectorAll(".desplegable-dificultad").forEach(item => {
                item.classList.remove("active");
            });

            if (!estaAbierto) {
                desplegable.classList.add("active");
            }
        });
    });
});