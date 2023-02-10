import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroimage",
  title: "Hero Image",
  type: "document",
  fields: [
    defineField({
      name: "herotitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroimage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
