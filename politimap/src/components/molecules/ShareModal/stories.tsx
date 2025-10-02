import type { Meta, StoryObj } from '@storybook/react-vite';

import ShareModal from './index';
import { useState } from 'react';
import Button from '../../atoms/Button';
import { Share2 } from 'lucide-react';

const meta = {
    title: 'Example/ShareModal',
    component: ShareModal,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },

} satisfies Meta<typeof ShareModal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ShareModalDefault: Story = {
    args: {
        onClose: () => { }
    },
    render: (args) => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsModalOpen(true)}>
                    <Share2 size={20} />
                    Share
                </Button>
                {isModalOpen && (
                    <ShareModal facebookUrl='facebook.com' instagramUrl='instagram.com' linkedinUrl='linkedin.com' twitterUrl='twitter.com' onClose={() => setIsModalOpen(false)} />
                )}
            </>
        )
    },
};



