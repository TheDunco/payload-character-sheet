import { CollectionConfig } from 'payload/types';
import { abilityScoresFields } from '../utils/field-helpers/ability-scores-fields';
import { alignmentOptions } from '../utils/options-helpers/alignment-options';
import { classOptions } from '../utils/options-helpers/class-options';
import { skillsFields } from '../utils/field-helpers/skills-fields';
import { backgroundOptions } from '../utils/options-helpers/background-options';
import { option } from '../utils/options-helpers/option';
import { abilityScoresAndSkillsTab } from '../utils/tabs/ability-scores-and-skills-tab';
import { characterTab } from '../utils/tabs/character-tab';
import { combatTab } from '../utils/tabs/combat-tab';

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
      tabs: [characterTab, abilityScoresAndSkillsTab, combatTab],
    },
  ],
};
