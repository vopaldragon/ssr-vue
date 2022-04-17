import { createSSRApp, defineComponent, h, markRaw } from "vue";
import Page from "./Page.vue";
import App from "./App.vue";

let rootComponent;
export function createApp(path) {
  const PageWithWrapper = defineComponent({
    data: () => ({
      path: markRaw({ path }),
    }),
    created() {
      rootComponent = this;
    },
    render() {
      return h(
        App,
        {},
        {
          default: () => {
            console.log("render", this.path);
            return h(Page, this.path);
          },
        }
      );
    },
  });
  return createSSRApp(PageWithWrapper);
}

/**
 * Client routing function
 */
export function changePath(path) {
  rootComponent.path = markRaw({ path });
}
