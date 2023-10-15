import {Box, Grid, Input, Typography} from "@mui/material";
import {ChangeEvent} from "react";

export interface IncomeData {
    monthlyIncome?: number | string;
    sideIncome?: number | string;
    interestDividends?: number | string;
    rentalIncome?: number | string;
    otherIncome?: number | string;
}


function IncomeInput({income, handleInputChange}: {
    income: IncomeData,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
    type IncomeCategories = {
        [key in 'monthlyIncome' | 'sideIncome' | 'interestDividends' | 'rentalIncome' | 'otherIncome']: string;
    };

    const incomeLabel: IncomeCategories = {
        monthlyIncome: "Monthly Income",
        sideIncome: "Side Income",
        interestDividends: "Interest Income",
        rentalIncome: "Rental Income",
        otherIncome: "Other Income"
    };

    return (
        <Box>
            <Typography variant={"h2"}>Income</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}><Typography>Category</Typography></Grid>
                <Grid item xs={4}><Typography>Amount</Typography></Grid>
            </Grid>
            {Object.entries(incomeLabel).map(([key, label]) => (
                <Box mb={3} key={key}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={8}>
                            <Typography>{label}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Input type="number" name={`${key}-value`} placeholder="0.00"
                                   value={income[key]?.value || ''} onChange={handleInputChange}/>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}

export default IncomeInput;
