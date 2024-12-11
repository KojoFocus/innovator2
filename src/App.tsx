import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Placeholder for future pages */}
        <Route
          path="/products"
          element={<div>Products Page - Coming Soon</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
