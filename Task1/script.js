const chocolates = [
    { name: "Dairy Milk", image: "./Images/DairyMilk.webp",  price: 150.00 },
    { name: "Kisses", image: "./Images/kisses.webp", price: 100.00},
    { name: "Fuse", image: "./Images/fuse.webp", price: 180.00},
    { name: "Five Star", image: "./Images/FiveStar.webp", price: 50.0},
    { name: "Gemas", image: "./Images/Gemas.webp", price: 150.0},
    { name: "Dairy Milk Celebriation", image: "./Images/DairyMilkCelebriation.webp", price: 200.00 },
    { name: "Perk", image: "./Images/Perk.webp", price: 120.0},
    { name: "Sapphire", image: "./Images/Sapphire.webp", price: 150.0},
    { name: "Nestle Munch", image: "./Images/NestleMunch.webp", price: 135.0},
    { name: "Gold Coin Milk", image: "./Images/GoldCoinMilk.webp", price: 350.0},
    { name: "Hershey Exotic Dark", image: "./Images/HersheyExoticDark.webp", price: 250.0},
    { name: "Ferrero Rocher", image: "./Images/FerreroRocher.webp", price: 140.0}
];

let selectedChocolates = [];

// Load selected chocolates from localStorage if available
if (localStorage.getItem("selectedChocolates")) {
    selectedChocolates = JSON.parse(localStorage.getItem("selectedChocolates"));
}

function generateChocolateOptions() {
    const chocolateOptionsDiv = document.getElementById("chocolate-options");

    chocolates.forEach((chocolate, index) => {
        const chocolateDiv = document.createElement("div");
        chocolateDiv.classList.add("chocolate");

        const h1 = document.createElement("h1");
        h1.textContent = chocolate.name;

        const img = document.createElement("img");
        img.src = chocolate.image;
        img.alt = chocolate.name;

        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart");

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => handleChocolateSelection(chocolate));

        cartDiv.appendChild(button);

        chocolateDiv.appendChild(h1);
        chocolateDiv.appendChild(img);
        chocolateDiv.appendChild(cartDiv);

        // Display name and price as a label
        const label = document.createElement("label");
        label.setAttribute("for", `quantity-${index}`);
        label.textContent = `${chocolate.name} - ₹${chocolate.price.toFixed(2)}`;

        chocolateDiv.appendChild(label);

        chocolateOptionsDiv.appendChild(chocolateDiv);
    });
}

function handleChocolateSelection(chocolate) {
    if (selectedChocolates.length >= 8) {
        alert("You can select up to 8 chocolates.");
        return;
    }

    const existingChocolate = selectedChocolates.find(choco => choco.name === chocolate.name);

    if (!existingChocolate) {
        selectedChocolates.push(chocolate);
    }

    // Save the updated selectedChocolates array to localStorage
    localStorage.setItem("selectedChocolates", JSON.stringify(selectedChocolates));

    displaySelectedChocolates();
    updateTotalPrice();
}

function clearLocalStorage() {
    localStorage.removeItem("selectedChocolates");
    selectedChocolates = [];
    displaySelectedChocolates();
    updateTotalPrice();
}

function displaySelectedChocolates() {
    const selectedChocolatesDiv = document.getElementById("selected-chocolates");
    selectedChocolatesDiv.innerHTML = "";

    selectedChocolates.forEach(chocolate => {
        const selectedChocolateDiv = document.createElement("div");
        selectedChocolateDiv.classList.add("selected-chocolate");

        const h1 = document.createElement("h1");
        h1.textContent = chocolate.name;

        const img = document.createElement("img");
        img.src = chocolate.image;
        img.alt = chocolate.name;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${chocolate.price.toFixed(2)}`;

        selectedChocolateDiv.appendChild(h1);
        selectedChocolateDiv.appendChild(img);
        selectedChocolateDiv.appendChild(price);

        selectedChocolatesDiv.appendChild(selectedChocolateDiv);
    });
}

const selectedChocolateStyle = document.createElement("style");
selectedChocolateStyle.innerHTML = `
    .selected-chocolate {
        width: 200px;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 30px;
    }
`;

document.head.appendChild(selectedChocolateStyle);



window.onload = () => {
    generateChocolateOptions();
    loadChocolatesFromLocalStorage();
};
function updateTotalPrice() {
    const totalPriceSpan = document.getElementById("total-price");
    const totalPrice = selectedChocolates.reduce((sum, chocolate) => sum + chocolate.price, 0);
    totalPriceSpan.textContent = `₹${totalPrice.toFixed(2)}`;
}

window.onload = generateChocolateOptions;



// Add an event listener to the "Clear Cart" button
const clearCartButton = document.querySelector("#cart-button-container button");

clearCartButton.addEventListener("click", () => {
    const confirmClear = confirm("Are you sure you want to clear your cart?");
    if (confirmClear) {
        clearLocalStorage();
        alert("Your cart has been cleared.");
    }
});



// Function to save selected chocolates to localStorage before the page is unloaded
function saveChocolatesToLocalStorage() {
    localStorage.setItem("selectedChocolates", JSON.stringify(selectedChocolates));
}

// Add an event listener to save the chocolates just before the page is unloaded
window.addEventListener("beforeunload", saveChocolatesToLocalStorage);

// Call this function when the page is loaded to populate the custom pack
function loadChocolatesFromLocalStorage() {
    if (localStorage.getItem("selectedChocolates")) {
        selectedChocolates = JSON.parse(localStorage.getItem("selectedChocolates"));
        displaySelectedChocolates();
        updateTotalPrice();
    }
}

window.onload = () => {
    generateChocolateOptions();
    loadChocolatesFromLocalStorage(); // Load chocolates from localStorage when the page loads
};


