import type { Meta, StoryObj } from '@storybook/react-vite';

import JobDetails from '.';
import { GenerateJob } from '../../../util/TestData/job';

const meta = {
    title: 'Example/JobDetails',
    component: JobDetails,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof JobDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMpHistory: Story = {

    args: {
        job: GenerateJob(),
    }

};


