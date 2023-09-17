import { Button, Tooltip } from '@mantine/core';
import { useAppContext } from '../context';

export interface IButtonHeader {
  text: string, 
  variant: 'filled' | 'light' | 'outline' | 'subtle' | 'default', 
  icon: React.ReactElement, 
  disabled: boolean,
}

export function ButtonHeader({text, variant, icon, disabled}: IButtonHeader) {
  const { mdUp } = useAppContext();

  return (
    <Tooltip label={text} color="#228be6" withArrow disabled={mdUp}>
      <Button variant={variant} leftIcon={mdUp && icon} style={{minWidth: `${mdUp ? '115px' : '0px'}`}} disabled={disabled}>
        {mdUp ? text : icon }
      </Button>
    </Tooltip>
  );
}