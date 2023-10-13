import {ChangeEvent} from "react";
import {Box, Grid, Input, Typography} from "@mui/material";

export interface IncomeData {
    monthlyIncome?: number | string;
    sideIncome?: number | string;
    interest?: number | string;
    rentalIncome?: number | string;
    otherIncome?: number | string;
}

interface IncomeInputProps {
    income: Partial<IncomeData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function IncomeInput({income, handleInputChange}: IncomeInputProps) {
    type IncomeCategories = {
        [key in | 'monthlyIncome' | 'sideIncome' | 'interest' | 'rentalIncome' | 'otherIncome']: string;
    }

    const incomeLabel: IncomeCategories = {
        monthlyIncome: "Monthly Income",
        sideIncome: "Side Income",
        interest: "Interest Income",
        rentalIncome: "Rental Income",
        otherIncome: "Other Income"
    };

    return (
        <Box>
            <Typography variant={"h2"}>Income</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}><Typography>Category</Typography></Grid>
                <Grid item xs={8}><Typography>Amount</Typography></Grid>
            </Grid>
            {Object.entries(incomeLabel).map(([key, label]) => (
                <Box mb={3} key={key}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={8}>
                            <Input
                                type="text"
                                value={label}
                                readOnly
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Input
                                type="number"
                                name={`${key}-name`}
                                id="Income Amount"
                                placeholder="0.00"
                                value={income[key]?.name || ''}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}

export default IncomeInput;

