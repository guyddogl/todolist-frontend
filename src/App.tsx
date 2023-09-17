import { Container, Center, Loader } from '@mantine/core';
import { Header, Footer } from './components'
import { useMediaQuery } from '@mantine/hooks';

function App() {
  // const api = import.meta.env.VITE_API_KEY;
  const matches = useMediaQuery('(max-width: 790px)');
  const matchesXS = useMediaQuery('(max-width: 510px)');

  return (
    <>
      {matches === undefined || matchesXS === undefined ? (
        <Container size="xs">
          <Center style={{ minHeight: '90vh'}}>
            <Loader />
          </Center>
        </Container>
      ) : (
        <>
          <Header matches={matches} matchesXS={matchesXS} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
