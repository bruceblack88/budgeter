import {Box, Card, CardContent, Typography} from "@mui/material";
import {BudgeteerCardProps} from "./helpers/bugeteerCardHelpers.ts";

const BudgeteerCard = ({title, children}: BudgeteerCardProps) => (
    <Box position={"absolute"}>
        <Card variant={"outlined"} sx={{overflow:"auto"}}>
            <Typography variant={"h2"} align="center">{title}</Typography>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </Box>
);

export default BudgeteerCard;
