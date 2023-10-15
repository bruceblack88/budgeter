import {Box, Grid, Input, Typography} from "@mui/material";
import {ChangeEvent} from "react";
import {IncomeData, incomeLabel} from "./helpers/incomeHelpers.ts";


function IncomeInput({income, handleInputChange}: {
    income: IncomeData,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {


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
