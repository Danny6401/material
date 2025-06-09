import React from "react";

import type { Theme } from "@mui/material/styles";
import type { CustomColor } from "../../../types/checkboxExtends";
import type { PaletteColor } from "@mui/material/styles";

import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {
    disableColor,
    palette as defaultPalette,
} from "../../../themes/defaultPalette";

export interface CustomCheckboxProps
    extends Omit<MuiCheckboxProps, "color"> {
    color?: CustomColor; // e.g. "primary" | "error"
    label?: React.ReactNode;
    defaultChecked?: boolean;
}

type CustomPaletteColor = PaletteColor & {
    custMain?: string;
    tonal?: string;
    onTonal?: string;
};

function getDefaultColor(theme: string) {
    switch (theme) {
        case "primary":
            return "#7a7d80";
        case "error":
            return "#FF4D4F";
        default:
            return "#7a7d80";
    }
}

// 依 color 取得 palette
const getCheckboxStyles = (theme: Theme, color: CustomColor = "primary") => {
    const fallback = defaultPalette[color];
    const colorSet = (theme?.palette?.[color] as CustomPaletteColor) ?? fallback;
    const defaultColor = getDefaultColor(color);

    return {
        // 初始狀態（未勾選、未 hover、未 disabled）
        "&": {
            color: defaultColor, // 這裡設定初始顏色
            backgroundColor: "transparent",
            // border: `1.5px solid ${colorSet.custMain ?? colorSet.main}`,
        },
        // 勾選與 indeterminate 狀態
        "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            color: colorSet.custMain ?? fallback.custMain,
        },
        // hover 狀態
        "&:hover": {
            backgroundColor: alpha(colorSet.custMain ?? fallback.custMain, 0.08),
        },
        "&.Mui-disabled": {
            color: alpha(disableColor[0], 0.38),
        },
        // focus 狀態
        "&.Mui-focusVisible": {
            outline: `2px solid ${colorSet.custMain ?? fallback.custMain, 0.08}`,
            outlineOffset: 2,
        },
    };

};

// 用 styled API 包裝 MuiCheckbox
const StyledCheckbox = styled(MuiCheckbox, {
    shouldForwardProp: (prop) => prop !== "color",
})<{ color?: CustomColor }>(({ theme, color = "primary" }) =>
    getCheckboxStyles(theme, color)
);

export const Checkbox: React.FC<CustomCheckboxProps> = ({
    color = "primary",
    label,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
    ...rest
}) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => {
        if (!isControlled) {
            setInternalChecked(value);
        }
        onChange?.(event, value);
    };

    const checkboxElement = (
        <StyledCheckbox
            color={color}
            checked={isControlled ? checked : internalChecked}
            indeterminate={indeterminate}
            disabled={disabled}
            onChange={handleChange}
            {...rest}
        />
    );

    return label ? (
        <FormControlLabel control={checkboxElement} label={label} />
    ) : (
        checkboxElement
    );
};

export default Checkbox;
