class Patient {
    constructor(f, i, o, d) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.D = new Date(d);
    }
    setById() {
        document.getElementById("F").textContent = this.F;
        document.getElementById("I").textContent = this.I;
        document.getElementById("O").textContent = this.O;
        document.getElementById("Y").textContent = this.D.getFullYear();
    }
};

let pat_array = [
    new Patient("Иванов", "Иван", "Антонович", new Date(1980, 6, 10)),
    new Patient("Петров", "Антон", "Николаевич", new Date(1996, 6, 10)),
    new Patient("Сидоров", "-", "-", new Date(1964, 6, 10))
];
let index = 0;

var next = function () {
    ++index;
    if (index >= pat_array.length) index = 0;
    return pat_array[index].setById();
};
var prev = function () {
    --index;
    if (index < 0) index = pat_array.length - 1;
    return pat_array[index].setById();
};