export const getTokenLocal = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    //console.log("gettoken", token);
    if(!token) return {"Authorize":""}
    return token;
  };
  
  export const setTokenLocal = (newToken) => {
    const obj = { Authorization: newToken };
    localStorage.setItem("token", JSON.stringify(obj));
    //console.log(localStorage.getItem("token"))
  };
  