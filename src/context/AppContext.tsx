import { PropsWithChildren, createContext, useContext } from 'react';
import { useBreakpoint } from '../hooks';

type AppContextData = {
  smDown: boolean;
  smUp: boolean;
  mdDown: boolean;
  mdUp: boolean;
  lgDown: boolean;
  lgUp: boolean;
  breakpoint: boolean;
};

export const AppContext = createContext<AppContextData | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren<object>) => {
	const smDown = useBreakpoint('down', 'sm');
	const smUp = useBreakpoint('up', 'sm');
	const mdDown = useBreakpoint('down', 'md');
	const mdUp = useBreakpoint('up', 'md');
	const lgDown = useBreakpoint('down', 'lg');
	const lgUp = useBreakpoint('up', 'lg');
	const breakpoint = [smDown, smUp, mdDown, mdUp, lgDown, lgUp].some((e) => e === undefined);

	return (
		<AppContext.Provider value={{ smDown, smUp, mdDown, mdUp, lgDown, lgUp, breakpoint }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used inside the AppProvider');
	}

	return context;
};