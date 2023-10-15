import {ChangeEvent, FormEvent, useState} from 'react';
import BugeteerCard from "./components/BugeteerCard";
import BudgeteerStepper from "./components/BugeteerStepper";
import {Box, Grid, Typography} from "@mui/material";
import Calculations from "./components/Calculations";

export interface AppExpenseData {
    [key: string]: {
        value: number | string;
        name: string;
    };
}

interface ValueLabelPair {
    label: string;
    value?: number;
}

const transformToValueLabelPair = (data: { value: number | string; name: string }): ValueLabelPair => {
    let parsedValue = typeof data.value === 'string' ? parseFloat(data.value) : data.value;
    return {
        label: data.name,
        value: isNaN(parsedValue) ? undefined : parsedValue
    };
};

function App() {
    const [formData, setFormData] = useState<{
        customExpenses?: { category: string, name: string, value: number | string }[]
    } & AppExpenseData>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (['monthlyIncome', 'sideIncome', 'interest', 'rentalIncome', 'otherIncome'].includes(name)) {
            setFormData(prev => ({
                ...prev,
                [name]: {
                    name: name,
                    value: parseFloat(value)
                }
            }));
        } else {
            const nameParts = name.split('-');
            const category = nameParts[0];

            setFormData(prev => ({
                ...prev,
                [category]: {
                    ...(prev[category] || {}),
                    value: parseFloat(value)
                }
            }));
        }
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Box>
            <Typography variant={"h1"} align="center">Bugeteer</Typography>
            <Grid container spacing={2} alignItems="center" direction={"row"} justifyContent="center">
                <Grid item xs={6}>
                    <BugeteerCard title={"Enter values if applicable"}>
                        <BudgeteerStepper
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                        />
                    </BugeteerCard>
                </Grid>
                <Grid item xs={6}>
                    <BugeteerCard title={"Calculations"}>
                        <Calculations
                            income={{
                                monthlyIncome: formData.monthlyIncome ? transformToValueLabelPair(formData.monthlyIncome) : undefined,
                                sideIncome: formData.sideIncome ? transformToValueLabelPair(formData.sideIncome) : undefined,
                                interestDividends: formData.interest ? transformToValueLabelPair(formData.interest) : undefined,
                                rentalIncome: formData.rentalIncome ? transformToValueLabelPair(formData.rentalIncome) : undefined,
                                otherIncome: formData.otherIncome ? transformToValueLabelPair(formData.otherIncome) : undefined
                            }}
                            expenses={{
                                housing: formData.housing ? transformToValueLabelPair(formData.housing) : undefined,
                                utilities: formData.utilities ? transformToValueLabelPair(formData.utilities) : undefined,
                                transportation: formData.transportation ? transformToValueLabelPair(formData.transportation) : undefined,
                                groceries: formData.groceries ? transformToValueLabelPair(formData.groceries) : undefined,
                                dining: formData.dining ? transformToValueLabelPair(formData.dining) : undefined,
                                healthcare: formData.healthcare ? transformToValueLabelPair(formData.healthcare) : undefined,
                                insurance: formData.insurance ? transformToValueLabelPair(formData.insurance) : undefined,
                                debt: formData.debt ? transformToValueLabelPair(formData.debt) : undefined,
                                entertainment: formData.entertainment ? transformToValueLabelPair(formData.entertainment) : undefined,
                                savings: formData.savings ? transformToValueLabelPair(formData.savings) : undefined,
                                education: formData.education ? transformToValueLabelPair(formData.education) : undefined,
                                childcare: formData.childcare ? transformToValueLabelPair(formData.childcare) : undefined,
                                miscellaneous: formData.miscellaneous ? transformToValueLabelPair(formData.miscellaneous) : undefined,
                                ...(formData.customExpenses ? formData.customExpenses.reduce((acc, expense) => {
                                    acc[expense.category] = transformToValueLabelPair(expense);
                                    return acc;
                                }, {} as Record<string, ValueLabelPair>) : {})
                            }}
                            savingsGoal={{
                                emergencyFund: typeof formData.emergencyFund?.value === 'number' ? formData.emergencyFund.value : 0,
                                retirement: typeof formData.retirement?.value === 'number' ? formData.retirement.value : 0
                            }}
                        />
                    </BugeteerCard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
