// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// En esta solucion es case sensitive ya que en el array hay elementos con mayusculas y minusculas

document.addEventListener("DOMContentLoaded", (e) => {
  let arrayStrings = [];
  for (let i = 0; i < strangeArray.length; i++) {
    if (typeof strangeArray[i] === "string") {
      arrayStrings.push(strangeArray[i])
    }
  }
  arrayStrings = arrayStrings.sort();
  showList(arrayStrings);
});
