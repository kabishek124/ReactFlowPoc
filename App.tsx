import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import BankingComponent from "./Components/BankingComponent";
import FlowComponent from "./Components/FlowComponent";
import { ReactFlowProvider } from "@xyflow/react";
import { CoreComponent } from "./Components/CoreComponent";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded-md">
        <button onClick={() => navigate("/flow")}>
          <h1 className="underline cursor-pointer">
            Welcome to react-flow-poc
          </h1>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ReactFlowProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flow" element={<FlowComponent />} />
          <Route path="/banking" element={<BankingComponent />} />
          <Route path="/core" element={<CoreComponent />} />
        </Routes>
      </ReactFlowProvider>
    </BrowserRouter>
  );
};

export default App;
