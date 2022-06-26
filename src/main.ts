import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    // @ts-ignore
    data: window.DATA,
  },
});

export default app;
