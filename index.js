let table = [{ id: "10", name: "Jorge", lastName: "Rondon", address: "Cra 21" },
{ id: "11", name: "Karl", lastName: "De la Hoz", address: "Calle 5" },
{ id: "12", name: "Carlos", lastName: "Guzman", address: "Calle 12" }]


function load() {
    let elemento = document.getElementById("userList");
    tablaLlena = "";
    for (let i = 0; i < table.length; i++) {
        tablaLlena = tablaLlena + `<tr><td>${i + 1}</td><td>${table[i].id}</td><td>${table[i].name}</td><td>${table[i].lastName}</td><td>${table[i].address}</td> </tr>`
    }

    elemento.innerHTML = tablaLlena;
}

function register() {

    let id = document.getElementById("id").value;

    if (!isAllIputValid() || !isValidId(id)) {
        return;
    }

    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let elemento = document.getElementById("userList");

    elemento.innerHTML += `<tr><td>${table.length + 1}</td><td>${id}</td><td>${name}</td><td>${lastName}</td><td>${address}</td></tr>`
    let userTabla = { id, name, lastName, address }
    table.push(userTabla);
}

function clearInput() {
    getElement("id").value = "";
    getElement("name").value = "";
    getElement("lastName").value = "";
    getElement("address").value = "";
}

function isAllIputValid() {

    var information = "";

    if (!isValidInput("id") || !isValidInput("name") || !isValidInput("lastName") || !isValidInput("address")) {
        information = "- Complete todos los campos" + "\n";
    }

    if (isNaN(getElement("id").value)) {
        information = information + "- La id no es un número valido" + "\n";
    }

    if (information != "") {
        alert(information);
        return false;
    }
    return true;
}

function isValidId(id) {

    for (let i = 0; i < table.length; i++) {
        if (table[i].id == id) {
            alert("- La id " + id + " se encuentra en uso.");
            return false;
        }
    }
    return true;
}

function getElement(elementId) {
    return document.getElementById(elementId);
}

function changeText(id, information) {
    document.getElementById(id).innerHTML = information;
}

const isValidInput = (inputId) => document.getElementById(inputId).value != 0;