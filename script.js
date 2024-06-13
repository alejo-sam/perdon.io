// Array de preguntas para el botón "No"
const noQuestions = [
    "¿En serio?",
    "¿De verdad?",
    "¿Estás segura?",
    "¿Estás completamente segura?",
    "¿Seguro al 100%?",
    "¿Sin ninguna duda?",
    "¿No hay posibilidad de error?"
];

// Función para cambiar la pregunta del botón "No"
function changeNoQuestion() {
    const randomIndex = Math.floor(Math.random() * noQuestions.length);
    document.getElementById('noText').textContent = noQuestions[randomIndex];
}

document.getElementById('noButton').addEventListener('click', function() {
    var noOptions = document.getElementById('noOptions');
    noOptions.classList.toggle('hidden');
    if (!noOptions.classList.contains('hidden')) {
        changeNoQuestion(); // Cambia la pregunta del botón "No" si se muestra
        document.getElementById('siButton').classList.add('move'); // Añade la clase para animar el botón "Sí"
    } else {
        document.getElementById('siButton').classList.remove('move'); // Remueve la clase cuando se ocultan las opciones
    }
});
