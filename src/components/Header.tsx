import { ButtonHeader } from './';
import { IButtonHeader } from '../interfaces';
import { Avatar, Divider, Flex, Grid, Title } from '@mantine/core';
import { IconHome, IconArticle, IconBrandWechat  } from '@tabler/icons-react';

export function Header() {

  const iconSize = 20;
  const menuItems = [
    { text: 'Home', variant: 'light', icon: <IconHome width={iconSize} height={iconSize}/>, disabled: false},
    { text: 'Blog', variant: 'subtle', icon: <IconArticle width={iconSize} height={iconSize}/>, disabled: true},
    { text: 'Suporte', variant: 'subtle', icon: <IconBrandWechat width={iconSize} height={iconSize}/>, disabled: true},
  ]

  return (
    <>
      <Grid mt={2} justify="space-around" align="center">
        <Grid.Col span={2}>
          <Flex align="center" justify="center">
            <Avatar color="light" mr={3} size="md">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width={30} height={30} viewBox="0 0 24 24" strokeWidth="2" stroke="#228be6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11l3 3l8 -8"></path>
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
              </svg>
            </Avatar>
            <Title order={4} color="#868e96" style={{lineHeight: '0.86'}}>ToDo List</Title>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex align="center" gap={{ base: 'sm' }} justify="center">
            {menuItems.map((menu) => (
              <ButtonHeader key={menu.text} text={menu.text} variant={menu.variant as IButtonHeader["variant"] } icon={menu.icon} disabled={menu.disabled}/>
            ))}
          </Flex>
        </Grid.Col>
        <Grid.Col span={2}>
          <Flex align="center" justify="center">
            <Avatar src={null} alt="Usuário" color="light" size="md"/>
          </Flex>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <Divider my="xs" color="rgba(231, 245, 255, 1)"/>
        </Grid.Col>
      </Grid>
    </>
  );
}