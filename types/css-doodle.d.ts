declare namespace JSX {
  interface IntrinsicElements {
    'css-doodle': {
      grid?: string;
      class?: string;
      children?: any;
    };
  }
}

declare module 'css-doodle'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        grid?: string;
      };
    }
  }
}