import {ChangeEvent} from "react";

export interface ExpensesCategories {
    housing: number;
    utilities: number;
    transportation: number;
    groceries: number;
    dining: number;
    healthcare: number;
    insurance: number;
    debt: number;
    entertainment: number;
    savings: number;
    education: number;
    childcare: number;
    miscellaneous: number;
}


interface ExpensesInputProps {
    expenses: Partial<ExpensesCategories>;
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
        <>
            <div>
                <h2>Expenses:</h2>
                <div>
                    <label htmlFor={expenseLabel.housing.toLowerCase()}>
                        {expenseLabel.housing}
                    </label>
                    <input
                        type="number"
                        name={expenseLabel.housing.toLowerCase()}
                        id={expenseLabel.housing.toLowerCase()}
                        placeholder="0.00"
                        value={expenses.housing || ''}
                        onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor={expenseLabel.utilities.toLowerCase()}>
                        {expenseLabel.utilities}
                    </label>
                    <input
                        type="number"
                        name={expenseLabel.utilities.toLowerCase()}
                        id={expenseLabel.utilities.toLowerCase()}
                        placeholder="0.00"
                        value={expenses.utilities || ''}
                        onChange={handleInputChange}/>
                </div>
            </div>
        </>
    );
}

export default ExpensesInput;
