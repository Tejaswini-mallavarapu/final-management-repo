export const setAuth = (data) => {
  localStorage.setItem("accessToken", data.accessToken);

  if (data.refreshToken) {
    localStorage.setItem("refreshToken", data.refreshToken);
  }

  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }
};

export const getAuth = () => {
  const accessToken = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");

  return {
    accessToken,
    user: user && user !== "undefined" ? JSON.parse(user) : null,
  };
};

export const clearAuth = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};