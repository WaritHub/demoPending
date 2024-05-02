// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { initializeIcons } from "@fluentui/react";
// import { Input } from "@fluentui/react-components";
// import { FluentProvider, webLightTheme } from "@fluentui/react-components";
// import { createTheme } from "@fluentui/react";
// import { Dropdown, Option } from "@fluentui/react-components";
// import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { makeStyles } from "@fluentui/react-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
// // @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
// import ResponsivePagination from "react-responsive-pagination";
// initializeIcons();

function App() {
  // const [currentPage, setCurrentPage] = useState(4);
  // const totalPages = 5;
  return (
    // <FluentProvider theme={webLightTheme}>
    <div>
     <div class="header">
  <h1>Chania</h1>
</div>

<div class="row">
  <div class="col-3 col-s-3 menu">
    <ul>
      <li>The Flight</li>
      <li>The City</li>
      <li>The Island</li>
      <li>The Food</li>
    </ul>
  </div>

  <div class="col-6 col-s-9">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  </div>

  <div class="col-3 col-s-12">
    <div class="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>

    </div>
  );
}

export default App;
