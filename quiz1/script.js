function convertUSD(){
    const euro = document.getElementById("euro").value;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${euro}&from=EUR&to=USD`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById("answer").value = ${data.rates.USD}
  });
}

function convertCD(){
    const euro = document.getElementById("euro").value;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${euro}&from=EUR&to=CAD`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById("answer").value = ${data.rates.CAD}
  });
    
}

function convertBP(){
    const euro = document.getElementById("euro").value;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${euro}&from=EUR&to=GBP`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById("answer").value = ${data.rates.GBP}
  });
}

function convertRR(){
    const euro = document.getElementById("euro").value;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${euro}&from=EUR&to=RUB`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById("answer").value = ${data.rates.RUB}
  });
}

function convertAD(){
    const euro = document.getElementById("euro").value;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${euro}&from=EUR&to=AUD`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById("answer").value = ${data.rates.AUD}
  });
}
