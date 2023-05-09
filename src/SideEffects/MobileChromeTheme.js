let themeMeta = document.querySelector(`meta[name="theme-color"]`);

const changeThemeMeta = () => {
  const color = localStorage.getItem("chakra-ui-color-mode");
  themeMeta.setAttribute("content", color === "light" ? "#8CD7FF" : "#000000");
};

export default changeThemeMeta;
