// Operator Aritmatika
let a = 5;
let b = 7;
document.getElementById("operatorAritmatika").textContent = a + b - a * b / a ** b % a;

// Pop Up Prompt
function popupPrompt() {
    let string = prompt("Halo! Apakah kamu menyukai Landing Pagenya?");
    alert('Menurutku, ' + string);
}

// Percabangan (if-else)
function percabanganIfelse() {
    let string = confirm("Apakah kamu menyukai Landing Pagenya?");
    if (string) {
        alert('Ya');
    } else {
        alert('Tidak');
    }
}

// Perulangan (for)
var fruits = ["Apel", "Pisang", "Jeruk", "Anggur"];
var listItems = "";
for (var i = 0; i < fruits.length; i++) {
    listItems += "<li>" + fruits[i] + "</li>";
}
document.getElementById("perulanganFor").innerHTML = listItems;
