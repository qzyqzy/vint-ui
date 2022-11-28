import { defineClientConfig } from "@vuepress/client";

import vint from "./../../packages";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(vint);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
