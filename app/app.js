const link = 'current-loans.json';
let invest;


fetch(link)
  .then(response => response.json())
  .then(data => {

    console.log(data);

    document.querySelector('.loan-name').innerHTML = data.loans[0].title;
    document.querySelector('.loan-amount').innerHTML = data.loans[0].amount;
    document.querySelector('.loan-value').innerHTML = data.loans[0].ltv;

    document.querySelector('.loan-name1').innerHTML = data.loans[1].title;
    document.querySelector('.loan-amount1').innerHTML = data.loans[1].amount;
    document.querySelector('.loan-value1').innerHTML = data.loans[1].ltv;

    document.querySelector('.loan-name2').innerHTML = data.loans[2].title;
    document.querySelector('.loan-amount2').innerHTML = data.loans[2].amount;
    document.querySelector('.loan-value2').innerHTML = data.loans[2].ltv;
  });



function showWindow() {
  console.log('button is press');
  document.querySelector('.window').style.display = 'block';
};

function hideWindow() {
  invest = document.querySelector('.input-window').value;
  document.querySelector('.window').style.display = 'none';
  console.log(invest);
}


document.querySelector('.btn').onclick = showWindow;
document.querySelector('.btn1').onclick = showWindow;
document.querySelector('.btn2').onclick = showWindow;
document.querySelector('.btn-window').onclick = hideWindow;
