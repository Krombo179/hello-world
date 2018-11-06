function source() {
  console.log("Hello World!");
}

function popup() {
  alert("Hello, World!");
}

function browser() {
  var p = document.getElementById("hello");
  p.innerHTML = "Hello, World!";
}

function stranger() {
  var name= prompt("What is your Name?");
  var p = document.getElementById('name');
  p.innerHTML= "Hello, " + name;
}
