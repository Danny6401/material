import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../component/Atom/Checkbox/Checkbox";
import { CustomCheckboxProps } from "../../types/checkboxExtends";
// import { useArgs } from "@storybook/preview-api";

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



// export const Controlled: Story = {
//     render: (args) => {
//         const [, updateArgs] = useArgs();
//         const handleChange = (event, checked) => {
//             updateArgs({ checked });
//         };
//         return (
//             <Checkbox
//                 {...args}
//                 onChange={handleChange}
//             />
//         );
//     },
// };
