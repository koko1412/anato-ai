import Sidebar from "../components/Sidebar/Sidebar";
import AnatomyViewer from "../components/AnatomyViewer/AnatomyViewer";
import InfoPanel from "../components/InfoPanel/InfoPanel";

export default function MainLayout() {
  return (
    <div className="content">
      <Sidebar />
      <AnatomyViewer />
      <InfoPanel />
    </div>
  );
}