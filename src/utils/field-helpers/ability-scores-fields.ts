import { Field } from 'payload/types';

export const abilityScoresFields: Field[] = [
  {
    name: 'AbilityScores',
    type: 'group',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'Intelligence',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'Wisdom',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'Charisma',
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
            name: 'Dexterity',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'Strength',
            type: 'number',
            defaultValue: 10,
            min: 1,
            max: 30,
          },

          {
            name: 'Constitution',
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
