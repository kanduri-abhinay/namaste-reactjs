const element = React.createElement("h1", {}, "hello abhinay");
// console.log(React, element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
const element2 = React.createElement("h1", {}, "hello footer");
// console.log(React, element);
const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(element2);
