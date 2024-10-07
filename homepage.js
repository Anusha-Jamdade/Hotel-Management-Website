// Hotel room availability
let hotels = {
    "branch1": { name: "Hotel A", availableRooms: 10, page: "hotelA.html" },
    "branch2": { name: "Hotel B", availableRooms: 10, page: "hotelB.html" },
    "branch3": { name: "Hotel C", availableRooms: 10, page: "hotelC.html" }
};

// Update availability message on room selection
function updateAvailability() {
    const branchSelect = document.getElementById('branch');
    const selectedBranch = branchSelect.value;
    const availabilityMessage = document.getElementById('availability-message');

    if (selectedBranch) {
        availabilityMessage.textContent = `Available Rooms for ${hotels[selectedBranch].name}: ${hotels[selectedBranch].availableRooms}`;
    } else {
        availabilityMessage.textContent = "";
    }
}

// Booking logic
function bookRoom(event) {
    event.preventDefault();  // Prevent form submission

    const branchSelect = document.getElementById('branch');
    const selectedBranch = branchSelect.value;
    const numRooms = parseInt(document.getElementById('rooms').value, 10);

    if (selectedBranch && hotels[selectedBranch].availableRooms >= numRooms) {
        // Reduce available rooms
        hotels[selectedBranch].availableRooms -= numRooms;

        // Redirect to the specific hotel page
        window.location.href = hotels[selectedBranch].page;
    } else {
        alert("Sorry, there are not enough rooms available.");
    }

    // Update room availability
    updateAvailability();
}

// Attach event listeners after the DOM has fully loaded
window.onload = function () {
    // Attach change event to the branch selector to update room availability
    document.getElementById('branch').addEventListener('change', updateAvailability);

    // Attach the booking function to the form submission
    document.querySelector('form').addEventListener('submit', bookRoom);
};
