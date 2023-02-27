import { Tab } from 'payload/dist/fields/config/types';

export const notesTab: Tab = {
  label: 'Notes',
  fields: [
    {
      type: 'relationship',
      name: 'notes',
      relationTo: 'notes',
      hasMany: true,
    },
  ],
};
