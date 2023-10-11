import { ChangeEvent } from 'react';
import {ExpensesData} from "../types/types.ts";

interface ExpensesInputProps {
    expenses: Partial<ExpensesData>;
    handleInputChange: (key: keyof ExpensesData, value: string) => void;
    handleDeleteExpense: (key: keyof ExpensesData) => void;
}

function ExpensesInput({ expenses, handleInputChange, handleDeleteExpense }: ExpensesInputProps) {
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.name as keyof ExpensesData, e.target.value);
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Expenses:</h2>
            {Object.keys(expenses).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </label>
                    <input
                        type="number"
                        name={key}
                        id={key}
                        placeholder="0.00"
                        value={expenses[key as keyof ExpensesData] || ''}
                        onChange={handleValueChange}
                        className="w-full p-2 border rounded"
                    />
                    <button onClick={() => handleDeleteExpense(key as keyof ExpensesData)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ExpensesInput;
