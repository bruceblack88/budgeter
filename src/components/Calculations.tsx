import {Grid, Typography} from "@mui/material";
import {PieChart} from "@mui/x-charts";

interface ValueLabelPair {
    label: string;
    value?: number;
}

interface IncomeProps {
    monthlyIncome?: ValueLabelPair;
    sideIncome?: ValueLabelPair;
    interestDividends?: ValueLabelPair;
    rentalIncome?: ValueLabelPair;
    otherIncome?: ValueLabelPair;
}

interface ExpensesProps {
    housing?: ValueLabelPair;
    utilities?: ValueLabelPair;
    transportation?: ValueLabelPair;
    groceries?: ValueLabelPair;
    dining?: ValueLabelPair;
    healthcare?: ValueLabelPair;
    insurance?: ValueLabelPair;
    debt?: ValueLabelPair;
    entertainment?: ValueLabelPair;
    savings?: ValueLabelPair;
    education?: ValueLabelPair;
    childcare?: ValueLabelPair;
    miscellaneous?: ValueLabelPair;
}

interface CalculationsProps {
    income: IncomeProps;
    expenses: ExpensesProps;
    savingsGoal: {
        emergencyFund?: number;
        retirement?: number;
    };
}

const sumValues = (items: any, keys: string[]): number => {
    return keys.reduce((acc, key) => {
        const itemValue = items[key as keyof typeof items]?.value || 0;
        return acc + (typeof itemValue === "number" ? itemValue : 0);
    }, 0);
};

const Calculations = ({expenses = {}, income = {}, savingsGoal = {}}: CalculationsProps) => {
    const incomeKeys = ['monthlyIncome', 'sideIncome', 'interestDividends', 'rentalIncome', 'otherIncome'];
    const expenseKeys = ['housing', 'utilities', 'transportation', 'groceries', 'dining', 'healthcare', 'insurance', 'debt', 'entertainment', 'savings', 'education', 'childcare', 'miscellaneous'];

    const totalIncome = sumValues(income, incomeKeys);
    const totalExpenses = sumValues(expenses, expenseKeys);
    const netIncome = totalIncome - totalExpenses;
    const emergencyFund = savingsGoal.emergencyFund || 0;
    const retirement = savingsGoal.retirement || 0;
    const totalSavings = netIncome - emergencyFund - retirement;

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12} >
                <PieChart series={[
                    {
                        data: [
                            {id: 0, value: totalIncome, label: 'Total Income'},
                            {id: 1, value: totalExpenses, label: 'Total Expenses'},
                            {id: 2, value: netIncome, label: 'Net Income'},
                            {id: 3, value: netIncome, label: 'Emergency Fund'},
                            {id: 4, value: retirement, label: 'Retirement Contributions'},
                            {id: 5, value: totalSavings, label: 'Total Savings'},
                        ],
                    },
                ]}
                          width={600}
                          height={200}
                />
            </Grid>
            <Grid item xs={12} container direction="column" alignItems="center">
                <Typography variant="h3" align="center">Totals</Typography>
                <Typography align="center">Total Income: ${totalIncome}</Typography>
                <Typography align="center">Total Expenses: ${totalExpenses}</Typography>
                <Typography align="center">Net Income: ${netIncome}</Typography>
                <Typography align="center">Emergency Fund: ${emergencyFund}</Typography>
                <Typography align="center">Retirement: ${retirement}</Typography>
                <Typography align="center">Total Savings: ${totalSavings}</Typography>
            </Grid>
        </Grid>
    );
};

export default Calculations;



