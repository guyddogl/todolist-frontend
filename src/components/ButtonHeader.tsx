import { Button, Tooltip } from '@mantine/core';

interface IButtonHeader {
  text: string, 
  variant: string, 
  icon: React.ReactElement, 
  matches: boolean,
  disabled: boolean,
}

export function ButtonHeader({text, variant, icon, matches, disabled}: IButtonHeader) {

  return (
    <Tooltip label={text} color="#228be6" withArrow>
      <Button variant={variant} leftIcon={!matches && icon} style={{minWidth: `${matches ? '0px' : '115px'}`}} disabled={disabled}>
        {matches ? icon : text}
      </Button>
    </Tooltip>
  );
}