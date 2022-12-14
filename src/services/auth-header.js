export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: "Holder" + user.accessToken };
  } else {
    return {};
  }
}
