function age() {
    // get the value
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthYear = document.getElementById("birthYear").value;
    let currentYear = 2025; 
    // main logic
    let res = currentYear - birthYear;
    // print the result
    let result = document.getElementById("result");
    result.textContent = "Hey " + firstName + " " + lastName + ", your age is " + res + "."
}