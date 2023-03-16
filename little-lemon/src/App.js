
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <>
    <title>Page 1</title>
    <MetaTags>
    <meta id="meta-description" name="description" content="Some description." />
    <meta id="og-title" property="og:title" content="MyApp" />
    <meta id="og-image" property="og:image" content="path/to/image.jpg" />
    </MetaTags>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
