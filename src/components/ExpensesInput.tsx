import {ChangeEvent} from "react";
import {Box, Grid, Input, Typography} from "@mui/material";
import {ExpenseData, expenseLabel} from "./helpers/expenseHelpers.ts";


const ExpensesInput = ({ expenses, handleInputChange }: { expenses: ExpenseData, handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void }) => {
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
