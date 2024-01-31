const initialState = editor.createEditorState("function foo() {\n    console.log(123);\n}");
const view = editor.createEditorView(initialState, document.getElementById("editor"));

function test() {
    console.log("Before:\n", view.state.doc.toString())
    view.dispatch({ changes: { from: 0, insert: "// Programmatically add a comment to the first line\n" } })
    console.log("After:\n", view.state.doc.toString())
}