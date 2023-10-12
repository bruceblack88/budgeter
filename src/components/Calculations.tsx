import {IncomeData} from "./IncomeInput";
import {SavingsData} from "./SavingsGoalInput";

interface CalculationsProps {
    expenses: Partial<ExpensesCategories> | undefined;
    income: Partial<IncomeData> | undefined;
    savings: Partial<SavingsData> | undefined;
}

function Calculations({expenses, income}: CalculationsProps) {

    const totalIncome = ['monthlyIncome', 'sideIncome', 'interestDividends', 'rentalIncome', 'otherIncome']
        .reduce((acc, key) => acc + (typeof (income ?? {})[key as keyof typeof income] === "number"
            ? (income ?? {})[key as keyof typeof income]
            : 0), 0);

    const totalExpenses = ['housing', 'utilities', 'transportation', 'groceries', 'dining', 'healthcare', 'insurance', 'debt', 'entertainment', 'savings', 'education', 'childcare', 'miscellaneous']
        .reduce((acc, key) => acc + (typeof (expenses ?? {})[key as keyof typeof expenses] === "number"
            ? (expenses ?? {})[key as keyof typeof expenses]
            : 0), 0);

    const totalSavings = totalIncome - totalExpenses;
    const savingsRate = totalIncome !== 0 ? ((totalSavings / totalIncome) * 100).toFixed(2) : '0';

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
