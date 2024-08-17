// Permite que los elementos se puedan soltar en las canastas
function allowDrop(event) {
    event.preventDefault();
}

// Inicia el arrastre del elemento
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Maneja el evento de soltar el elemento en una canasta
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetBin = event.target.closest('.bin');

    if (targetBin && targetBin.id === draggedElement.dataset.type + '-bin') {
        alert("¡Correcto! El " + draggedElement.dataset.type + " está en el contenedor adecuado.");
        targetBin.appendChild(draggedElement);
    } else {
        alert("Incorrecto. El " + draggedElement.dataset.type + " no está en el contenedor adecuado.");
    }
}
