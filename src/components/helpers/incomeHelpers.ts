export type IncomeCategories = {
    [key in 'monthlyIncome' | 'sideIncome' | 'interestDividends' | 'rentalIncome' | 'otherIncome']: string;
};

export const incomeLabel: IncomeCategories = {
    monthlyIncome: "Monthly Income",
    sideIncome: "Side Income",
    interestDividends: "Interest Income",
    rentalIncome: "Rental Income",
    otherIncome: "Other Income"
};
export interface IncomeData {
    monthlyIncome?: number | string;
    sideIncome?: number | string;
    interestDividends?: number | string;
    rentalIncome?: number | string;
    otherIncome?: number | string;
}
export const incomeKeys = ['monthlyIncome', 'sideIncome', 'interestDividends', 'rentalIncome', 'otherIncome'];
