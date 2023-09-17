import { Divider, Grid  } from '@mantine/core';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Grid>
      <Grid.Col span={12}>
        <Divider 
          my="xs" 
          label={`© ${year} ToDo List - All rights reserved`} 
          labelPosition="center"
          color="#228be6"
        />
      </Grid.Col>
    </Grid>
  );
}