
// created heading using js
const heading = document.createElement("h1");
heading.innerHTML = "Creating Hello world program using Javascript";
const root = document.getElementById("root");
root.appendChild(heading);

//created the heading using react
const heading1 = React.createElement("h1",{
    id:"heading"
},"Hello world program created using react");

const parent = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:'child'},[
        React.createElement("h1",{},"This is an h1 tag"),
        React.createElement("h2",{},"This is an h2 tag")
    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("h1",{},"This is an h1 tag"),
        React.createElement("h2",{},"This is an h2 tag")
    ]),

])
const root1 = ReactDom.createRoot(document.getElementById("root"));
root.render(heading1);
