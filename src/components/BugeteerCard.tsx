import {ReactNode} from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";

interface BudgeteerCardProps {
    title: string;
    children: ReactNode;
}

const BudgeteerCard = ({title, children}: BudgeteerCardProps) => (
    <Box position={"absolute"}>
        <Card variant={"outlined"}>
            <Typography variant={"h2"} align="center">{title}</Typography>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </Box>
);

export default BudgeteerCard;
