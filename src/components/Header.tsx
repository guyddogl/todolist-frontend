import { Avatar, Button, Flex, Grid, Title } from '@mantine/core';

export function Header() {

  return (
    <Grid justify="space-around" align="center">
      <Grid.Col sm={3} md={3} lg={2} xl={2} style={{border: '0px solid #000'}}>
        <Flex align="center" justify={{ sm: 'left' }}>
          <Avatar color="light" mr={2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width={30} height={30} viewBox="0 0 24 24" strokeWidth="2" stroke="#228be6" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 11l3 3l8 -8"></path>
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
            </svg>
          </Avatar>
          <Title order={4} color="#868e96">ToDo List</Title>
        </Flex>
      </Grid.Col>
      <Grid.Col sm={3} md={3} lg={4} xl={4} style={{border: '0px solid #000'}}>
        <Flex align="center" gap={{ base: 'sm' }} justify={{ sm: 'center' }}>
          <Button variant="light" style={{minWidth: '90px'}} >Home</Button>
          <Button variant="subtle" style={{minWidth: '90px'}} disabled>Blog</Button>
          <Button variant="subtle" style={{minWidth: '90px'}} disabled>Suporte</Button>
        </Flex>
      </Grid.Col>
      <Grid.Col sm={1} md={1} lg={1} xl={1} style={{border: '0px solid #000'}}>
        <Flex align="center" gap={{ base: 'sm' }} justify={{ sm: 'center' }}>
          <Avatar src={null} alt="no image here" color="light" />
        </Flex>
      </Grid.Col>
    </Grid>
  );
}