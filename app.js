const sum = document.getElementById("sum");

sum.addEventListener("click", function(e) {
    let num1 = document.getElementsByName("num1")[0].value;
    //console.log(num1);
    if (isNaN(num1)) {
        alert("Za prvi broj nije unesena ispravna vrijednost!");
    }
    let num2 = document.getElementsByName('num2')[0].value;
    if (isNaN(num2)) {
        alert("Za drugi broj nije unesena ispravna vrijednost!");
    }
    let suma = Number(num1) + Number(num2);
    // console.log(suma);
    if (suma % 1 != 0) {
        document.getElementsByName("calculate")[0].value = suma.toFixed(2);
    } else {
        document.getElementsByName("calculate")[0].value = suma;
    }
    e.preventDefault();
})

const subtract = document.getElementById("subtract");

subtract.addEventListener("click", function(e) {
    let num1 = document.getElementsByName("num1")[0].value;
    //console.log(num1);
    if (isNaN(num1)) {
        alert("Za prvi broj nije unesena ispravna vrijednost!");
    }
    let num2 = document.getElementsByName('num2')[0].value;
    if (isNaN(num2)) {
        alert("Za drugi broj nije unesena ispravna vrijednost!");
    }
    let razlika = Number(num1) - Number(num2);
    //console.log(razlika);
    if (razlika % 1 != 0) {
        document.getElementsByName("calculate")[0].value = razlika.toFixed(2);
    } else {
        document.getElementsByName("calculate")[0].value = razlika;
    };
    e.preventDefault();
})


const multiplication = document.getElementById("multiplication");

multiplication.addEventListener("click", function(e) {
    let num1 = document.getElementsByName("num1")[0].value;
    // console.log(num1);
    if (isNaN(num1)) {
        alert("Za prvi broj nije unesena ispravna vrijednost!");
    }
    let num2 = document.getElementsByName('num2')[0].value;
    if (isNaN(num2)) {
        alert("Za drugi broj nije unesena ispravna vrijednost!");
    }
    let proizvod = Number(num1) * Number(num2);
    //console.log(proizvod);
    if (proizvod % 1 != 0) {
        document.getElementsByName("calculate")[0].value = proizvod.toFixed(2);
    } else {
        document.getElementsByName("calculate")[0].value = proizvod;
    }
    e.preventDefault();
});

const division = document.getElementById("division");

division.addEventListener("click", function(e) {
    let num1 = document.getElementsByName("num1")[0].value;
    //console.log(num1);
    if (isNaN(num1)) {
        alert("Za prvi broj nije unesena ispravna vrijednost!");
    }
    let num2 = document.getElementsByName('num2')[0].value;
    if (isNaN(num2)) {
        alert("Za drugi broj nije unesena ispravna vrijednost!");
    }
    let kolicnik = Number(num1) / Number(num2);
    //console.log(kolicnik);
    if (num1 > 0 && num2 == 0) {
        alert("Dijeljenje sa 0 nije moguce!");
        document.getElementsByName("calculate")[0].value = "";
    } else {
        document.getElementsByName("calculate")[0].value = kolicnik;
    }
    e.preventDefault();
});

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function(e) {
    document.getElementsByName("num1")[0].value = "";
    document.getElementsByName("num2")[0].value = "";
    document.getElementsByName("calculate")[0].value = "";
    e.preventDefault();
})