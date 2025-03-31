/*
    Legends:

    \d    - Matches any digit [0-9]
    \D    - Matches any non-digit character
    \s    - Matches any whitespace character (space/newline/tabspace)
    \w    - Matches any word character [a-zA-z0-9_]
    \W    - Matches any non-word character
    [a-z] - Matches any lowercase letter
    [A-Z] - Matches any uppercase letter

    You can also set a specific characters inside the bracket [] for special validation purposes

*/

document.addEventListener("DOMContentLoaded", () => {
    function runTests() {

        // Basic Tests ----------------------------------------------------------------------------------------

        // Number test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}NumberTest`).innerHTML = /\d/.test(inputValue);
        }

        // Non-Number test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}NonNumberTest`).innerHTML = /\D/.test(inputValue);
        }
        
        // Lowercase test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}LowerCaseTest`).innerHTML = /[a-z]/.test(inputValue);
        }

        // Uppercase test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}UpperCaseTest`).innerHTML = /[A-Z]/.test(inputValue);
        }

        // NOT Letter Test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}NotLetterTest`).innerHTML = /[^a-zA-Z]/.test(inputValue);
        }

        // Whiespace Test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}WhiteSpaceTest`).innerHTML = /\s/.test(inputValue);
        }

        // Special Tests ----------------------------------------------------------------------------------------

        // Valid Name Test = must contain letters or accented letters only
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}ValidNameTest`).innerHTML = /^[a-zA-ZÑñÁÉÍÓÚáéíóúÜü]*$/.test(inputValue) && inputValue.trim() !== "";
        }

        // Valid Email Test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}ValidEmailTest`).innerHTML = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inputValue) && inputValue.trim() !== "";
        }

        // Valid Date Test
        for (let i = 1; i <= 5; i++) {
            let inputValue = document.getElementById(`string${i}`).value;
            document.getElementById(`string${i}ValidDateTest`).innerHTML = /^\d{2}-\d{2}-\d{4}$/.test(inputValue) && inputValue.trim() !== "";
        }
    }

    // Run tests when input changes
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", runTests);
    });

    // Run tests on page load
    runTests();
});