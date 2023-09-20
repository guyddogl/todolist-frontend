import { Button, Tooltip } from '@mantine/core';
import { useAppContext } from '../context';

export interface IButtonHeader {
text: string,
variant: 'filled' | 'light' | 'outline' | 'subtle' | 'default',
icon: React.ReactElement,
disabled: boolean,
}

export function ButtonHeader({ text, variant, icon, disabled }: IButtonHeader) {
	const { mdUp } = useAppContext();

	return (
		<Tooltip label={text} color="#228be6" withArrow disabled={mdUp}>
			<Button variant={variant} leftIcon={mdUp && icon} style={{ width: `${mdUp ? '115px' : '60px'}`, transition: 'all 1s ease' }} disabled={disabled}>
				{mdUp ?
					<span style={{ transition: 'all 0.8s ease' }}>{text}</span>
					:
					<span style={{ transition: 'all 0.8s ease' }}>{icon}</span>
				}
			</Button>
		</Tooltip>
	);
}