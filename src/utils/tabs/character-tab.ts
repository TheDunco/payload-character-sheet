import { Tab } from 'payload/dist/fields/config/types';
import { alignmentOptions } from '../options-helpers/alignment-options';
import { backgroundOptions } from '../options-helpers/background-options';
import { classOptions } from '../options-helpers/class-options';
import { option } from '../options-helpers/option';

export const characterTab: Tab = {
  name: 'character',
  label: 'Character',
  fields: [
    {
      type: 'row',
      fields: [
        //TODO: Afterchange hook to add up levels for overall level
        {
          name: 'overallLevel',
          label: 'Level',
          type: 'number',
          required: true,
          defaultValue: 1,
          admin: {
            width: '10%',
            readOnly: true,
          },
        },

        {
          type: 'number',
          name: 'xp',
          label: 'XP',
          admin: {
            width: '20%',
          },
        },

        //TODO: Make prof bonus based on level
        {
          type: 'number',
          name: 'proficiencyBonus',
          label: 'Proficiency Bonus',
          admin: {
            width: '10%',
            readOnly: true,
          },
        },

        //TODO: Calculate AC as part of defenses
        {
          type: 'number',
          name: 'armorClass',
          label: 'AC',
          admin: {
            width: '10%',
          },
        },

        {
          type: 'number',
          name: 'speed',
          admin: {
            width: '10%',
          },
        },
      ],
    },

    {
      type: 'checkbox',
      name: 'inspiration',
    },

    {
      type: 'array',
      name: 'classes',
      fields: [
        {
          name: 'class',
          type: 'select',
          options: [...classOptions],
        },

        {
          name: 'levels',
          type: 'number',
          defaultValue: 1,
          max: 20,
        },
      ],
    },

    {
      type: 'select',
      name: 'alignment',
      options: [...alignmentOptions],
    },

    {
      type: 'select',
      name: 'background',
      options: [...backgroundOptions],
    },

    {
      type: 'collapsible',
      label: 'Visual Appearance',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'number',
              name: 'age',
            },

            {
              type: 'text',
              name: 'height',
            },

            {
              type: 'text',
              name: 'weight',
            },
          ],
        },

        {
          type: 'select',
          name: 'size',
          options: [
            option('Tiny'),
            option('Small'),
            option('Medium'),
            option('Large'),
            option('Huge'),
            option('Gargantuan'),
          ],
        },

        {
          type: 'text',
          name: 'eyes',
        },

        {
          type: 'text',
          name: 'hair',
        },

        {
          type: 'text',
          name: 'skin',
        },

        {
          type: 'text',
          name: 'clothes',
        },

        {
          type: 'collapsible',
          label: 'Other',
          fields: [
            {
              type: 'richText',
              name: 'other',
            },
          ],
        },
      ],
    },

    {
      type: 'textarea',
      name: 'languages',
    },

    {
      type: 'textarea',
      name: 'proficiencies',
    },
  ],
};
