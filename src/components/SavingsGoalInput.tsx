import {ChangeEvent} from 'react';

export interface SavingsData {
    emergencyFund?: number;
    retirement?: number;
    vacation?: number;
    debtRepayment?: number;
    otherSavings?: number;
}

interface SavingsInputProps {
    savings: Partial<SavingsData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SavingsGoalInput({savings, handleInputChange}: SavingsInputProps) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Savings Goals:</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyFund">
                    Emergency Fund:
                </label>
                <input
                    type="number"
                    name="emergencyFund"
                    id="emergencyFund"
                    placeholder="0.00"
                    value={savings.emergencyFund || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="retirement">
                    Retirement:
                </label>
                <input
                    type="number"
                    name="retirement"
                    id="retirement"
                    placeholder="0.00"
                    value={savings.retirement || ''}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* ... Add similar fields for Vacation, Debt Repayment, Other Goals, etc. */}

        </div>
    );
}

export default SavingsGoalInput;
