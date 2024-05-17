import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Onboard from "./Pages/Onboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./components/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import DashBoard from "./Pages/DashBoard";

const App = () => {
  // 202124
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}
    >
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Onboard />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard></DashBoard>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
