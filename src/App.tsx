import {useState} from 'react';
import IncomeInput from "./components/IncomeInput.tsx";
import ExpensesInput from "./components/ExpensesInput.tsx";
import SavingsGoalInput from "./components/SavingsGoalInput.tsx";
import Calculations from "./components/Calculations.tsx";

function App() {
    const [formData, setFormData] = useState({
        monthlySalary: '',
        sideIncome: '',
        interestDividends: '',
        rentalIncome: '',
        otherIncome: '',
        housing: '',
        utilities: '',
        emergencyFund: '',
        retirement: '',
        vacation: '',
        debtRepayment: '',
        otherGoals: '',
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle submit logic.
        console.log(formData);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <form onSubmit={handleSubmit}>
                <IncomeInput formData={formData} handleInputChange={handleInputChange}/>
                <ExpensesInput formData={formData} handleInputChange={handleInputChange}/>
                <SavingsGoalInput formData={formData} handleInputChange={handleInputChange}/>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Save
                </button>
            </form>
            <Calculations formData={formData}/>
        </div>
    );
}

export default App;
