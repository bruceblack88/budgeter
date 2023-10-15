import {ChangeEvent} from "react";

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

export interface SavingsInputProps {
    savings: Partial<SavingsData>;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}