
import React from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MetaTags from 'react-meta-tags';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faUser);


function Home() {
  return (
    <>
    <title>Page 1</title>
    <MetaTags>
    <meta id="meta-description" name="description" content="Some description." />
    <meta id="og-title" property="og:title" content="MyApp" />
    <meta id="og-image" property="og:image" content="path/to/image.jpg" />
    </MetaTags>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Home;
