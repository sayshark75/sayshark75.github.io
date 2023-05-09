let themeMeta = document.querySelector(`meta[name="theme-color"]`);

const changeThemeMeta = () => {
  console.log("themeMeta: ", themeMeta);
  const color = localStorage.getItem("chakra-ui-color-mode");
  console.log("color: ", color);
  themeMeta.setAttribute("content", color === "light" ? "#8CD7FF" : "#000000");
};

export default changeThemeMeta;
