let processButton = document.getElementById('process');
let addButton = document.getElementById('add');

let inputsNumber = 2;

processButton.addEventListener('click', () => {
    let inputValue = document.getElementById('input').value;
    console.log(inputValue);
    let output = document.getElementById('output');
    let outputHTML = document.getElementById('output-html');

    let regexes = document.querySelectorAll(".regex");

    regexes.forEach((element) => {
        if (element.checked) {
            // console.log(element.value, element.checked);
            regexInput = document.getElementById('regex' + element.value + 'Input').value;
            regexOutput = document.getElementById('regex' + element.value + 'Output').value;
            inputValue = inputValue.replace(new RegExp(regexInput, 'gm'), regexOutput);
        }
    })
    output.value = inputValue;
});

addButton.addEventListener('click', () => {
    inputsNumber++;
    let inputsWrapper = document.getElementById('inputs-wrapper');

    let container = document.createElement("div");
    container.innerHTML = `
        <div class="input-group mt-2">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <input class="regex" value="${inputsNumber}" type="checkbox">
            </div>
        </div>
        <input type="text" id="regex${inputsNumber}Input" class="form-control">
        <input type="text" id="regex${inputsNumber}Output" class="form-control">
        </div>
    `;
    inputsWrapper.appendChild(container);
});