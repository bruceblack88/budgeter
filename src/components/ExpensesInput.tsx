import {ChangeEvent, useState} from "react";
import {Box, Button, FormControl, Grid, Input, NativeSelect, Typography} from "@mui/material";

export interface ExpenseData {
    [key: string]: {
        value: number | string;
        name: string;
    };
}

interface ExpensesInputProps {
    expenses: ExpenseData;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ExpensesInput = ({expenses, handleInputChange}: ExpensesInputProps) => {
    type ExpenseCategories = {
        [key in | 'housing'
            | 'utilities'
            | 'transportation'
            | 'groceries'
            | 'dining'
            | 'healthcare'
            | 'insurance'
            | 'debt'
            | 'entertainment'
            | 'savings'
            | 'education'
            | 'childcare'
            | 'miscellaneous']: string;
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

    const [customExpense, setCustomExpense] = useState<{ category: string, name: string, value: string }>({
        category: 'housing',
        name: '',
        value: ''
    });

    const [customExpenses, setCustomExpenses] = useState<{ category: string, name: string, value: string }[]>([]);

    const handleCustomExpenseChange = (index: number, name: keyof typeof customExpenses[0], value: string | number) => {
        const updatedCustomExpenses = [...customExpenses];
        updatedCustomExpenses[index][name] = value as any;
        setCustomExpenses(updatedCustomExpenses);
    };


    const addCustomExpense = () => {
        setCustomExpenses(prev => [...prev, customExpense]);
        handleInputChange({
            target: {
                name: `${customExpense.category}-name`,
                value: customExpense.name
            }
        } as ChangeEvent<HTMLInputElement>);

        handleInputChange({
            target: {
                name: `${customExpense.category}-value`,
                value: customExpense.value
            }
        } as ChangeEvent<HTMLInputElement>);

        setCustomExpense({
            category: 'housing',
            name: '',
            value: ''
        });
    };

    return (
        <Box>
            <Typography variant={"h2"}>Expenses:</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}><Typography>Category</Typography></Grid>
                <Grid item xs={4}><Typography>Name</Typography></Grid>
                <Grid item xs={4}><Typography>Amount</Typography></Grid>
            </Grid>
            {Object.entries(expenseLabel).map(([key, label]) => (
                <Box mb={3} key={key}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Input
                                type="text"
                                value={label}
                                readOnly
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                type="text"
                                name={`${key}-name`}
                                placeholder="Expense Name"
                                value={expenses[key]?.name || ''}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                type="number"
                                name={`${key}-value`}
                                placeholder="0.00"
                                value={expenses[key]?.value || ''}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            ))}

            {customExpenses.map((expense, index) => (
                <Box mb={3} key={index}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <NativeSelect
                                    value={expense.category}
                                    onChange={(e) => {
                                        const updatedCustomExpenses = [...customExpenses];
                                        updatedCustomExpenses[index].category = e.target.value;
                                        setCustomExpenses(updatedCustomExpenses);
                                    }}
                                >
                                    {Object.entries(expenseLabel).map(([key, label]) => (
                                        <option key={key} value={key}>
                                            {label}
                                        </option>
                                    ))}
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                type="text"
                                value={expense.name || ''}
                                onChange={(e) => handleCustomExpenseChange(index, 'name', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Input
                                type="number"
                                value={expense.value || ''}
                                onChange={(e) => handleCustomExpenseChange(index, 'value', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            ))}

            <Grid item xs={12}>
                <Button onClick={addCustomExpense}>Add Custom Expense</Button>
            </Grid>
        </Box>
    );
};

export default ExpensesInput;
