import { CollectionConfig } from 'payload/types';

export const Campaigns: CollectionConfig = {
  slug: 'campaigns',

  labels: {
    singular: 'Campaign',
    plural: 'Campaigns',
  },

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },

    {
      type: 'relationship',
      name: 'players',
      relationTo: 'users',
      hasMany: true,
    },

    {
      type: 'relationship',
      name: 'characters',
      //TODO: Add other character sheet types
      relationTo: 'fifth-edition-character',
      hasMany: true,
    },

    {
      type: 'relationship',
      name: 'media',
      relationTo: 'media',
      hasMany: true,
    },

    {
      type: 'relationship',
      name: 'notes',
      relationTo: 'notes',
      hasMany: true,
    },
  ],
};
