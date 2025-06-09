import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
export type CustomColor = "primary" | "error";
export interface CustomCheckboxProps extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;
    label?: React.ReactNode;
}
