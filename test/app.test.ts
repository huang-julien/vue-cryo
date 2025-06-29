import { it, describe, expect } from "vitest";
import { createApp } from "vue";
import { serializeApp } from "../src/runtime/serialize";
import ElementsOnly from "virtual:vsc:./fixtures/components/ElementsOnly.vue";
import { renderToString } from "@vue/server-renderer";
import { renderOnigiri } from "../src/runtime/deserialize";
import { removeCommentsFromHtml } from "./utils";

describe("serializeApp", () => {
  it("should serialize a Vue app", async () => {
    const app = createApp(ElementsOnly);
    const html = await renderToString(app);
    const serialized = await serializeApp(app);

    const rebuilt = createApp({
      setup() {
        return () => renderOnigiri(serialized);
      },
    });
    const rebuiltHtml = await renderToString(rebuilt);
    expect(rebuiltHtml).toBe(html);
    expect(removeCommentsFromHtml(rebuiltHtml)).toMatchInlineSnapshot(
      `"<div><div>1</div><div>2</div><div>0</div></div>"`,
    );
  });
});
