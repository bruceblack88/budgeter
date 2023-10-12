import {ChangeEvent, FormEvent, useState} from 'react';
import ExpensesInput from "./components/ExpensesInput";
import Calculations from "./components/Calculations";
import {Box, Button, FormGroup} from "@mui/material";

export interface AppExpenseData {
    [key: string]: {
        value: number | string;
        name: string;
    };
}

function App() {
    const [formData, setFormData] = useState<AppExpenseData>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const nameParts = name.split('-');
        const category = nameParts[0];
        const fieldType = nameParts[1];

        setFormData(prev => ({
            ...prev,
            [category]: {
                ...(prev[category] || {}),
                [fieldType]: fieldType === 'value' ? (isNaN(parseFloat(value)) ? '' : parseFloat(value)) : value
            }
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <ExpensesInput handleInputChange={handleInputChange} expenses={formData}/>
                    <Button type="submit">Save</Button>
                </FormGroup>
            </form>
            <Calculations income={formData} expenses={formData} savings={formData}/>
        </Box>
    );
}

export default App;
