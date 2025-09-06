import { Navigate, Route, Routes } from "react-router-dom";
import NftMarketplace from "./pages/NftMarketplace";
import Kanban from "./pages/Kanban";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/nft-marketplace" element={<NftMarketplace />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
