const amount = document.getElementById('amount');
const months = document.getElementById('months');
const amountValue = document.getElementById('amountValue');
const monthValue = document.getElementById('monthValue');
const payment = document.getElementById('payment');

function calculateLoan() {
  const principal = parseFloat(amount.value);
  const term = parseInt(months.value);
  const interestRate = 0.015;

  const monthlyPayment =
    (principal * (1 + interestRate * term)) / term;

  amountValue.textContent = principal.toLocaleString();
  monthValue.textContent = term;
  payment.textContent = monthlyPayment.toFixed(2);
}

amount.addEventListener('input', calculateLoan);
months.addEventListener('input', calculateLoan);

calculateLoan();
