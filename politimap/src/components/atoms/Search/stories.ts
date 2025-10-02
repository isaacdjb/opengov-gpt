import type { Meta, StoryObj } from '@storybook/react-vite';

import { expect, userEvent, within } from 'storybook/test';

import { Search } from '.';

const meta = {
    title: 'Example/Search',
    component: Search,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        button: { type: 'function' }
    }
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchDefault: Story = {
    args: {
        onChange: () => { }, placeholder: "", onSearch(value) {

        },
    }
};


