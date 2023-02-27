import { CollectionConfig } from 'payload/types';
import { abilityScoresAndSkillsTab } from '../utils/tabs/ability-scores-and-skills-tab';
import { characterTab } from '../utils/tabs/character-tab';
import { combatTab } from '../utils/tabs/combat-tab';
import { notesTab } from '../utils/tabs/notes-tab';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
export const FifthEditionCharacter: CollectionConfig = {
  slug: 'fifth-edition-character',
  labels: {
    singular: '5e Character',
    plural: '5e Characters',
  },

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        position: 'sidebar',
        allowCreate: false,
      },
    },

    {
      name: 'pictures',
      label: 'Picture(s)',
      type: 'relationship',
      hasMany: true,
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },

    {
      type: 'tabs',
      //TODO: Add equipment tab
      //TODO: Add notes tab
      tabs: [characterTab, abilityScoresAndSkillsTab, combatTab, notesTab],
    },
  ],
};
