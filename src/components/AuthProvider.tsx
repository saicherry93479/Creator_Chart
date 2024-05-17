import { createContext, useContext, useLayoutEffect, useState } from "react";
import { fetchGoogleUserInfo } from "./Header";

type UserType = {
  name: string;
  email: string;
  id: string;
  family_name: string;
  given_name: string;
  picture: string;
  verified_email: boolean;
};

interface AuthContextType {
  user: UserType;
  login: (userData: any) => void;
  logout: () => void;
  loading: Boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useLayoutEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchuser(token);
    }
  }, []);

  const fetchuser = async (token: string) => {
    try {
      const userInfo = await fetchGoogleUserInfo(token);
      setUser(userInfo);
      setLoading(false);
      console.log("userinfo is ", userInfo);
    } catch (e) {
      setLoading(false);
    }
  };

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
