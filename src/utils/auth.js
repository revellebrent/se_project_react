const BASE_URL =
process.env.NODE_ENV === "production"
? "https://api.wardrobe411.csproject.org"
: "http://localhost:3001";

export const register = ({ name, avatar, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => {
    throw new Error(err.message || `Error: ${res.status}`);
  });
};
