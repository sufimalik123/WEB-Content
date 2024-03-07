function showDetails() {
    // Dummy array for demonstration
    const itemsArray = ["Item 1", "Item 2", "Item 3"];
    const detailsUl = document.getElementById("detailsUl");

    // Clear existing list items
    detailsUl.innerHTML = "";




    for (var i = 0; i < itemsArray.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = itemsArray[i];
        detailsUl.appendChild(listItem);
    }
    // Show the details section
    document.getElementById("detailsList").style.display = "flex";
}

function closeDetails() {
    // Hide the details section
    document.getElementById("detailsList").style.display = "none";
}