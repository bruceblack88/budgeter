import {ChangeEvent} from 'react';
import {SavingsData} from "../types/types.ts";

interface SavingsInputProps {
    savings: Partial<SavingsData>;
    handleInputChange: (key: keyof SavingsData, value: string) => void;
}

function SavingsGoalInput({ savings, handleInputChange }: SavingsInputProps) {
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.name as keyof SavingsData, e.target.value);
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Savings Goals:</h2>
            {Object.keys(savings).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </label>
                    <input
                        type="number"
                        name={key}
                        id={key}
                        placeholder="0.00"
                        value={savings[key as keyof SavingsData] || ''}
                        onChange={handleValueChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
            ))}
        </div>
    );
}

export default SavingsGoalInput;
