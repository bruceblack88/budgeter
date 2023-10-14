import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, FormGroup, Step, StepLabel, Stepper} from "@mui/material";
import IncomeInput from "./IncomeInput.tsx";
import ExpensesInput from "./ExpensesInput.tsx";
import SavingsGoalInput from "./SavingsGoalInput.tsx";


interface BudgeteerStepperProps {
    formData: any;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent) => void;
}

const BudgeteerStepper: React.FC<BudgeteerStepperProps> = ({ formData, handleInputChange, handleSubmit }) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Income', 'Expenses', 'Savings Goal'];

    const handleNext = () => setActiveStep(prev => prev + 1);
    const handleBack = () => setActiveStep(prev => prev - 1);
    const handleReset = () => setActiveStep(0);

    return (
        <form onSubmit={handleSubmit}>
            <Stepper activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <FormGroup>
                {activeStep === 0 && <IncomeInput income={formData} handleInputChange={handleInputChange} />}
                {activeStep === 1 && <ExpensesInput handleInputChange={handleInputChange} expenses={formData} />}
                {activeStep === 2 && <SavingsGoalInput savings={formData} handleInputChange={handleInputChange} />}

                {activeStep === steps.length - 1 ? (
                    <Button type="submit">Save</Button>
                ) : (
                    <>
                        <Button onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                    </>
                )}

                {activeStep !== steps.length && <Button onClick={handleReset}>Reset</Button>}
            </FormGroup>
        </form>
    );
};

export default BudgeteerStepper;
