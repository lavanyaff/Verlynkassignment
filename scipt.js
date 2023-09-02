// ... (previous JavaScript code) ...

// Object to store bookings
const bookings = {};

// Function to book a room
function bookRoom(event) {
    event.preventDefault();
    const room = document.getElementById("room").value;
    const timeSlot = document.getElementById("time-slot").value;

    // Check if the room and time slot are available
    if (!bookings[room] || !bookings[room].includes(timeSlot)) {
        // Sample code to add the booking to the user's list (you can replace this with your own logic)
        const userBookingList = document.getElementById("user-booking-list");
        const bookingItem = document.createElement("li");
        bookingItem.textContent = `${room} - ${timeSlot}`;
        userBookingList.appendChild(bookingItem);

        // Sample code to update available rooms and time slots (you can replace this with your own logic)
        const roomIndex = availableRooms.indexOf(room);
        if (roomIndex !== -1) {
            availableRooms.splice(roomIndex, 1);
        }

        const timeSlotIndex = timeSlots.indexOf(timeSlot);
        if (timeSlotIndex !== -1) {
            timeSlots.splice(timeSlotIndex, 1);
        }

        // Sample code to update room and time slot dropdowns (you can replace this with your own logic)
        document.getElementById("room").value = "";
        document.getElementById("time-slot").value = "";

        // Sample code to re-populate room and time slot dropdowns (you can replace this with your own logic)
        populateRoomOptions();
        populateTimeSlotOptions();

        // Update the bookings object to mark the time slot as unavailable for the room
        if (!bookings[room]) {
            bookings[room] = [];
        }
        bookings[room].push(timeSlot);
    } else {
        alert("This room is already booked for the selected time slot.");
    }
}

// Call functions to populate room and time slot options
populateRoomOptions();
populateTimeSlotOptions();

// Attach the bookRoom function to the form submission
const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", bookRoom);
