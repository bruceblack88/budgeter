import React, {ReactNode} from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";

interface BudgeteerCardProps {
    title: string;
    children: ReactNode;
}

const BudgeteerCard: React.FC<BudgeteerCardProps> = ({title, children}) => (
    <Box>
        <Card variant={"outlined"}>
            <Typography variant={"h2"}>{title}</Typography>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </Box>
);

export default BudgeteerCard;
