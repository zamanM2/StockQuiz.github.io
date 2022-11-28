// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Which Ticker represents the company NovaVax",
    a: [
      { text: "NOX", isCorrect: false },
      { text: "VAX", isCorrect: false },
      { text: "NVAX", isCorrect: true },
      { text: "VACC", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Which Ticker represents the company Game Stop?",
    a: [
      { text: "STOP", isCorrect: false, isSelected: false },
      { text: "GSTP", isCorrect: false },
      { text: "GMS", isCorrect: false },
      { text: "GME", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "Which Ticker represents the company Moderna",
    a: [
      { text: "MDA", isCorrect: false },
      { text: "MDNA", isCorrect: false },
      { text: "MRNA", isCorrect: true },
      { text: "MND", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Which Ticker represents the company TESLA?",
    a: [
      { text: "TESLA", isCorrect: false, isSelected: false },
      { text: "TLA", isCorrect: false },
      { text: "TSLA", isCorrect: true },
      { text: "TLA", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Which Ticker represents the company PALANTIR TECHNOLOGIES",
    a: [
      { text: "PTON", isCorrect: false, isSelected: false },
      { text: "PLTR", isCorrect: true },
      { text: "PTR", isCorrect: false },
      { text: "PLAN", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Which Ticker represents the company PELOTON INTERACTIVE",
    a: [
      { text: "PLR", isCorrect: false, isSelected: false },
      { text: "PTON", isCorrect: true },
      { text: "PTA", isCorrect: false },
      { text: "PON", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Which Ticker represents the company GOOGLE",
    a: [
      { text: "GAL", isCorrect: false, isSelected: false },
      { text: "GOO", isCorrect: false },
      { text: "GOL", isCorrect: false },
      { text: "GOOGL", isCorrect: true },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }
});
