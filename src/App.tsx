import { Header, Footer } from './components'

function App() {
  const api = import.meta.env.VITE_API_KEY;
  console.log(api);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App
