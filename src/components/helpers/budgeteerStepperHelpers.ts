import {ChangeEvent, FormEvent} from "react";

export interface BudgeteerStepperProps {
    formData: any;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent) => void;
}