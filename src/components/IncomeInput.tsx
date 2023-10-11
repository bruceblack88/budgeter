import { ChangeEvent } from 'react';
import {IncomeData} from "../types/types.ts";

interface IncomeInputProps {
    income: Partial<IncomeData>;
    handleInputChange: (key: keyof IncomeData, value: string) => void;
}

function IncomeInput({ income, handleInputChange }: IncomeInputProps) {
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.name as keyof IncomeData, e.target.value);
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Income:</h2>
            {Object.keys(income).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </label>
                    <input
                        type="number"
                        name={key}
                        id={key}
                        placeholder="0.00"
                        value={income[key as keyof IncomeData] || ''}
                        onChange={handleValueChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
            ))}
        </div>
    );
}

export default IncomeInput;
