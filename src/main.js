import { createSSRApp, defineComponent, h, reactive } from "vue";
import App from "./App.vue";
import Page from "./Page.vue";

const props = reactive({ path: "" });

export function createApp(path) {
  props.path = path;
  const PageWithWrapper = defineComponent({
    render() {
      return h(App, props, {
        default: (props) => {
          console.log("render", props);
          return h(Page, props);
        },
      });
    },
  });
  return createSSRApp(PageWithWrapper);
}

/**
 * Client routing function
 */
export function changePath(path) {
  props.path = path;
}
