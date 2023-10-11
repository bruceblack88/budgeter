import {FormEvent, useState} from 'react';
import Calculations from "./components/Calculations";
import {ExpensesData, IncomeData, SavingsData} from "./types/types.ts";
import IncomeInput from "./components/IncomeInput.tsx";
import ExpensesInput from "./components/ExpensesInput.tsx";
import SavingsGoalInput from "./components/SavingsGoalInput.tsx";

interface FormData extends IncomeData, ExpensesData, SavingsData {
}

function App() {
    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = <T extends keyof FormData>(key: T, value: string) => {
        const parsedValue = parseFloat(value);
        setFormData(prev => ({
            ...prev,
            [key]: isNaN(parsedValue) ? '' : parsedValue
        }));
    };

    const handleDeleteExpense = (key: keyof FormData) => {
        setFormData(prev => {
            const updatedFormData = {...prev};
            delete updatedFormData[key];
            return updatedFormData;
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <form onSubmit={handleSubmit}>
                <IncomeInput income={formData} handleInputChange={handleInputChange}/>
                <ExpensesInput expenses={formData} handleInputChange={handleInputChange}
                               handleDeleteExpense={handleDeleteExpense}/>
                <SavingsGoalInput savings={formData} handleInputChange={handleInputChange}/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save
                </button>
            </form>
            <Calculations expenses={formData} income={formData} savings={formData} />
        </div>
    );
}

export default App;
