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
    //Scrools the screen to the top
    window.focus();
    window.scrollTo(0,0)
    //Shows the category form
    document.getElementById("category-form").style.display = "flex"; 
})

//Adds a new category to the menu (Currently it doesn't work correctly :( )
document.querySelector("#category-add").addEventListener("click", (e) => {
    e.preventDefault();

    //Creates a new item container
    const categoryContainer = document.createElement("div")
    categoryContainer.classList.add("item-container")

    //Creates a new info container
    const categoryInfo = document.createElement("div")
    categoryInfo.classList.add("item-category-info")
    
    //Creates a new title
    const categoryTitle = document.createElement("h2")
    categoryTitle.classList.add("item-category-title")

    //Creates a new desc
    const categoryText = document.createElement("p")
    categoryText.classList.add("item-category-title-text")

    //Creates the new plus ımage
    const plusImage = document.createElement("img");
    plusImage.src = "Images/Menu/plus icon.svg";
    plusImage.classList.add("add-new-item");

    //Creates a new ıtem form container
    const itemFormContainer = document.createElement("div")
    itemFormContainer.classList.add("category-item")
    itemFormContainer.classList.add("newForm")

    //Creates a new item form
    const itemForm = document.createElement("form")
    itemForm.classList.add("menu-item-form-new")

    //Creates a new name input
    const nameInput = document.createElement("input")
    nameInput.classList.add("new-menu-item-name")
    itemForm.append(nameInput)

    //Creates a new price input
    const priceInput = document.createElement("input")
    priceInput.classList.add("new-menu-item-price")
    itemForm.append(priceInput)

    //Creates a new desc input
    const descInput = document.createElement("input")
    descInput.classList.add("new-menu-item-description")
    itemForm.append(descInput)

    //Creates a new image input
    const imageInput = document.createElement("input")
    imageInput.classList.add("new-menu-item-image")
    itemForm.append(imageInput)

    //Creates a new button
    const button = document.createElement("button")
    button.classList.add("add-new-item-button-class")
    itemForm.append(button)

    //Completes input card
    itemFormContainer.append(itemForm)

    //Takes the new category name and desc
    categoryTitle.innerText = document.getElementById("category-name").value
    categoryText.innerText = document.getElementById("category-desc").value

    categoryInfo.append(categoryTitle)
    categoryInfo.append(categoryText)
    categoryContainer.append(categoryInfo)
    categoryContainer.append(plusImage)

    const parentOfPlus = plusImage.closest(".item-container")

    parentOfPlus.insertBefore(itemFormContainer, plusImage)

    //Gets the parent off add button
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

    const formNames = document.querySelectorAll(".new-menu-item-name");
    const formPrices = document.querySelectorAll(".new-menu-item-price")
    const formDescs = document.querySelectorAll(".new-menu-item-description")
    const formUrls = document.querySelectorAll(".new-menu-item-image")

    const clickedButton = e.currentTarget;
    const parentContainer = button.closest(".category-items")

    //Container for new item
    const newItemContainer = document.createElement("div")
    newItemContainer.classList.add("category-item")

    //Info container of the new item
    const newItemText = document.createElement("div")
    newItemText.classList.add("item-text")

    //Name element of the new item
    const newItemName = document.createElement("h3")
    newItemName.classList.add("item-name")
    for (let name of formNames) {
        newItemName.innerText = name.value
    }
    
    newItemText.append(newItemName);

    //Price of the new item
    const newItemPrice = document.createElement("p")
    newItemPrice.classList.add("item-price")
    for(let price of formPrices) {
        newItemPrice.innerText = `$ ${price.value}`
    }
    newItemText.append(newItemPrice);

    //Description of the new item
    const newItemDesc = document.createElement("p")
    newItemDesc.classList.add("item-description")
    for(let desc of formDescs) {
            newItemDesc.innerText = desc.value
    }
    newItemText.append(newItemDesc);

    //Appends the text part to the container
    newItemContainer.append(newItemText);

    //Container for the new item image
    const newItemImageContainer = document.createElement("div")
    newItemImageContainer.classList.add("item-image-container")

    //Image element for the new item
    const newItemImage = document.createElement("img")
    newItemImage.classList.add("item-image")
    for(let url of formUrls) {
            newItemImage.src = url.value
    }
    newItemImageContainer.append(newItemImage)

    //Appends the image to the new item container
    newItemContainer.append(newItemImageContainer);

    //Appends the whole card to the current category
    parentContainer.insertBefore(newItemContainer, button.closest(".category-item"))

    //Removes the form again
    const form = button.closest(".category-item").style.display = "none"

})
}