export type ExpenseCategories = {
    [key in 'housing' | 'utilities' | 'transportation' | 'groceries' | 'dining' | 'healthcare' | 'insurance' | 'debt' | 'entertainment' | 'savings' | 'education' | 'childcare' | 'miscellaneous']: string;
};

export const expenseLabel: ExpenseCategories = {
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
export interface ExpenseData {
    [key: string]: {
        value: number;
        name: string;
    };
}

export const expenseKeys = ['housing', 'utilities', 'transportation', 'groceries', 'dining', 'healthcare', 'insurance', 'debt', 'entertainment', 'savings', 'education', 'childcare', 'miscellaneous'];
