import { Button, Tooltip } from '@mantine/core';

interface IButtonHeader {
  text: string, 
  variant: string, 
  icon: React.ReactElement, 
  matches: boolean,
}

export function ButtonHeader({text, variant, icon, matches}: IButtonHeader) {

  return (
    <Tooltip label={text} color="#228be6" withArrow>
      <Button variant={variant} leftIcon={!matches && icon} style={{minWidth: `${matches ? '0px' : '115px'}`}}>
        {matches ? icon : text}
      </Button>
    </Tooltip>
  );
}