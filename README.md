<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.screen {
    display: none;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

button {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: orange;
    color: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
}

#screen1 {
    display: block;
}

.otp-input {
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="text"] {
    width: 150px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input[type="text-1"] {
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#snackbar {
    display: none;
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
}

.Success-img {
    height: 50%;
    width: 50%;
}

.s-2Image {
    height: 30%;
    width: 30%;
}

.show {
    display: block;
}
  </style>
  <script>
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
  </script>
  
  <title>Mobile Number Verification</title>
</head>

<body>
    <div class="container">
        <div class="screen" id="screen1">
            <h1><span style="color:blue">Admit</span>Kard</h1>
            <p>Welcome Back</p>
            <P>Please sign in to your account</P>
            <select id="countryCode">
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (IND)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+1">+81 (China)</option>
                <!-- Add more country codes as needed -->
            </select>
            <input type="text" id="mobileNumber" placeholder="Enter Mobile Number">
            <p>we will send you a one time SMS message</p>
            <button id="sendOTP">Sign in with OTP</button>
        </div>
        <div class="screen" id="screen2">
            <img src="https://media.istockphoto.com/id/1369134714/vector/shield-user-with-checkmark.jpg?s=612x612&w=0&k=20&c=w9G45udXfBhRMYOLinHIXPZXbU1WSu4qtR11qkK8JIQ=" class="s-2Image" />
            <h3>Please Veify Mobile Number</h3>
            <p>An OTP is sent to Mobile Number</p>
            <div class="otp-input">
                <input type="text-1" id="digit1" maxlength="1">
                <input type="text-1" id="digit2" maxlength="1">
                <input type="text-1" id="digit3" maxlength="1">
                <input type="text-1" id="digit4" maxlength="1">
            </div>
            <p>Didn't recived the code?<span style="color:orange"> Resend</span></p>
            <button id="verifyOTP">Verify</button>
        </div>
        <div class="screen" id="screen3">
            <img src="https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png" class="Success-img">
            <h1>Welcome to AdmitKard</h1>
            <p>In order to provide a custom experince</p>
            <h6>We need to ask you few questions</h6>
            <button>Get stared</button>
            <p>*This will only take 5 min</p>
        </div>
        <div class="screen" id="failureScreen">
            <h1>Failure Screen</h1>
            <p>OTP Verification Failed. Please try again.</p>
        </div>
    </div>
    <div id="snackbar"></div>
    <script src="script.js"></script>
</body>

</html>
