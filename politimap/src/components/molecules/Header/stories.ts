import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import Header from '.'; './index';

const meta = {
    title: 'Example/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onThemeToggle() {

        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heaader: Story = {
    args: {
        isDarkMode: true,
        onThemeToggle() {

        },
    },
};
