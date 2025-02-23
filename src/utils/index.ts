export const handleLogout = (history: any) => {
    localStorage.removeItem("auth");
    history.push("/login");
  };
  