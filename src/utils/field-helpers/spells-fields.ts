import { Field } from 'payload/types';
import { option } from '../options-helpers/option';

export const spellsFields: Field[] = [
  {
    type: 'collapsible',
    label: 'Spells',
    fields: [
      {
        type: 'collapsible',
        label: 'Spell Slots',
        fields: [
          {
            type: 'array',
            name: 'spellSlots',
            fields: [
              {
                type: 'select',
                name: 'spellSlotLevel',
                options: [
                  option('Cantrip'),
                  option('1st'),
                  option('2nd'),
                  option('3rd'),
                  option('4th'),
                  option('5th'),
                  option('6th'),
                  option('7th'),
                  option('8th'),
                  option('9th'),
                ],
              },

              //TODO: Validate that current is less than or equal to max
              {
                type: 'number',
                name: 'currentSpellSlots',
              },

              {
                type: 'number',
                name: 'maxSpellSlots',
                min: 0,
                max: 5,
              },
            ],
          },
        ],
      },

      {
        type: 'collapsible',
        label: 'Spells',
        fields: [
          {
            type: 'array',
            name: 'spells',
            fields: [
              {
                type: 'text',
                name: 'name',
              },

              {
                type: 'select',
                name: 'school',
                options: [
                  option('Abjuration'),
                  option('Conjuration'),
                  option('Divination'),
                  option('Enchantment'),
                  option('Evocation'),
                  option('Illusion'),
                  option('Necromancy'),
                  option('Transmutation'),
                  option('Dunamancy'),
                  option('Other'),
                ],
              },

              {
                type: 'richText',
                name: 'description',
              },

              {
                type: 'text',
                name: 'castingTime',
              },

              {
                type: 'text',
                name: 'range',
              },

              {
                type: 'text',
                name: 'components',
              },

              {
                type: 'text',
                name: 'duration',
              },

              {
                type: 'number',
                name: 'level',
                min: 0,
                max: 9,
              },
            ],
          },
        ],
      },
    ],
  },
];
