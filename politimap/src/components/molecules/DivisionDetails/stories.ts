import type { Meta, StoryObj } from '@storybook/react-vite';
import { faker } from '@faker-js/faker';

import DivisionDetails from './index';
import { GenerateDivision } from '../../../util/TestData/division';

const meta = {
    title: 'Example/DivisionDetails',
    component: DivisionDetails,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof DivisionDetails>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DefaultDetails: Story = {
    args: {
        ...GenerateDivision()
    }
};


