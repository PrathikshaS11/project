// Create the personAccount object
const personAccount = {
    firstName: 'Michael',
    lastName: 'Johnson',
    incomes: [
        { description: 'Salary', amount: 5000 },
        { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
        { description: 'Rent', amount: 1200 },
        { description: 'Utilities', amount: 300 }
    ],

    // Method to calculate total income
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    // Method to calculate total expenses
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    // Method to get account info
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}`;
    },

    // Method to add income
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },

    // Method to add expense
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },

    // Method to calculate account balance
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Store the personAccount object in localStorage (stringify it first)
localStorage.setItem('personAccount', JSON.stringify(personAccount));

// Retrieve and log the personAccount object to verify
const retrievedPersonAccount = JSON.parse(localStorage.getItem('personAccount'));

// Log account details
console.log('Account Info:', retrievedPersonAccount.accountInfo());
console.log('Total Income:', retrievedPersonAccount.totalIncome());
console.log('Total Expense:', retrievedPersonAccount.totalExpense());
console.log('Account Balance:', retrievedPersonAccount.accountBalance());

// Example usage of addIncome and addExpense
retrievedPersonAccount.addIncome('Investment', 2000);
retrievedPersonAccount.addExpense('Groceries', 150);
console.log('Updated Income:', retrievedPersonAccount.totalIncome());
console.log('Updated Expense:', retrievedPersonAccount.totalExpense());
console.log('Updated Balance:', retrievedPersonAccount.accountBalance());
