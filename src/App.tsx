import { Container, Center, Loader } from '@mantine/core';
import { Header, Footer, ScrollToTop, ButtonHeader } from './components'
import { useAppContext } from './context';

function App() {
  // const api = import.meta.env.VITE_API_KEY;
  const { breakpoint } = useAppContext();
  console.log('breakpoint App', breakpoint)

  return (
    <>
      {breakpoint === true ? (
        <Container size="xs">
          <Center style={{ minHeight: '90vh'}}>
            <Loader />
          </Center>
        </Container>
      ) : (
        <>
          <Header />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <ButtonHeader text='teste' variant='light' icon={<div></div>}disabled={false} />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;
