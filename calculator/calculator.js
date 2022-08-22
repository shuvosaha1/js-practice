console.log('This is calculator.js');

function valueOfNum(anyNum){
    const valueOfInputs = parseFloat(document.getElementById(anyNum).value);
    return valueOfInputs;
};

function changeSymbol(anySymbol){
    const symbolButton = document.getElementById(anySymbol).addEventListener('click', function(){
        document.getElementById('symbol').innerText = document.getElementById(anySymbol).innerText;
    });
    return symbolButton
};

changeSymbol('add');
changeSymbol('sub');
changeSymbol('mul');
changeSymbol('div');

const calculateButton = document.getElementById('calculate').addEventListener('click', function(){
    const valueOfNum1 = valueOfNum('num1');
    const valueOfNum2 = valueOfNum('num2');
    console.log(valueOfNum1);
    console.log(valueOfNum2);

    document.getElementById('fNum').innerText = valueOfNum1;
    document.getElementById('sNum').innerText = valueOfNum2;

    if (document.getElementById('symbol').innerText === '+'){
        document.getElementById('tot').innerText = valueOfNum1 + valueOfNum2;
    }
    else if (document.getElementById('symbol').innerText === '-'){
        document.getElementById('tot').innerText = valueOfNum1 - valueOfNum2;
    }
    else if (document.getElementById('symbol').innerText === '×'){
        document.getElementById('tot').innerText = valueOfNum1 * valueOfNum2;
    }
    else if (document.getElementById('symbol').innerText === '÷'){
        document.getElementById('tot').innerText = valueOfNum1 / valueOfNum2;
    }

    // document.getElementById('tot').innerText = valueOfNum1 + valueOfNum2;
    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
});