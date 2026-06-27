import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import AnatomyViewer from "./components/AnatomyViewer/AnatomyViewer";
import InfoPanel from "./components/InfoPanel/InfoPanel";

function App() {
  return (
    <div className="app">
      <Navbar />

      <SearchBar />

      <div className="content">
        <Sidebar />

        <AnatomyViewer />

        <InfoPanel />
      </div>
    </div>
  );
}

export default App;