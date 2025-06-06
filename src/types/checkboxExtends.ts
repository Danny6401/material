import { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

export type CustomCheckboxVariant = "filled" | "outlined" | "standard";
export type CustomColor = "surface" | "primary" | "secondary" | "tertiary";

export interface CustomCheckboxProps
    extends Omit<MuiCheckboxProps, "color"> {
    variant?: CustomCheckboxVariant;
    color?: CustomColor;
    indeterminateIcon?: React.ReactElement;
    checkedIcon?: React.ReactElement;
    uncheckedIcon?: React.ReactElement;
}
