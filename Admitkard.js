const countryCodeSelect = document.getElementById('countryCode');
const mobileNumberInput = document.getElementById('mobileNumber');
const sendOTPButton = document.getElementById('sendOTP');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const digit1 = document.getElementById('digit1');
const digit2 = document.getElementById('digit2');
const digit3 = document.getElementById('digit3');
const digit4 = document.getElementById('digit4');
const verifyOTPButton = document.getElementById('verifyOTP');
const screen3 = document.getElementById('screen3');
const failureScreen = document.getElementById('failureScreen');
const snackbar = document.getElementById('snackbar');

// Initialize variables for generated OTP and entered OTP
let generatedOTP = "";

sendOTPButton.addEventListener('click', () => {
    const selectedCountryCode = countryCodeSelect.value;
    const mobileNumber = mobileNumberInput.value;

    // Validate mobile number format
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // Generate a new random OTP
    generatedOTP = generateOTP();

    // Display OTP in a popup
    alert(`OTP Sent to ${selectedCountryCode} ${mobileNumber}: ${generatedOTP}`);

    // Show Screen 2
    screen1.style.display = 'none';
    screen2.style.display = 'block';
});

verifyOTPButton.addEventListener('click', () => {
    const enteredOTP =
        digit1.value + digit2.value + digit3.value + digit4.value;

    // Verify the entered OTP against the generated OTP
    if (enteredOTP === generatedOTP) {
        // Successful OTP verification
        screen2.style.display = 'none';
        screen3.style.display = 'block';

        // Display the mobile number on the success screen
        const enteredMobileNumber = mobileNumberInput.value;

    } else {
        // Failure - Show the failure screen
        screen2.style.display = 'none';
        failureScreen.style.display = 'block';
    }
});

// Function to show a snackbar (on-screen notification)
function showSnackbar(message) {
    snackbar.textContent = message;
    snackbar.className = 'show';

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000); // Hide the snackbar after 3 seconds (adjust as needed)
}

// Function to generate a random OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}