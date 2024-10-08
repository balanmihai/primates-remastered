export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Hike', value: 'Hike'},
          {title: 'Mountaineering', value: 'Mountaineering'},
          {title: 'Run', value: 'Run'},
          {title: 'Bike', value: 'Bike'},
        ],
      },
    },
    {
      name: 'crew',
      type: 'array',
      title: 'Crew',
      of: [{type: 'string'}],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
}
