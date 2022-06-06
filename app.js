var number
var result = 0;

var store = () => {
    number = document.getElementById('number').value;
    // isNaN(number) ? number = 0 : number;
}
var oper = (operType) => {
    store();
    result = eval(result + number) + operType;
    document.getElementById('number').value = '';
    console.log('Resultado', result)
}

var equal = () => {
    store();
    result = eval(result + number)
    document.getElementById('result').innerHTML = result
    document.getElementById('number').value = ''
    number = 0
    result = 0
}
