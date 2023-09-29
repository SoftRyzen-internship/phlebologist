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
        name: 'about',
        label: 'About',
        path: 'content/about',
        format: 'md',
        fields: [
          {
            name: 'general',
            label: 'General',
            type: 'object',
            required: true,
            fields: [
              {
                name: 'uk',
                label: 'UK',
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                  },
                  {
                    name: 'profession',
                    label: 'Profession',
                    type: 'rich-text',
                  },
                  {
                    name: 'education',
                    label: 'Education',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'institution',
                        label: 'Institution',
                        type: 'string',
                      },
                    ],
                    ui: {
                      itemProps: item => {
                        // if the institution field type is changed to rich-text,
                        // this part will need re-writing
                        // as we would be handling a deeper object
                        return { label: `${item?.institution}` };
                      },
                      defaultItem: {
                        institution: '',
                      },
                    },
                  },
                  {
                    name: 'experience',
                    label: 'Experience',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'point',
                        label: 'Point',
                        type: 'string',
                      },
                    ],
                    ui: {
                      itemProps: item => {
                        // if the point field type is changed to rich-text,
                        // this part will need re-writing
                        // as we would be handling a deeper object
                        return { label: `${item?.point}` };
                      },
                      defaultItem: {
                        point: '',
                      },
                    },
                  },
                ],
              },
              {
                name: 'en',
                label: 'EN',
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                  },
                  {
                    name: 'profession',
                    label: 'Profession',
                    type: 'rich-text',
                  },
                  {
                    name: 'education',
                    label: 'Education',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'institution',
                        label: 'Institution',
                        type: 'string',
                      },
                    ],
                    ui: {
                      itemProps: item => {
                        // if the institution field type is changed to rich-text,
                        // this part will need re-writing
                        // as we would be handling a deeper object
                        return { label: `${item?.institution}` };
                      },
                      defaultItem: {
                        institution: '',
                      },
                    },
                  },
                  {
                    name: 'experience',
                    label: 'Experience',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'point',
                        label: 'Point',
                        type: 'string',
                      },
                    ],
                    ui: {
                      itemProps: item => {
                        // if the point field type is changed to rich-text,
                        // this part will need re-writing
                        // as we would be handling a deeper object
                        return { label: `${item?.point}` };
                      },
                      defaultItem: {
                        point: '',
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'banner',
        label: 'Banner',
        path: 'content/banner',
        format: 'md',
        fields: [
          {
            name: 'uk',
            label: 'UK',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'rich-text',
              },
              {
                name: 'description',
                label: 'Description',
                type: 'rich-text',
              },
            ],
          },
          {
            name: 'en',
            label: 'EN',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'rich-text',
              },
              {
                name: 'description',
                label: 'Description',
                type: 'rich-text',
              },
            ],
          },
        ],
      },
    ],
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
});

// https://tina.io/docs/tina-cloud/
// add authentication later when we have an account
