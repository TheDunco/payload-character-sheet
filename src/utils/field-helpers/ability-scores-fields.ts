import { Field } from 'payload/types';

export const abilityScoresFields: Field[] = [
  {
    name: 'abilityScores',
    type: 'group',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'intelligence',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'wisdom',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'charisma',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },
        ],
      },

      {
        type: 'row',
        fields: [
          {
            name: 'dexterity',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'strength',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'constitution',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },
        ],
      },
    ],
  },
];
