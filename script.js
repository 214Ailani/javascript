// Prompt visitor for their name
let visitorName = prompt("Please enter your name:");

// If user enters a name, personalize page
if (visitorName !== null && visitorName !== "") {
    alert("Welcome to my website, " + visitorName + "!");
    document.getElementById("user-name").textContent = visitorName;
} else {
    alert("Welcome to my website, Guest!");
}