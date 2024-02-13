import {basicSetup, EditorView} from "codemirror"
import {python} from "@codemirror/lang-python"

let editor = new EditorView({
  doc: "print('test')\n",
  extensions: [basicSetup, python()],
  parent: document.body
})

export function testMethod() {
  return editor.state.doc.toString()
}