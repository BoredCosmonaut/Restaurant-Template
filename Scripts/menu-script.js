//Script for the header

document.querySelector("#home").addEventListener("click", () => {
    document.location= "home.html"
})

//Redirects the page to about us page
document.querySelector("#about").addEventListener("click", () => {
    document.location = "about.html"
})

document.querySelector("#menu").addEventListener("click", () => {
    document.location = "menu-page.html"
})

document.querySelector("#res").addEventListener("click", () => {
    document.location = "reservation.html"
})

//Opens the form to add a new category
document.querySelector("#add-new-category").addEventListener("click", function() {
    window.focus();
    window.scrollTo(0,0)
    document.getElementById("category-form").style.display = "flex"; 
})

//Adds a new category to the menu
document.querySelector("#category-add").addEventListener("click", (e) => {
    e.preventDefault();
    const categoryContainer = document.createElement("div")
    categoryContainer.classList.add("item-container")

    const categoryInfo = document.createElement("div")
    categoryInfo.classList.add("item-category-info")
    
    const categoryTitle = document.createElement("h2")
    categoryTitle.classList.add("item-category-title")

    const categoryText = document.createElement("p")
    categoryText.classList.add("item-category-title-text")

    const plusImage = document.createElement("img");
    plusImage.src = "Images/Menu/plus icon.svg";
    plusImage.classList.add("add-new-item");

    categoryTitle.innerText = document.getElementById("category-name").value
    categoryText.innerText = document.getElementById("category-desc").value

    categoryInfo.append(categoryTitle)
    categoryInfo.append(categoryText)
    categoryContainer.append(categoryInfo)
    categoryContainer.append(plusImage)

    const parent = document.getElementById("add").parentNode
    parent.insertBefore(categoryContainer, document.getElementById("add"))

    document.getElementById("category-form").style.display = "none"; 
})

//Opens the menu for a new menu item 

// Select all plus symbols within category items
const plusSymbols = document.querySelectorAll('.category-items .add-new-item-symbol');

// Event listener for showing forms
for (let symbol of plusSymbols) {
    symbol.addEventListener('click', function () {
        //Makes the form before  the clicked plus sign appear
        const form = symbol.parentNode.querySelector('#new-category-item');
        form.style.display = 'flex';
    });
}

// Select all "Add" buttons within category items
const addButtons = document.querySelectorAll('#add-new-item-button');


//Adds a new menu item
for(let button of addButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const clickedButton = e.currentTarget;
        const parentContainer = clickedButton.closest(".category-items");
        const activeForm = clickedButton.closest(".menu-item-form-new");

        const newName = activeForm.querySelector(".new-menu-item-name").value;
        const newPrice = activeForm.querySelector(".new-menu-item-price").value;
        const newDescription = activeForm.querySelector(".new-menu-item-description").value;
        const newImage = activeForm.querySelector(".new-menu-item-image").value;

        // Container for new item
        const newItemContainer = document.createElement("div");
        newItemContainer.classList.add("category-item");

        // Info container of the new item
        const newItemText = document.createElement("div");
        newItemText.classList.add("item-text");

        // Name element of the new item
        const newItemName = document.createElement("h3");
        newItemName.classList.add("item-name");
        newItemName.innerText = newName;
        newItemText.append(newItemName);

        // Price of the new item
        const newItemPrice = document.createElement("p");
        newItemPrice.classList.add("item-price");
        newItemPrice.innerText = `$ ${newPrice}`;
        newItemText.append(newItemPrice);

        // Description of the new item
        const newItemDesc = document.createElement("p");
        newItemDesc.classList.add("item-description");
        newItemDesc.innerText = newDescription;
        newItemText.append(newItemDesc);

        newItemContainer.append(newItemText);

        // Container for the new item image
        const newItemImageContainer = document.createElement("div");
        newItemImageContainer.classList.add("item-image-container");

        // Image element for the new item
        const newItemImage = document.createElement("img");
        newItemImage.classList.add("item-image");
        newItemImage.src = newImage;
        newItemImageContainer.append(newItemImage);

        // Appends the image to the new item container
        newItemContainer.append(newItemImageContainer);

        // Insert the new item before the form's parent
        parentContainer.insertBefore(newItemContainer, activeForm.parentNode);

        // Hide the form by setting its display property to 'none'
        for(let form of document.querySelectorAll("#new-category-item")) {
            form.style.display = "none"
        }

})
}
