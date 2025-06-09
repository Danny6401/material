import { default as React } from '../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Theme } from '@mui/material/styles';
import { palette as defaultPalette } from '../../../themes/defaultPalette';
import { CustomFabProps } from '../../../types/buttonExtends';
export declare const getFabStyles: (theme: Theme, color?: keyof typeof defaultPalette) => {
    bgColor: any;
    fontColor: any;
    overlay: any;
};
export declare const Fab: React.ForwardRefExoticComponent<Omit<CustomFabProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
