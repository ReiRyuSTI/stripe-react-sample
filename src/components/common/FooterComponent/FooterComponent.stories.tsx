import { FooterComponent } from "./FooterComponent";

import type {Meta, StoryObj} from '@storybook/react';


const meta = {
    title: "common/FooterComponent",
    component: FooterComponent,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal : Story = {
    args : {
        
    },
};
