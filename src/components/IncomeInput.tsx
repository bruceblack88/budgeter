import {ChangeEvent} from "react";

export interface IncomeData {
    monthlyIncome?: number;
    sideIncome?: number;
    interest?: number;
    rentalIncome?: number;
    otherIncome?: number;
}

interface IncomeInputProps {
    income: Partial<IncomeData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function IncomeInput({income, handleInputChange}: IncomeInputProps) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Income:</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="monthlySalary">
                    Monthly Salary/Wages:
                </label>
                <input
                    type="number"
                    name="monthlyIncome"  // Change this from 'monthlySalary' to 'monthlyIncome'
                    id="monthlySalary"
                    placeholder="0.00"
                    value={income.monthlyIncome || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* ... Add similar fields for Side Income, Interest/Dividends, etc. */}
        </div>
    );
}

export default IncomeInput;

