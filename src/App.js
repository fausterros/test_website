import React from "react";
import './index.css';
import Header from './components/Main/header/Header'
import Title from './components/Main/title/Title'
import Search from './components/Main/search/Search'

 const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Title />
      <Search/>
    </div>
  )
}

export default App;
