import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "mkdist",
      input: "./src",
      declaration: true,
      ext: "js",
    },
  ],
});
