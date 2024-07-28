function personAccount() {
    // Private variables
    let firstName = '';
    let lastName = '';
    let incomes = []; // Array of income objects { amount, description }
    let expenses = []; // Array of expense objects { amount, description }

    // Inner function to set account information
    function accountInfo() {
        return {
            fullName: `${firstName} ${lastName}`,
            totalIncome: totalIncome(),
            totalExpense: totalExpense(),
            balance: accountBalance()
        };
    }

    // Inner function to calculate total income
    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }

    // Inner function to calculate total expenses
    function totalExpense() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    // Inner function to calculate account balance
    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    // Inner function to add income
    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    // Inner function to add expense
    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    // Set account holder's name
    function setName(first, last) {
        firstName = first;
        lastName = last;
    }

    // Expose public methods
    return {
        setName,
        addIncome,
        addExpense,
        accountInfo
    };
}

// Usage
const account = personAccount();
account.setName('John', 'Doe');
account.addIncome(1000, 'Salary');
account.addExpense(200, 'Rent');
account.addExpense(50, 'Utilities');

console.log(account.accountInfo());
/* Output:
{
  fullName: 'John Doe',
  totalIncome: 1000,
  totalExpense: 250,
  balance: 750
}
*/
