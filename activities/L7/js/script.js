// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page
// 6. Add a "Remove Creature" feature


document.addEventListener("DOMContentLoaded", () => {
    const creatureForm = document.getElementById("addCreatureForm");
    const creatureSanctuary = document.getElementById("creatureSanctuary");
    let creatures = []; 

    // Function to render creatures
    function renderCreatures() {
        creatureSanctuary.innerHTML = ""; 
        creatures.forEach((creature, index) => {
            const creatureCard = document.createElement("div");
            creatureCard.classList.add("card", "mt-2");
            creatureCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${creature.name}</h5>
                    <p class="card-text"><strong>Type:</strong> ${creature.type}</p>
                    <p class="card-text"><strong>Habitat:</strong> ${creature.habitat}</p>
                    <button class="btn btn-danger" onclick="removeCreature(${index})">Remove</button>
                </div>
            `;
            creatureSanctuary.appendChild(creatureCard);
        });
    }

    // Handle form submission
    creatureForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("creatureName").value.trim();
        const type = document.getElementById("creatureType").value.trim();
        const habitat = document.getElementById("creatureHabitat").value.trim();

        if (name && type && habitat) {
            // Create creature object
            const newCreature = { name, type, habitat };
            creatures.push(newCreature); 

            renderCreatures(); 
            creatureForm.reset(); 
        }
    });

    // Remove creature function (attached to window to work with onclick)
    window.removeCreature = (index) => {
        creatures.splice(index, 1);
        renderCreatures(); 
    };
});
