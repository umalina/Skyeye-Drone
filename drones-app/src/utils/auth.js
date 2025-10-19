// Simple mock authentication system
export const login = (email, password) => {
  if (email && password) {
    localStorage.setItem("user", email);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};
