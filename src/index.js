 import React from "react";
import ReactDOM from "react-dom";
import { SearchProvider } from './SearchContext';

import Home from "./components/Home"
ReactDOM.render(
    <React.StrictMode>
    <SearchProvider>
 <Home />
</SearchProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
