
export interface incomeData {
    title: string;
    amount: number;
    date: Date | null;
    category: string;
    description: string;
}

export interface categoryData {
    value: string;
    label: string;
    disabled?: boolean;
}