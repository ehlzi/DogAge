document.addEventListener("DOMContentLoaded", function () {
    // Function to display the conversion results
    function displayResults() {

        // Declared Variables, get inpt values and parse them as floats
        let myName = document.getElementById("name").value;
        let myAge = parseFloat(document.getElementById("human-age").value);
        let myDogAge = parseFloat(document.getElementById("dog-age").value);
        let myAgeInDogYears;
        let myDogAgeInHumanYears;

        // Check if all inputs are NaN (invalid)
        if (isNaN(myAge) && isNaN(myDogAge) && myName === "") {
            document.getElementById("result").innerHTML = "<p>Please insert name and age into field.</p>";
            return;
        }

        // Perform conversions based on which input is provided
        if (!isNaN(myAge)) {

            //Inserts the age into the function and stores the result in myAgeInDogYears
            myAgeInDogYears = humanToDogYears(myAge);

        } else if (!isNaN(myDogAge)) {

            //Inserts the age into the function and stores the result in myDogAgeInHumanYears
            myDogAgeInHumanYears = dogToHumanYears(myDogAge);

        } else if (isNaN(myAgeInDogYears) && isNaN(myDogAgeInHumanYears)) {

            // If input is invalid, display an error message
            document.getElementById("result").innerHTML = "<p>Please insert an age.</p>";
            return;

        }

        // Round the results to the nearest integer
        if (myAgeInDogYears !== null) {

            myAgeInDogYears = Math.floor(myAgeInDogYears);

        }

        if (myDogAgeInHumanYears !== null) {

            myDogAgeInHumanYears = Math.floor(myDogAgeInHumanYears);

        }

        // Display the results in the result div
        const resultDiv = document.getElementById("result");

        if (!isNaN(myAgeInDogYears) && isNaN(myDogAgeInHumanYears) && myName !== "") {

            resultDiv.innerHTML = `<p>${myName}, you are ${myAgeInDogYears} years old in dog years.</p>`;

        } else if (isNaN(myAgeInDogYears) && !isNaN(myDogAgeInHumanYears)) {

            resultDiv.innerHTML = `<p>${myName}, your dog is ${myDogAgeInHumanYears} years old in human years.</p>`;

        } else {

            resultDiv.innerHTML = "<p>Please insert a name.</p>";

        }
    }

    //Function to convert human years to dog years
    function humanToDogYears(humanAge) {

        let dogAge = null;

        if (humanAge <= 2) {

            dogAge = humanAge * 10.5;

        } else {

            dogAge = 2 * 10.5 + (humanAge - 2) * 4;

        }

        return dogAge;
    }

    //Function to convert dog years to human years
    function dogToHumanYears(dogAge) {

        let humanAge = null;

        if (dogAge <= 21) {

            humanAge = dogAge / 10.5;

        } else {

            humanAge = 2 + (dogAge - 21) / 4;

        }

        return humanAge;
    }

    // Function to add Enter key listener to input fields
    function addEnterKeyListener(inputId) {
        document.getElementById(inputId).addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                displayResults();
            }
        });
    }

    // Add Enter key listeners to all input fields
    addEnterKeyListener("name");
    addEnterKeyListener("human-age");
    addEnterKeyListener("dog-age");

    // Add click event listeners to the container for convert and clear buttons
    document.querySelector(".container").addEventListener("click", function (event) {

        if (event.target.id === "convert-btn") {

            // Call displayResults function when convert button is clicked
            displayResults();

        } else if (event.target.id === "clear-btn") {

            // Clear all input fields and the result div when clear button is clicked
            document.getElementById("name").value = "";
            document.getElementById("human-age").value = "";
            document.getElementById("dog-age").value = "";
            document.getElementById("result").innerHTML = "";

        }
    });
});
