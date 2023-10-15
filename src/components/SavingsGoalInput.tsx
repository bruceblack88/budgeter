import {ChangeEvent} from 'react';
import {Box, Input, Typography} from "@mui/material";

export interface SavingsData {
    emergencyFund: {
        value: number | string;
        name: string;
    };
    retirement: {
        value: number | string;
        name: string;
    };
}

interface SavingsInputProps {
    savings: Partial<SavingsData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SavingsGoalInput({savings, handleInputChange}: SavingsInputProps) {
    return (
        <Box>
            <Typography variant={"h3"}>Savings Goals</Typography>
            <Box>
                <Typography variant={"h4"}>
                    Emergency Fund
                </Typography>
                <Input
                    type="number"
                    name="emergencyFund-value"
                    id="emergencyFund"
                    placeholder="0.00"
                    value={savings.emergencyFund?.value || ''}
                    onChange={handleInputChange}
                />
            </Box>
            <Box>
                <Typography variant={"h4"}>
                    Retirement
                </Typography>
                <Input
                    type="number"
                    name="retirement-value"
                    id="retirement"
                    placeholder="0.00"
                    value={savings.retirement?.value  || ''}
                    onChange={handleInputChange}
                />
            </Box>
        </Box>
    );
}

export default SavingsGoalInput;
