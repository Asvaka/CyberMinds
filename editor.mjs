import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

let editor = new EditorView({
  doc: "console.log('hello')\n",
  extensions: [basicSetup, javascript()],
  parent: document.body
})

export function testMethod() {
  return editor.state.doc.toString()
}