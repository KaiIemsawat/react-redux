import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: "dumy01",
            label: "Can I use React on a Project",
            content:
                "Aliquam bibendum ac sem sit amet sollicitudin. Nam eu scelerisque ipsum. Etiam ante lorem, tempus et felis non, blandit ultrices sapien. Ut eu orci interdum, suscipit tortor a, interdum lectus. Curabitur porttitor tortor in luctus blandit. Fusce ullamcorper scelerisque bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tortor mi, cursus a leo in, iaculis eleifend tellus. Quisque sit amet nisl tincidunt, gravida nisi ut, finibus nisl.",
        },
        {
            id: "dumy02",
            label: "Can I use CSS on a Project",
            content:
                "CAliquam bibendum ac sem sit amet sollicitudin. Nam eu scelerisque ipsum. Etiam ante lorem, tempus et felis non, blandit ultrices sapien. Ut eu orci interdum, suscipit tortor a, interdum lectus. Curabitur porttitor tortor in luctus blandit. Fusce ullamcorper scelerisque bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tortor mi, cursus a leo in, iaculis eleifend tellus. Quisque sit amet nisl tincidunt, gravida nisi ut, finibus nisl.",
        },
        {
            id: "dumy03",
            label: "Can I use JS on a Project",
            content:
                "Aliquam bibendum ac sem sit amet sollicitudin. Nam eu scelerisque ipsum. Etiam ante lorem, tempus et felis non, blandit ultrices sapien. Ut eu orci interdum, suscipit tortor a, interdum lectus. Curabitur porttitor tortor in luctus blandit. Fusce ullamcorper scelerisque bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tortor mi, cursus a leo in, iaculis eleifend tellus. Quisque sit amet nisl tincidunt, gravida nisi ut, finibus nisl.",
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;
