import {Grid, Typography} from "@mui/material";
import {PieChart} from "@mui/x-charts";
import {incomeKeys} from "./helpers/incomeHelpers.ts";
import {expenseKeys} from "./helpers/expenseHelpers.ts";
import {CalculationsProps, sumValues} from "./helpers/calculationHelpers.ts";

const Calculations = ({expenses = {}, income = {}, savingsGoal = {}}: CalculationsProps) => {

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



