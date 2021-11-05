let value = prompt('Введите целое положительное число');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
        return num > 1;
    }
}

if (value === null || isNaN(value) || value.trim() === '' || value <= 0) {
    alert('введенное значение не является целым положительным числом');
} else if (!Number.isInteger(+value)) {
    alert('введенное значение является дробным числом');
} else if (isPrime(value)) {
    alert('простое число');
} else {
    alert('не простое число');
}
