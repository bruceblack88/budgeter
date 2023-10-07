
function Calculations({ formData }) {

    const totalIncome = ['monthlySalary', 'sideIncome', 'interestDividends', 'rentalIncome', 'otherIncome']
        .reduce((acc, key) => acc + (parseFloat(formData[key]) || 0), 0);

    const totalExpenses = ['housing', 'utilities', 'transportation', 'groceries', 'diningOut', 'healthcare', 'insurance', 'debtPayments', 'entertainment', 'savings', 'education', 'childcare', 'miscellaneous']
        .reduce((acc, key) => acc + (parseFloat(formData[key]) || 0), 0);

    const totalSavings = totalIncome - totalExpenses;
    const savingsRate = totalIncome !== 0 ? ((totalSavings / totalIncome) * 100).toFixed(2) : 0;

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Calculations:</h2>

            <div className="mb-4">
                <span className="text-gray-700 text-sm font-bold">Total Income:</span>
                <span className="ml-2">${totalIncome.toFixed(2)}</span>
            </div>

            <div className="mb-4">
                <span className="text-gray-700 text-sm font-bold">Total Expenses:</span>
                <span className="ml-2">${totalExpenses.toFixed(2)}</span>
            </div>

            <div className="mb-4">
                <span className="text-gray-700 text-sm font-bold">Total Savings:</span>
                <span className="ml-2">${totalSavings.toFixed(2)}</span>
            </div>

            <div className="mb-4">
                <span className="text-gray-700 text-sm font-bold">Savings Rate:</span>
                <span className="ml-2">{savingsRate}%</span>
            </div>
        </div>
    );
}

export default Calculations;
