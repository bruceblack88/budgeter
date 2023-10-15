import {ValueLabelPair} from "./appHelpers.ts";

export interface IncomeProps {
    monthlyIncome?: ValueLabelPair;
    sideIncome?: ValueLabelPair;
    interestDividends?: ValueLabelPair;
    rentalIncome?: ValueLabelPair;
    otherIncome?: ValueLabelPair;
}

export interface ExpensesProps {
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

export interface CalculationsProps {
    income: IncomeProps;
    expenses: ExpensesProps;
    savingsGoal: {
        emergencyFund?: number;
        retirement?: number;
    };
}

export const sumValues = (items: any, keys: string[]): number => {
    return keys.reduce((acc, key) => {
        const itemValue = items[key as keyof typeof items]?.value || 0;
        return acc + (typeof itemValue === "number" ? itemValue : 0);
    }, 0);
};