import {ChangeEvent, FormEvent, useState} from 'react';
import BugeteerCard from "./components/BugeteerCard.tsx";
import BudgeteerStepper from "./components/BugeteerStepper.tsx";
import {Box, Grid, Typography} from "@mui/material";

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
            <Typography variant={"h1"}>Bugeteer</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                    <BugeteerCard title={"Enter values if applicable"}>
                        <BudgeteerStepper
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                        />
                    </BugeteerCard>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
