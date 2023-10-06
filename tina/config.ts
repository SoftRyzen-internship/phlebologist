import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_VERSEL_GIT_COMMIT_REF || '',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || '',
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
            required: true,
          },
          {
            name: 'video',
            label: 'Video',
            type: 'string',
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
                    required: true,
                  },
                  {
                    name: 'profession',
                    label: 'Profession',
                    type: 'string',
                    required: true,
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
                    required: true,
                  },
                  {
                    name: 'profession',
                    label: 'Profession',
                    type: 'string',
                    required: true,
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
                    required: true,
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
                    required: true,
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
                    required: true,
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
                    required: true,
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
                required: true,
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
                        required: true,
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
                        required: true,
                      },
                    ],
                  },
                ],
              },
            ],
            ui: {
              itemProps: item => {
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
                type: 'string',
                required: true,
              },
              {
                name: 'description',
                label: 'Description',
                type: 'string',
                required: true,
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
                required: true,
              },
              {
                name: 'description',
                label: 'Description',
                type: 'string',
                required: true,
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
                required: true,
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
                        required: true,
                      },
                      {
                        name: 'description',
                        label: 'Description',
                        type: 'rich-text',
                        required: true,
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
                        required: true,
                      },
                      {
                        name: 'description',
                        label: 'Description',
                        type: 'rich-text',
                        required: true,
                      },
                    ],
                  },
                ],
              },
              {
                name: 'before',
                label: 'Before',
                type: 'image',
                required: true,
              },
              {
                name: 'after',
                label: 'After',
                type: 'image',
                required: true,
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
      {
        name: 'reviews',
        label: 'Reviews',
        path: 'content/reviews',
        format: 'md',
        fields: [
          {
            name: 'uk',
            label: 'UK',
            type: 'object',
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
                    required: true,
                  },
                  {
                    name: 'photo',
                    label: 'Photo',
                    type: 'image',
                    required: true,
                  },
                  {
                    name: 'video',
                    label: 'Video',
                    type: 'string',
                  },
                  {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'telegram',
                    label: 'Telegram',
                    type: 'string',
                  },
                  {
                    name: 'review',
                    label: 'Review',
                    type: 'rich-text',
                    required: true,
                  },
                ],
                ui: {
                  itemProps: item => {
                    return { label: `${item?.name}` };
                  },
                  defaultItem: {
                    name: '',
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
                name: 'case',
                label: 'Case',
                type: 'object',
                list: true,
                fields: [
                  {
                    name: 'date',
                    label: 'Date',
                    type: 'datetime',
                    required: true,
                  },
                  {
                    name: 'photo',
                    label: 'Photo',
                    type: 'image',
                    required: true,
                  },
                  {
                    name: 'video',
                    label: 'Video',
                    type: 'string',
                  },
                  {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'telegram',
                    label: 'Telegram',
                    type: 'string',
                  },
                  {
                    name: 'review',
                    label: 'Review',
                    type: 'rich-text',
                    required: true,
                  },
                ],
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
