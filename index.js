let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;



const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");
const totalDepositDisplay = document.getElementById("totalDeposit");
const totalWithdrawDisplay = document.getElementById("totalWithdraw");
const totalBalanceDisplay = document.getElementById("totalBalance");



function updateDisplay() {
    totalDepositDisplay.textContent = totalDeposit;
    totalWithdrawDisplay.textContent = totalWithdraw;
    totalBalanceDisplay.textContent = totalBalance;
}


function isValidAmount(amount) {
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount. Amount must be positive.");
        return false;
    }
    return true;
}


depositButton.addEventListener("click", function () {
    const amount = parseFloat(amountInput.value);

    if (isValidAmount(amount)) {
        totalDeposit += amount; 
        totalBalance += amount; 
        updateDisplay(); 
        amountInput.value = ""; 
    }
});



withdrawButton.addEventListener("click", function () {
    const amount = parseFloat(amountInput.value);

    if (isValidAmount(amount)) {
        if (amount <= totalBalance) {
            totalWithdraw += amount; 
            totalBalance -= amount; 
            updateDisplay(); 
            amountInput.value = ""; 
        } else {
            alert("Insufficient balance.");
        }
    }
});
