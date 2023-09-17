import { ButtonHeader } from './';
import { Avatar, Flex, Grid, Title } from '@mantine/core';
import { IconHome, IconArticle, IconBrandWechat  } from '@tabler/icons-react';

interface IHeader {
  matches: boolean,
  matchesXS: boolean,
}

export function Header({matches, matchesXS}: IHeader) {
  const iconSize = 20;
  const menuItems = [
    { text: 'Home', variant: 'light', icon: <IconHome width={iconSize} height={iconSize}/>, disabled: false},
    { text: 'Blog', variant: 'subtle', icon: <IconArticle width={iconSize} height={iconSize}/>, disabled: true},
    { text: 'Suporte', variant: 'subtle', icon: <IconBrandWechat width={iconSize} height={iconSize}/>, disabled: true},
  ]

  return (
    <>
      {matches !== undefined && (
        <Grid mt={2} justify="space-around" align="center">
          <Grid.Col span={matchesXS ? 2 : 3}>
            <Flex align="center" justify="center">
              <Avatar color="light" mr={3} size="md">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width={`${matches ? '24' : '30'}`} height={`${matches ? '24' : '30'}`} viewBox="0 0 24 24" strokeWidth="2" stroke="#228be6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 11l3 3l8 -8"></path>
                  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
                </svg>
              </Avatar>
              {!matchesXS && <Title order={matches ? 5 : 4} color="#868e96">ToDo List</Title>}
            </Flex>
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex align="center" gap={{ base: 'sm' }} justify="center">
              {menuItems.map((menu) => (
                <ButtonHeader key={menu.text} text={menu.text} variant={menu.variant} icon={menu.icon} matches={matches} disabled={menu.disabled}/>
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex align="center" justify="center">
              <Avatar src={null} alt="Usuário" color="light" size="md"/>
            </Flex>
          </Grid.Col>
        </Grid>
      )}
    </>
  );
}