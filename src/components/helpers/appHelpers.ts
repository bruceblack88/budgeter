export interface AppExpenseData {
    [key: string]: {
        value: number | string;
        name: string;
    };
}

export interface ValueLabelPair {
    label: string;
    value?: number;
}

export const transformToValueLabelPair = (data: { value: number | string; name: string }): ValueLabelPair => {
    let parsedValue = typeof data.value === 'string' ? parseFloat(data.value) : data.value;
    return {
        label: data.name,
        value: isNaN(parsedValue) ? undefined : parsedValue
    };
};
