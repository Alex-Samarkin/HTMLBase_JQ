document.writeln("<h1>Заголовок напечатан JS</h1>");
let node = document.createTextNode("Подзаголовок");
document.body.appendChild(node);

let N = 1000;

for (let index = 0; index < N; index++) {
    node = document.createElement('p');
    node.textContent = 'N ' + (index) + ' -> ' + (index * index);
    document.body.appendChild(node);
}