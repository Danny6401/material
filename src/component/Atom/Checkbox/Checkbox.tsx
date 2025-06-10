import React from "react";

import type { Theme } from "@mui/material/styles";
import type { CustomColor } from "../../../types/checkboxExtends";
import type { PaletteColor } from "@mui/material/styles";

import MuiCheckbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {
    disableColor,
    palette as defaultPalette,
} from "../../../themes/defaultPalette";
import { CustomCheckboxProps } from "../../../types/checkboxExtends";

type CustomPaletteColor = PaletteColor & {
    custMain?: string;
    tonal?: string;
    onTonal?: string;
};

// 依 color 取得 palette
const getCheckboxStyles = (theme: Theme, color: CustomColor = "primary") => {
    const fallback = defaultPalette[color];
    const colorSet = (theme?.palette?.[color] as CustomPaletteColor) ?? fallback;

    return {
        // 初始狀態（未勾選、未 hover、未 disabled）
        "&": {
            color: colorSet?.default ?? fallback.myDefault, // 這裡設定初始顏色
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
    defaultChecked, // 官方建議同時支援受控與非受控模式
    disabled,
    indeterminate,
    onChange,
    ...rest
}) => {
    // 受控模式
    const isControlled = checked !== undefined;
    // 非受控模式
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);

    // 如果是「非受控模式」（沒有傳 checked），就用 setInternalChecked 更新內部狀態，讓元件自己管理勾選狀態
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
