var emptyOrFull = /** @class */ (function () {
    function emptyOrFull(size) {
        this.size = size;
        this.elements = [];
    }
    emptyOrFull.prototype.empty = function () {
        return this.elements.length === 0;
    };
    emptyOrFull.prototype.full = function () {
        return this.elements.length === this.size;
    };
    emptyOrFull.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            console.error("Array is full");
        }
        this.elements.push(element);
    };
    emptyOrFull.prototype.pop = function () {
        if (this.elements.length === 0) {
            console.error("Array is empty");
        }
        return this.elements.pop();
    };
    return emptyOrFull;
}());
var numbers = new emptyOrFull(5);
function randomNumbers(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!numbers.full()) {
    var x = randomNumbers(1, 10);
    console.log("Push ".concat(x, " into the array"));
    numbers.push(x);
}
while (!numbers.empty()) {
    var x = numbers.pop();
    console.log("Pop ".concat(x, " from the array"));
}
