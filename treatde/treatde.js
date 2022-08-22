console.log('This is treatde.js');

document.getElementById('sTotal').innerText = parseInt(document.getElementById('bTotal').innerText) + parseInt(document.getElementById('mTotal').innerText);
document.getElementById('vat').innerText = parseInt(document.getElementById('sTotal').innerText) * 0.15;
document.getElementById('total').innerText = parseInt(document.getElementById('sTotal').innerText) + parseFloat(document.getElementById('vat').innerText);

// function subTotal(){
//     document.getElementById('sTotal').innerText = parseInt(document.getElementById('bTotal').innerText) + parseInt(document.getElementById('mTotal').innerText);
//     document.getElementById('vat').innerText = parseInt(document.getElementById('sTotal').innerText) * 0.15;
//     document.getElementById('total').innerText = parseInt(document.getElementById('sTotal').innerText) + parseFloat(document.getElementById('vat').innerText);
// };

document.getElementById('bMinus').addEventListener('click', function(){
    console.log('- clicked');
    document.getElementById('bCount').value = parseInt(document.getElementById('bCount').value) - 1;
    document.getElementById('bTotal').innerText = parseInt(document.getElementById('bCount').value) * parseInt(document.getElementById('bAmount').innerText);
    subTotal();
});

document.getElementById('bPlus').addEventListener('click', function(){
    console.log('+ clicked');
    document.getElementById('bCount').value = parseInt(document.getElementById('bCount').value) + 1;
    document.getElementById('bTotal').innerText = parseInt(document.getElementById('bCount').value) * parseInt(document.getElementById('bAmount').innerText);
    subTotal();
});

document.getElementById('bClose').addEventListener('click', function(){
    console.log('baad de clicked');
    document.getElementById('b').className = 'hidden';

    document.getElementById('sTotal').innerText = parseInt(document.getElementById('sTotal').innerText) - parseInt(document.getElementById('bTotal').innerText);
    document.getElementById('vat').innerText = parseInt(document.getElementById('sTotal').innerText) * 0.15;
    document.getElementById('total').innerText = parseInt(document.getElementById('sTotal').innerText) + parseFloat(document.getElementById('vat').innerText);
});

document.getElementById('mMinus').addEventListener('click', function(){
    console.log('- clicked');
    document.getElementById('mCount').value = parseInt(document.getElementById('mCount').value) - 1;
    document.getElementById('mTotal').innerText = parseInt(document.getElementById('mCount').value) * parseInt(document.getElementById('mAmount').innerText);
    subTotal();
});

document.getElementById('mPlus').addEventListener('click', function(){
    console.log('+ clicked');
    document.getElementById('mCount').value = parseInt(document.getElementById('mCount').value) + 1;
    document.getElementById('mTotal').innerText = parseInt(document.getElementById('mCount').value) * parseInt(document.getElementById('mAmount').innerText);
    subTotal();
});

document.getElementById('mClose').addEventListener('click', function(){
    console.log('baad de clicked');
    document.getElementById('m').className = 'hidden';

    document.getElementById('sTotal').innerText = parseInt(document.getElementById('sTotal').innerText) - parseInt(document.getElementById('mTotal').innerText);
    document.getElementById('vat').innerText = parseInt(document.getElementById('sTotal').innerText) * 0.15;
    document.getElementById('total').innerText = parseInt(document.getElementById('sTotal').innerText) + parseFloat(document.getElementById('vat').innerText);
});

// document.getElementById('sTotal').innerText = parseInt(document.getElementById('bTotal').innerText) + parseInt(document.getElementById('mTotal').innerText)