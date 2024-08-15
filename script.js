// Selección de elementos del DOM
const categories = document.querySelectorAll('.category');
const changeBackgroundButton = document.getElementById('changeBackground');

// Función para alternar la visibilidad del contenido de una categoría
categories.forEach(function(category) {
    category.addEventListener('click', function() {
        const contentId = 'content' + this.id.slice(-1);
        const contentElement = document.getElementById(contentId);
        contentElement.style.display = contentElement.style.display === 'none' || contentElement.style.display === '' ? 'block' : 'none';
    });
});

// Función para cambiar el color de fondo
changeBackgroundButton.addEventListener('click', function() {
    document.body.classList.toggle('new-background');
});
