document.writeln("<h1>Заголовок напечатан JS</h1>");
let node = document.createTextNode("Подзаголовок");
document.body.appendChild(node);

let N = 1000000;

let start_time = performance.now();
for (let index = 0; index < N; index++) {
    node = document.createElement("p");
    node.textContent = "N " + index + " -> " + index * index;
    document.body.appendChild(node);
}
let end_time = performance.now();
alert(end_time - start_time);