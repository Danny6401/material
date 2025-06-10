import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../component/Atom/Checkbox/Checkbox";
import { CustomCheckboxProps } from "../../types/checkboxExtends"

const meta: Meta<typeof Checkbox> = {
    title: "Atoms/Checkbox/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["primary", "error"],
        },
        checked: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        indeterminate: {
            control: "boolean",
        },
        label: {
            control: "text",
        },
    },
    args: {
        color: "primary",
        checked: false,
        disabled: false,
        indeterminate: false,
        label: "",
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// 互動版 Template
const InteractiveTemplate = (args: CustomCheckboxProps) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Checkbox
            {...args}
            checked={checked}
            onChange={handleChange}
        />
    );
};

// 受控元件 Story
export const Primary: Story = {
    render: (args) => <InteractiveTemplate {...args} />,
};

export const Error: Story = {
    render: (args) => <InteractiveTemplate {...args} color="error" />,
};
export const PrimaryWithLabel: Story = {
    render: (args) => <InteractiveTemplate {...args} label="Standard 樣式" />,
};

export const ErrorWithLabel: Story = {
    render: (args) => <InteractiveTemplate {...args} color="error" label="Error 樣式" />,
};

// 非受控元件 Story Template
const UncontrolledTemplate = (args: CustomCheckboxProps) => (
    <Checkbox
        {...args}
        defaultChecked={args.defaultChecked}
    // 不傳 checked，不傳 onChange
    />
);

// 非受控元件 Story
export const UncontrolledPrimary: Story = {
    render: (args) => <UncontrolledTemplate {...args} defaultChecked={true} />,
};

export const UncontrolledError: Story = {
    render: (args) => <UncontrolledTemplate {...args} color="error" defaultChecked={false} />,
};
export const UncontrolledPrimaryWithLabel: Story = {
    render: (args) => <UncontrolledTemplate {...args} defaultChecked={true} label="非受控模式 - Standard 樣式" />,
};

export const UncontrolledErrorWithLabel: Story = {
    render: (args) => <UncontrolledTemplate {...args} color="error" defaultChecked={false} label="非受控模式 - Error 樣式" />,
};
