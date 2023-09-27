import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: '',
  clientId: '',
  token: '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Page',
        path: 'content/page',
        format: 'md',
        fields: [
          {
            name: 'title',
            type: 'string',
          },
          {
            name: 'sections',
            label: 'Sections',
            type: 'object',
            list: true,
            templates: [
              {
                name: 'hero',
                label: 'Hero',
                fields: [
                  {
                    name: 'title',
                    type: 'rich-text',
                  },
                  {
                    name: 'subtitle',
                    type: 'rich-text',
                  },
                ],
              },
              {
                name: 'about',
                label: 'About',
                fields: [
                  {
                    name: 'title',
                    type: 'rich-text',
                  },
                  {
                    name: 'description',
                    type: 'rich-text',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
