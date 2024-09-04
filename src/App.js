
import "./App.css";

import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import News from "./components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
    c="John"
  render() {
    const pageSize=15
    return (
  
      <div>
        
        <Router>
        {<Navbar />}
        {/* Hello my first class based Component {this.c} */}
        {/* <News pageSize={this.pageSize} q={"climate crisis"}/> */}
        <Routes>
          <Route exact path="/electric vehicles" element={<News key="electric vehicles" pageSize={this.pageSize} q={"electric vehicles"}/>}/>
          <Route exact path="/" element={<News pageSize={this.pageSize} q={"sustainable development"}/>}/>
          <Route exact path="/artificial intelligence" element={<News key="artificial intelligence" pageSize={this.pageSize} q={"artificial intelligence"}/>}/>
          <Route exact path="/renewable energy" element={<News key="renewable energy" pageSize={this.pageSize} q={"renewable energy"}/>}/>
          <Route exact path="/global warming" element={<News key="global warming" pageSize={this.pageSize} q={"global warming"}/>}/>
          <Route exact path="/climate crisis" element={<News key="climate crisis" pageSize={this.pageSize} q={"climate crisis"}/>}/>
          <Route path="/search" element={<NewsWithSearch />} />
        </Routes>
        </Router>
      </div>
    )
  }
}
function NewsWithSearch() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('q') || 'climate change'; // Default query if not specified

    console.log('Search query:', query); // Log the query to verify

    return <News q={query} />;
}



