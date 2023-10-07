import {ChangeEvent, FormEvent, useState} from 'react';
import IncomeInput, {IncomeData} from "./components/IncomeInput";
import ExpensesInput, {ExpensesData} from "./components/ExpensesInput";
import SavingsGoalInput, {SavingsData} from "./components/SavingsGoalInput";
import Calculations from "./components/Calculations";

interface FormData extends IncomeData, ExpensesData, SavingsData {
}

function App() {
    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsedValue = parseFloat(value);
        setFormData(prev => ({
            ...prev,
            [name]: isNaN(parsedValue) ? '' : parsedValue
        }));
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <form onSubmit={handleSubmit}>
                <IncomeInput income={formData} handleInputChange={handleInputChange}/>
                <ExpensesInput expenses={formData} handleInputChange={handleInputChange}/>
                <SavingsGoalInput savings={formData} handleInputChange={handleInputChange}/>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Save
                </button>
            </form>
            <Calculations income={formData} expenses={formData} savings={formData}/>
        </div>
    );
}

export default App;
