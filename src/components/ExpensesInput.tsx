import {ChangeEvent} from "react";
import {Box, FormControl, FormLabel, Input, InputLabel, NativeSelect, Typography} from "@mui/material";

export interface ExpensesCategories {
    housing: number;
    utilities: number;
    transportation: number;
    groceries: number;
    dining: number;
    healthcare: number;
    insurance: number;
    debt: number;
    entertainment: number;
    savings: number;
    education: number;
    childcare: number;
    miscellaneous: number;
}


interface ExpensesInputProps {
    expenses: Partial<ExpensesCategories>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function ExpensesInput({expenses, handleInputChange}: ExpensesInputProps) {
    const expenseLabel = {
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
    }
    return (
        <>
            <Box>
                <Typography variant={"h2"}>Expenses:</Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="expense-category">
                            Choose Expense Category
                        </InputLabel>
                        <NativeSelect
                            defaultValue={expenseLabel.housing}
                            inputProps={{
                                name: 'expense-category',
                                id: 'expense-category',
                            }}
                        >
                            <option value={expenseLabel.housing}>{expenseLabel.housing}</option>
                            <option value={expenseLabel.utilities}>{expenseLabel.utilities}</option>
                            <option value={expenseLabel.transportation}>{expenseLabel.transportation}</option>
                            <option value={expenseLabel.groceries}>{expenseLabel.groceries}</option>
                            <option value={expenseLabel.dining}>{expenseLabel.dining}</option>
                            <option value={expenseLabel.healthcare}>{expenseLabel.healthcare}</option>
                            <option value={expenseLabel.insurance}>{expenseLabel.insurance}</option>
                            <option value={expenseLabel.debt}>{expenseLabel.debt}</option>
                            <option value={expenseLabel.entertainment}>{expenseLabel.entertainment}</option>
                            <option value={expenseLabel.savings}>{expenseLabel.savings}</option>
                            <option value={expenseLabel.education}>{expenseLabel.education}</option>
                            <option value={expenseLabel.childcare}>{expenseLabel.childcare}</option>
                            <option value={expenseLabel.miscellaneous}>{expenseLabel.miscellaneous}</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
                <Box>
                    <FormLabel htmlFor={expenseLabel.housing.toLowerCase()}>
                        {expenseLabel.housing}
                    </FormLabel>
                    <Input
                        type="number"
                        name={expenseLabel.housing.toLowerCase()}
                        id={expenseLabel.housing.toLowerCase()}
                        placeholder="0.00"
                        value={expenses.housing || ''}
                        onChange={handleInputChange}/>
                </Box>
                <Box>
                    <InputLabel htmlFor={expenseLabel.utilities.toLowerCase()}>
                        {expenseLabel.utilities}
                    </InputLabel>
                    <Input
                        type="number"
                        name={expenseLabel.utilities.toLowerCase()}
                        id={expenseLabel.utilities.toLowerCase()}
                        placeholder="0.00"
                        value={expenses.utilities || ''}
                        onChange={handleInputChange}/>
                </Box>
            </Box>
        </>
    );
}

export default ExpensesInput;
