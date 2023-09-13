# UNBUNDL
This project is a web application that allows users to build their custom chocolate packs. It includes the functionality to select chocolates from a list, display the selected chocolates, calculate the total price, and clear the cart. The project utilizes HTML, CSS, and JavaScript, with a focus on using localStorage for data persistence and sessionStorage to temporarily store data.

HTML Structure:

The project begins with standard HTML structure, including the declaration, <head>, and <body> sections.
The title and a reference to an external CSS file (styles.css) are included in the <head> section.
The body of the page is divided into several sections:
A header with a title and background color.
A section to display selected chocolates and the total price.
A section for displaying available chocolate options.
JavaScript code is included at the end of the body using the <script> tag.
CSS Styling:

The CSS in styles.css defines the layout and styling of the web page, including the appearance of chocolates and buttons.
It also contains responsive styles for different screen sizes, adjusting the layout of chocolates and selected chocolates for smaller screens.
JavaScript Functionality:

An array chocolates is defined to store information about available chocolates, including their name, image, and price.
An empty array selectedChocolates is initialized to store the chocolates selected by the user.
LocalStorage Usage:

When the page loads, the script checks if there are previously selected chocolates stored in localStorage. If yes, it loads them into the selectedChocolates array.
A function called saveChocolatesToLocalStorage is defined to save the selectedChocolates array to localStorage before the page is unloaded. This ensures that the selected chocolates persist even if the user refreshes the page or returns later.
The loadChocolatesFromLocalStorage function is called to load chocolates from localStorage when the page loads.
Dynamic Chocolate Generation:

The generateChocolateOptions function dynamically generates HTML elements to display available chocolates. It loops through the chocolates array and creates a div for each chocolate with its name, image, and an "Add to Cart" button.
When the "Add to Cart" button is clicked for a chocolate, the handleChocolateSelection function is called. It adds the selected chocolate to the selectedChocolates array and updates the displayed selected chocolates.
If the user tries to add more than 8 chocolates, they receive an alert indicating the maximum selection limit.
Displaying Selected Chocolates:

The displaySelectedChocolates function populates the "selected-chocolates" section with the chocolates the user has selected. It creates a div for each selected chocolate, displaying its name, image, and price.
Clearing the Cart:

The "Clear Cart" button allows the user to clear their selection. When clicked, it prompts the user for confirmation, and if confirmed, it clears the localStorage and updates the display to show an empty cart.
Updating Total Price:

The updateTotalPrice function calculates and displays the total price of the selected chocolates. It iterates through the selectedChocolates array, summing up the prices of all selected chocolates, and updates the displayed total price.
Responsive Design:

The CSS includes media queries to adjust the layout for smaller screens, ensuring that the page remains user-friendly on various devices.
SessionStorage (not used in this code snippet):

While this code primarily uses localStorage for long-term data persistence, sessionStorage could be used for temporary storage of data that should only be available for the duration of a session (until the browser tab is closed). In this project, localStorage is sufficient because it allows the user to return and maintain their selected chocolates even after closing and reopening the browser.
In summary, this project provides a user-friendly interface for customizing chocolate packs, utilizes localStorage to persist user selections across sessions, and includes features for adding, clearing, and displaying selected chocolates. Additionally, it adapts to different screen sizes to enhance the user experience.





