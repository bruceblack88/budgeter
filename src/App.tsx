import {ChangeEvent, FormEvent, useState} from 'react';
import ExpensesInput from "./components/ExpensesInput";
import {Box, Button, FormGroup, Typography} from "@mui/material";
import IncomeInput from "./components/IncomeInput.tsx";

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
            <Typography variant={"h1"}>BUDGETEER</Typography>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <IncomeInput income={formData} handleInputChange={handleInputChange} />
                    <ExpensesInput handleInputChange={handleInputChange} expenses={formData}/>
                    <Button type="submit">Save</Button>
                </FormGroup>
            </form>
        </Box>
    );
}

export default App;
