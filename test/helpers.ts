import Prettier from 'prettier'
import type { Schema, Node as ProseMirrorNode } from 'prosemirror-model'

export async function formatHtml(htmlString: string) {
  return await Prettier.format(htmlString, {
    parser: 'typescript',
  })
}

export function setupNodes(schema: Schema) {
  const doc = (nodes: ProseMirrorNode[]) => {
    return schema.nodes.doc.createChecked({}, nodes)
  }
  const codeBlock = (language: string, text: string) => {
    return schema.nodes.code_block.createChecked(
      { language },
      schema.text(text),
    )
  }

  return { doc, codeBlock }
}
