import { PaymentComponent } from "./PaymentComponent";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "modules/PaymentComponent",
    component: PaymentComponent,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PaymentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal : Story = {
    args : {
        
    },
};
