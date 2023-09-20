import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, rem } from '@mantine/core';

export function ScrollToTop() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix position={{ bottom: rem(35), right: rem(20) }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<Button
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
						variant='light'
					>
						<IconArrowUp size="1.5rem" />
					</Button>
				)}
			</Transition>
		</Affix>
	);
}