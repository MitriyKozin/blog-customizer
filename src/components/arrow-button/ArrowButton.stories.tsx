import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

import { useState } from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;
const [isOpen, setIsOpen] = useState<boolean>(false);
function toggleOpen() {
	setIsOpen((oldVal) => !oldVal);
}
	export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton toggleOpenFn={toggleOpen} openState={isOpen}/>
			</>
		);
	},
};
