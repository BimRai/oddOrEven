function oddOrEven(num) {
    if (num % 2 === 0){
        return "EVEN!";
    } else {
        return "ODD!";
    }
}

function onClick() {
    let inputNumber =  document.getElementById("inputNumber").value;

    if (!isNaN(inputNumber)) {
        const result = document.getElementById("result");

        result.textContent = "";

        result.textContent = oddOrEven(parseInt(inputNumber));
    } else {
        alert("Please enter a valid number!");
    }
}

document.getElementById("btn").addEventListener("click", onClick);