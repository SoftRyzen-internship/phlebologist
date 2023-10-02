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
            name: 'photo',
            label: 'Photo',
            type: 'image',
          },
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
                ui: {
                  defaultItem: {
                    name: '',
                  },
                },
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
                ui: {
                  defaultItem: {
                    name: '',
                  },
                },
              },
            ],
          },
          {
            name: 'education',
            label: 'Education',
            type: 'object',
            required: true,
            fields: [
              {
                name: 'uk',
                label: 'UK',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    label: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'institutions',
                    label: 'Institutions',
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
                ],
                ui: {
                  defaultItem: {
                    title: '',
                  },
                },
              },
              {
                name: 'en',
                label: 'EN',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    label: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'institutions',
                    label: 'Institutions',
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
                ],
                ui: {
                  defaultItem: {
                    title: '',
                  },
                },
              },
            ],
          },
          {
            name: 'career',
            label: 'Career',
            type: 'object',
            required: true,
            fields: [
              {
                name: 'uk',
                label: 'UK',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    label: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'institutions',
                    label: 'Institutions',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'period',
                        label: 'Period',
                        type: 'string',
                      },
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
                ],
                ui: {
                  defaultItem: {
                    title: '',
                  },
                },
              },
              {
                name: 'en',
                label: 'EN',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    label: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'institutions',
                    label: 'Institutions',
                    type: 'object',
                    list: true,
                    fields: [
                      {
                        name: 'period',
                        label: 'Period',
                        type: 'string',
                      },
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
                ],
                ui: {
                  defaultItem: {
                    title: '',
                  },
                },
              },
            ],
          },
          {
            name: 'certificates',
            label: 'Certificates',
            type: 'object',
            required: true,
            list: true,
            fields: [
              {
                name: 'photo',
                label: 'Photo',
                type: 'image',
              },
              {
                name: 'description',
                label: 'Description',
                type: 'object',
                fields: [
                  {
                    name: 'uk',
                    label: 'UK',
                    type: 'object',
                    fields: [
                      {
                        name: 'alt',
                        label: 'Alt',
                        type: 'string',
                      },
                    ],
                  },
                  {
                    name: 'en',
                    label: 'EN',
                    type: 'object',
                    fields: [
                      {
                        name: 'alt',
                        label: 'Alt',
                        type: 'string',
                      },
                    ],
                  },
                ],
              },
            ],
            ui: {
              itemProps: item => {
                // if the institution field type is changed to rich-text,
                // this part will need re-writing
                // as we would be handling a deeper object
                return { label: `${item?.description.uk.alt}` };
              },
              defaultItem: {
                description: {
                  uk: {
                    alt: '',
                  },
                },
              },
            },
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
            required: true,
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
      {
        name: 'results',
        label: 'Results',
        path: 'content/results',
        format: 'md',
        fields: [
          {
            name: 'case',
            label: 'Case',
            type: 'object',
            list: true,
            fields: [
              {
                name: 'date',
                label: 'Date',
                type: 'datetime',
              },
              {
                name: 'content',
                label: 'Content',
                type: 'object',
                fields: [
                  {
                    name: 'uk',
                    label: 'UK',
                    type: 'object',
                    fields: [
                      {
                        name: 'title',
                        label: 'Title',
                        type: 'string',
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
                        type: 'string',
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
              {
                name: 'before',
                label: 'Before',
                type: 'image',
              },
              {
                name: 'after',
                label: 'After',
                type: 'image',
              },
            ],
            ui: {
              itemProps: item => {
                return { label: `${item?.content?.uk?.title}` };
              },
              defaultItem: {
                content: {
                  uk: {
                    title: '',
                  },
                  en: {
                    title: '',
                  },
                },
              },
            },
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
