import { AuthService } from './../services/authService';
import { create } from 'zustand';

type AuthState = {
  userId: number;
  roleId: number;
  email: string;
  user: any;
  accessToken: string | null;
  refreshToken: any;
};

type AuthActions = {
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => Promise<void>;
  onRegister: (
    email: string,
    password: string,
    passwordRepeat: string,
    roleId: number,
  ) => Promise<void>;
};

const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  userId: 0,
  roleId: 0,
  email: '',
  user: getValueFromLocalStorage('user'),
  accessToken: null || localStorage.getItem('token'),
  refreshToken: {},
  onLogin: async (email, password) => {
    try {
      const data = await AuthService.login(email, password);

      localStorage.setItem('token', JSON.stringify(data?.accesToken));
      localStorage.setItem('user', JSON.stringify(data?.user));

      set({ accessToken: data?.accesToken, user: data?.user });
    } catch (error) {
      console.error('Error login:', error);
    }
  },
  onRegister: async (email, password, passwordRepeat, roleId) => {
    try {
      const data = await AuthService.register(email, password, passwordRepeat, roleId);
      set({ userId: data.userId, email: data.email, roleId: data.roleId });
    } catch (error) {
      console.error('Error register:', error);
    }
  },
  onLogout: async () => {
    localStorage.clear();
    set({
      userId: 0,
      email: '',
      roleId: 0,
      user: null,
      accessToken: null,
    });
  },
}));

export default useAuthStore;
