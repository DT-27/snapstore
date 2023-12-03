import React,{ Component} from "react";
import ReactDOM from 'react';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import '../index.css'
import  Top  from '../top';
import Footer from '../footer';
import Default from '../Default';
import Animals from './Animals';
import Flowers from './Flowers';
import Food from './Food';
import Landscape from './Landscape';
import DEF from '../Default';



//twEEGu2iTahX2Yls_iUZNQqwfSd7a3JWryabNTGtxEs
//6MrHwV6eLFeV6c73hROFgA0ROArOdte74qkxTijI6ts


const Home =()=>{
return(
<>


         <Router>


  <Top/>

                 <Routes>

                <Route exact path='/' exact element={<Default />} />
                  <Route path='/default' element={<DEF />} />
                 <Route path='/animals' element={<Animals />} />
                 <Route path='/flowers' element={<Flowers />} />
                 <Route path='/food' element={<Food />} />
                 <Route path='/landscape' element={<Landscape />} />
                 </Routes>
              </Router>


<Footer/>
</>

)
} ;

export default Home;
