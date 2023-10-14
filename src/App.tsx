import {ChangeEvent, FormEvent, useState} from 'react';
import ExpensesInput from "./components/ExpensesInput";
import {Box, Button, Card, CardContent, FormGroup, Step, StepLabel, Stepper, Typography} from "@mui/material";
import IncomeInput from "./components/IncomeInput.tsx";
import SavingsGoalInput from "./components/SavingsGoalInput.tsx";

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

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Income', 'Expenses', 'Savings Goal'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Typography variant={"h1"}>BUDGETEER</Typography>
            <Card variant={"outlined"}>
                <CardContent>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            {activeStep === 0 && <IncomeInput income={formData} handleInputChange={handleInputChange}/>}
                            {activeStep === 1 &&
                                <ExpensesInput handleInputChange={handleInputChange} expenses={formData}/>}
                            {activeStep === 2 &&
                                <SavingsGoalInput savings={formData} handleInputChange={handleInputChange}/>}

                            {activeStep === steps.length - 1 ? (
                                <Button type="submit">Save</Button>
                            ) : (
                                <>
                                    <Button onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                                </>
                            )}

                            {activeStep !== steps.length && (
                                <Button onClick={handleReset}>
                                    Reset
                                </Button>
                            )}
                        </FormGroup>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}

export default App;
