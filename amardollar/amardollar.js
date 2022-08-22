console.log('This is amardollar.js');

const rakhboDone = document.getElementById('rDone').addEventListener('click', function(){
    const rakhboAmount = parseFloat(document.getElementById('rAmount').value);
    const prevJomaAmount = parseFloat(document.getElementById('jAmount').innerText);
    const prevBalanceAmount = parseFloat(document.getElementById('bAmount').innerText);
    if (rakhboAmount > 999999999){
        alert('Bostay eto jayga nai :p');
        document.getElementById('rAmount').value = '';
        return;
    };
    document.getElementById('jAmount').innerText = prevJomaAmount + rakhboAmount;
    document.getElementById('bAmount').innerText = prevBalanceAmount + rakhboAmount;
    document.getElementById('rAmount').value = '';
});

const tulboDone = document.getElementById('tDone').addEventListener('click', function(){
    const tulboAmount = parseFloat(document.getElementById('tAmount').value);
    const prevKhorochAmount = parseFloat(document.getElementById('kAmount').innerText);
    const prevBalanceAmount = parseFloat(document.getElementById('bAmount').innerText);
    if (tulboAmount > prevBalanceAmount){
        alert('Bostay eto dollar nai :p');
        document.getElementById('tAmount').value = '';
        return;
    };
    document.getElementById('kAmount').innerText = prevKhorochAmount + tulboAmount;
    document.getElementById('bAmount').innerText = prevBalanceAmount - tulboAmount;
    document.getElementById('tAmount').value = '';
});