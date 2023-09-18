import { Container, Divider, Grid  } from '@mantine/core';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid={true}>
      <Grid style={{bottom: '0px'}}>
        <Grid.Col span={12}>
          <Divider 
            my="xs" 
            label={`© ${year} ToDo List - Todos os direitos reservados`} 
            labelPosition="center"
            color="#228be6"
            />
        </Grid.Col>
      </Grid>
    </Container>
  );
}