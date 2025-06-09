import { default as React } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { CustomColor } from '../../../types/checkboxExtends';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
export interface CustomCheckboxProps extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor;
    label?: React.ReactNode;
    defaultChecked?: boolean;
}
export declare const Checkbox: React.FC<CustomCheckboxProps>;
export default Checkbox;
