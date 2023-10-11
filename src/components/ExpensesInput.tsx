import {ChangeEvent} from "react";

export interface ExpensesData {
    housing?: number;
    utilities?: number;
    transportation?: number;
    groceries?: number;
    dining?: number;
    healthcare?: number;
    insurance?: number;
    debt?: number;
    entertainment?: number;
    savings?: number;
    education?: number;
    childcare?: number;
    miscellaneous?: number;
}



interface ExpensesInputProps {
    expenses: Partial<ExpensesData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function ExpensesInput({expenses, handleInputChange}: ExpensesInputProps) {
    const expenseLabel = {
    housing: "Housing",
    utilities: "Utilities",
    transportation: "Transportation",
    groceries: "Groceries",
    dining: "Dining",
    healthcare: "Healthcare",
    insurance: "Insurance",
    debt: "Debt",
    entertainment: "Entertainment",
    savings: "Savings",
    education: "Education",
    childcare: "Childcare",
    miscellaneous: "Miscellaneous"
}
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Expenses:</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="housing">
                    {expenseLabel.housing}
                </label>
                <input
                    type="number"
                    name="housing"
                    id="housing"
                    placeholder="0.00"
                    value={expenses.housing || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="utilities">
                    {expenseLabel.utilities}
                </label>
                <input
                    type="number"
                    name="utilities"
                    id="utilities"
                    placeholder="0.00"
                    value={expenses.utilities || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* ... Add similar fields for Transportation, Groceries, etc. */}
        </div>
    );
}

export default ExpensesInput;
