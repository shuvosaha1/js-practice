console.log('This is treatdeUtil.js');

function subTotal(){
    document.getElementById('sTotal').innerText = parseInt(document.getElementById('bTotal').innerText) + parseInt(document.getElementById('mTotal').innerText);
    document.getElementById('vat').innerText = parseInt(document.getElementById('sTotal').innerText) * 0.15;
    document.getElementById('total').innerText = parseInt(document.getElementById('sTotal').innerText) + parseFloat(document.getElementById('vat').innerText);
};