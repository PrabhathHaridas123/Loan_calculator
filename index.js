document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('loanForm');
    const loanAmount = document.getElementById("loanAmount");
    const interestRate = document.getElementById("interestRate");
    const monthsToPay = document.getElementById("monthsToPay");
    const monthlyPayment = document.getElementById("monthlyPayment");

    function updateDisplay(amount) {
        if (amount <= 0) {
            monthlyPayment.textContent = "$0.00";
        } else {
            monthlyPayment.textContent = "$" + amount.toFixed(2);
        }

    }

    function calculateMonthlyPayment() {


        let loan = parseFloat(loanAmount.value) || 0;
        let annualRate = parseFloat(interestRate.value) || 0;
        let months = parseInt(monthsToPay.value) || 0;




        if (loan <= 0 || annualRate <= 0 || months <= 0) {
            updateDisplay(0);
            return;
        }


        let r = annualRate / 100 / 12;
        let n = months;
        let numerator = loan * r * Math.pow(1 + r, n);
        let denominator = Math.pow(1 + r, n) - 1;
        let emi = numerator / denominator;


        updateDisplay(emi);
    }



    loanAmount.addEventListener("input", calculateMonthlyPayment);
    loanAmount.addEventListener("keyup", calculateMonthlyPayment);
    interestRate.addEventListener("input", calculateMonthlyPayment);
    interestRate.addEventListener("keyup", calculateMonthlyPayment);
    monthsToPay.addEventListener("input", calculateMonthlyPayment);
    monthsToPay.addEventListener("keyup", calculateMonthlyPayment);
    calculateMonthlyPayment();
});