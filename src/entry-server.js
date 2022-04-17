import { renderToString } from "vue/server-renderer";
import { createApp } from "./main";

export async function render(url, manifest) {
  const app = createApp(url);
  const ctx = {};
  const html = await renderToString(app, ctx);
  return html;
}
