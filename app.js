let input = document.querySelector("#input");
let error = document.querySelector("#error");
let result = document.querySelector("#total");
let errorTime;
let resultClear;

function updateWeight() {
    if (input.value <= 0 || isNaN(input.value)) {
        error.innerHTML = "Please enter a valid number";
        //setTimeout method
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            error.innerHTML = "";
            input.value = "";
        }, 2000)
    } else {
        result.innerHTML = (+input.value / 2.2).toFixed(2) + "kg"; //+ is string to number change
        //setTimeout method aftere 10s delete
        clearTimeout(resultClear);
        resultClear = setTimeout(() => {
            result.innerHTML = "";
            input.value = "";
        }, 10000)
    }
}



input.addEventListener("input", updateWeight);