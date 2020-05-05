# arha-script

React component that helps injecting external JS snippets to the document without too much hassel.

Currently tested with SSR and CSR in NextJS.

The component uses `node-html-parser` library to detect elements from `children`-prop and creates react components using `react.createElement()` and what the parser outputs.

## Props

| Prop key  | Expected Type | Description                                  |
| --------- | ------------- | -------------------------------------------- |
| children  | string        | scripts we want to append to the dom         |
| parseOpts | object        | passes object to `node-html-parser`'s parser |
