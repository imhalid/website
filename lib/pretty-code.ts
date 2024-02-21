import { type Options } from "rehype-pretty-code"

export const rehypePrettyCodeOptions: Partial<Options> = {
   theme: "rose-pine-moon",
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
    grid: 'false',
    keepBackground: 'false',
    defaultLang: {
      block: 'plaintext',
      inline: 'plaintext',
    }
  },
}