import { CollectionConfig } from 'payload/types';
import { abilityScoresFields } from '../utils/field-helpers/ability-scores-fields';
import { alignmentOptions } from '../utils/options-helpers/alignment-options';
import { classOptions } from '../utils/options-helpers/class-options';
import { skillsFields } from '../utils/field-helpers/skills-fields';
import { backgroundOptions } from '../utils/options-helpers/background-options';
import { option } from '../utils/options-helpers/option';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
export const FifthEditionCharacter: CollectionConfig = {
  slug: 'fifth-edition-character',
  labels: {
    singular: '5e Character',
    plural: '5e Characters',
  },

  admin: {
    useAsTitle: 'name',
    hideAPIURL: true,
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
      admin: {
        position: 'sidebar',
        allowCreate: false,
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          name: 'AbilityScoresAndSkills',
          label: 'Ability Scores & Skills',
          fields: [
            {
              label: 'Ability Scores',
              type: 'collapsible',
              fields: [...abilityScoresFields],
              required: true,
            },

            {
              type: 'collapsible',
              label: 'Skills',
              fields: [...skillsFields],
            },
          ],
        },

        //TODO: Afterchange hook to add up levels for overall level
        {
          name: 'Character',
          label: 'Character',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'OverallLevel',
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
                  name: 'XP',
                  admin: {
                    width: '20%',
                  },
                },

                //TODO: Make prof bonus based on level
                {
                  type: 'number',
                  name: 'ProficiencyBonus',
                  label: 'Proficiency Bonus',
                  admin: {
                    width: '10%',
                    readOnly: true,
                  },
                },

                //TODO: Calculate AC as part of defenses
                {
                  type: 'number',
                  name: 'ArmorClass',
                  label: 'AC',
                  admin: {
                    width: '10%',
                  },
                },

                {
                  type: 'number',
                  name: 'Speed',
                  admin: {
                    width: '10%',
                  },
                },
              ],
            },

            {
              type: 'checkbox',
              name: 'Inspiration',
            },

            {
              type: 'array',
              name: 'Classes',
              fields: [
                {
                  name: 'Class',
                  type: 'select',
                  options: [...classOptions],
                },
                {
                  name: 'Levels',
                  type: 'number',
                  defaultValue: 1,
                  max: 20,
                },
              ],
            },

            {
              type: 'select',
              name: 'Alignment',
              options: [...alignmentOptions],
            },

            {
              type: 'select',
              name: 'Background',
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
                      name: 'Age',
                    },

                    {
                      type: 'text',
                      name: 'Height',
                    },

                    {
                      type: 'text',
                      name: 'Weight',
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
                  name: 'Eyes',
                },

                {
                  type: 'text',
                  name: 'Hair',
                },

                {
                  type: 'text',
                  name: 'skin',
                },

                {
                  type: 'text',
                  name: 'Clothes',
                },

                {
                  type: 'text',
                  name: 'Other',
                },
              ],
            },

            {
              type: 'textarea',
              name: 'Languages',
            },

            {
              type: 'textarea',
              name: 'Proficiencies',
            },
          ],
        },
      ],
    },
  ],
};
