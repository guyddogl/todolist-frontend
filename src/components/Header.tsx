import { ButtonHeader } from './';
import { Avatar, Flex, Grid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconHome, IconArticle, IconBrandWechat  } from '@tabler/icons-react';

export function Header() {

  const matches = useMediaQuery('(max-width: 790px)');
  const matchesXS = useMediaQuery('(max-width: 460px)');
  const iconSize = 20;
  const menuItems = [
    { text: 'Home', variant: 'light', icon: <IconHome width={iconSize} height={iconSize}/>, disabled: false},
    { text: 'Blog', variant: 'subtle', icon: <IconArticle width={iconSize} height={iconSize}/>, disabled: true},
    { text: 'Suporte', variant: 'subtle', icon: <IconBrandWechat width={iconSize} height={iconSize}/>, disabled: true},
  ]

  return (
    <Grid mt={2} justify="space-around" align="center">
      <Grid.Col span={matchesXS ? 2 : 3} style={{border: '0px solid #000'}}>
        <Flex align="center" justify="center">
          <Avatar color="light" mr={3} size={`${matches ? 'sm' : 'md'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width={`${matches ? '24' : '30'}`} height={`${matches ? '24' : '30'}`} viewBox="0 0 24 24" strokeWidth="2" stroke="#228be6" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 11l3 3l8 -8"></path>
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
            </svg>
          </Avatar>
          {!matchesXS && <Title order={matches ? 5 : 4} color="#868e96">ToDo List</Title>}
        </Flex>
      </Grid.Col>
      <Grid.Col span={6} style={{border: '0px solid #000'}}>
        <Flex align="center" gap={{ base: 'sm' }} justify="center">
          {menuItems.map((menu) => (
            <ButtonHeader key={menu.text} text={menu.text} variant={menu.variant} icon={menu.icon} matches={matches} disabled={menu.disabled}/>
          ))}
        </Flex>
      </Grid.Col>
      <Grid.Col span={2} style={{border: '0px solid #000'}}>
        <Flex align="center" justify="center">
          <Avatar src={null} alt="no image here" color="light" size={`${matches ? 'sm' : 'md'}`}/>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}