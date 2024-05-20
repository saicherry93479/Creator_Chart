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
  currentScreen:number,
  updateScreen:(screen:number)=>void
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentScreen,setCurrentScreen]=useState(1);

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

  const updateScreen=(screen:number)=>{
    setCurrentScreen(screen)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading,currentScreen,updateScreen }}>
      {children}
    </AuthContext.Provider>
  );
};
