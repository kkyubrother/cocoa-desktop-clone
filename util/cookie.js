export const getCookie = (name) => {
  const result = window.document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${name}=`));
  if (result) return decodeURIComponent(result.replace(`${name}=`, ""));
  else return "";
};
export const setCookie = (name, value) => {
  window.document.cookie = `${name}=${encodeURIComponent(value)}`;
};
