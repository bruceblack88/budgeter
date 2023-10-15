import {Grid, Typography} from "@mui/material";
import {BarChart, PieChart} from "@mui/x-charts";
import {incomeKeys} from "./helpers/incomeHelpers.ts";
import {expenseKeys, expenseLabel, hasData} from "./helpers/expenseHelpers.ts";
import {CalculationsProps, sumValues} from "./helpers/calculationHelpers.ts";

const Calculations = ({expenses = {}, income = {}, savingsGoal = {}}: CalculationsProps) => {

    const totalIncome = sumValues(income, incomeKeys);
    const totalExpenses = sumValues(expenses, expenseKeys);
    const netIncome = totalIncome - totalExpenses;
    const emergencyFund = savingsGoal.emergencyFund || 0;
    const retirement = savingsGoal.retirement || 0;
    const totalSavings = netIncome - emergencyFund - retirement;

    const pieChartData = [
        {id: 0, value: totalIncome, label: 'Total Income'},
        {id: 1, value: totalExpenses, label: 'Total Expenses'},
        {id: 2, value: netIncome, label: 'Net Income'},
        {id: 3, value: netIncome, label: 'Emergency Fund'},
        {id: 4, value: retirement, label: 'Retirement Contributions'},
        {id: 5, value: totalSavings, label: 'Total Savings'},
    ];

    const barChartLabels = Object.values(expenseLabel)
    const barChartData = Object.values(expenseKeys).map(key => expenses[key]?.value || 0);
    const validBarChartLabels = barChartLabels.filter((_, index) => barChartData[index] !== undefined && barChartData[index] !== null);


    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12}>
                <PieChart
                    series={[{data: hasData(pieChartData) ? pieChartData : [{id: 0, value: 0, label: 'No Data'}]}]}
                    width={600}
                    height={200}
                />
            </Grid>
            <Grid item xs={12} container direction="column" alignItems="center">
                <BarChart
                    xAxis={[{
                        label: 'Monthly Expenses',
                        scaleType: 'band',
                        data: hasData(barChartData) ? validBarChartLabels : []
                    }]}
                    series={[{
                        data: barChartData
                    }]}
                    width={1000}
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



