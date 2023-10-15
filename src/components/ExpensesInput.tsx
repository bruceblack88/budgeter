import {ChangeEvent} from "react";
import {Box, Grid, Input, Typography} from "@mui/material";

export interface ExpenseData {
    [key: string]: {
        value: number;
        name: string;
    };
}

const ExpensesInput = ({ expenses, handleInputChange }: { expenses: ExpenseData, handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void }) => {
    type ExpenseCategories = {
        [key in 'housing' | 'utilities' | 'transportation' | 'groceries' | 'dining' | 'healthcare' | 'insurance' | 'debt' | 'entertainment' | 'savings' | 'education' | 'childcare' | 'miscellaneous']: string;
    };

    const expenseLabel: ExpenseCategories = {
        housing: "Housing",
        utilities: "Utilities",
        transportation: "Transportation",
        groceries: "Groceries",
        dining: "Dining",
        healthcare: "Healthcare",
        insurance: "Insurance",
        debt: "Debt",
        entertainment: "Entertainment",
        savings: "Savings",
        education: "Education",
        childcare: "Childcare",
        miscellaneous: "Miscellaneous"
    };

    return (
        <Box>
            <Typography variant={"h2"}>Expenses:</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}><Typography>Category</Typography></Grid>
                <Grid item xs={8}><Typography>Amount</Typography></Grid>
            </Grid>
            {Object.entries(expenseLabel).map(([key, label]) => (
                <Box mb={3} key={key}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Typography>{label}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Input type="number" name={`${key}-value`} placeholder="0.00" value={expenses[key]?.value || ''} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default ExpensesInput;
