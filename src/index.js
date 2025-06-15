const addGuest = document.getElementsByClassName("addGuest")[0];
const guestDetailsInput = document.getElementsByClassName("userDetails");
const guestList = document.getElementById("guestListBody");

addGuest.addEventListener("click", () => {
	const guestName = guestDetailsInput[2].value.trim();
	const guestClass = guestDetailsInput[3].value.trim();
	const addedGuests = document.querySelectorAll("#guestListBody tr");

	if (!guestName) {
		alert("Guest name cannot be empty!");
		return;
	}

	if (addedGuests.length >= 10) {
		alert("Cannot add more than 10 guests!");
		return;
	}

	// Create table row
	const tr = document.createElement("tr");
	tr.innerHTML = `
    <td>${guestName}</td>
    <td>${guestClass}</td>
    <td><button class="removeBtn">Remove</button></td>
  `;

	// Remove button
	tr.querySelector(".removeBtn").addEventListener("click", () => {
		guestList.removeChild(tr);
	});

	guestList.appendChild(tr);

	// Clear inputs
	guestDetailsInput[2].value = "";
	guestDetailsInput[3].value = "";
});