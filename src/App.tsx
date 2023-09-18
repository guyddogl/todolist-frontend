import { AppShell, Container, Center, Footer, Header, Loader  } from '@mantine/core';
import { Header as HeaderComponent, Footer as FooterComponent, ScrollToTop } from './components'
import { useAppContext } from './context';
import { Home } from './pages';

function App() {
  // const api = import.meta.env.VITE_API_KEY;
  const { breakpoint } = useAppContext();

  return (
    <>
      {breakpoint === true ? (
        <Container fluid>
          <Center style={{ minHeight: '100vh'}}>
            <Loader />
          </Center>
        </Container>
      ) : (
        <AppShell
          header={
            <Header height={80} style={{borderBottom: '1px solid rgba(231, 245, 255, 1)'}}>
              <HeaderComponent />
            </Header>
          }
          footer={
            <Footer height={50} style={{border: '0'}}>
              <FooterComponent />
            </Footer>
          }
        >
        <Home />
        <ScrollToTop />
      </AppShell>
      )}
    </>
  );
}

export default App;
