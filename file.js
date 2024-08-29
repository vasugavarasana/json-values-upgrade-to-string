let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let valuesToStringfy = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("json-container");
    jsonContainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);
}

function convertToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for (let value of valuesToStringfy) {
    convertToJSONString(value);
}

let stringfiedbikes = JSON.stringify(bikes);
let stringfiedperson = JSON.stringify(person);
let stringfiedtodos = JSON.stringify(todos);
