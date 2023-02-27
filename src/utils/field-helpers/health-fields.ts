import { Field } from 'payload/types';
import { option } from '../options-helpers/option';

export const healthFields: Field[] = [
  {
    type: 'collapsible',
    label: 'Health',
    fields: [
      {
        type: 'group',
        name: 'health',
        fields: [
          {
            type: 'row',
            fields: [
              {
                type: 'number',
                name: 'currentHitPoints',
                label: 'Hit Points',
                defaultValue: 10,
              },

              {
                type: 'number',
                name: 'maxHitPoints',
                defaultValue: 10,
              },

              {
                name: 'temporaryHitPoints',
                type: 'number',
                defaultValue: 0,
              },
            ],
          },

          {
            type: 'group',
            name: 'hitDice',
            fields: [
              {
                type: 'collapsible',
                label: 'Hit Dice',
                fields: [
                  {
                    type: 'select',
                    name: 'dieType',
                    options: [
                      option('d4'),
                      option('d6'),
                      option('d8'),
                      option('d10'),
                      option('d12'),
                      option('d20'),
                    ],
                  },

                  // TODO: Max value should be level
                  {
                    type: 'number',
                    name: 'currentHitDice',
                  },
                ],
              },
            ],
          },

          {
            type: 'group',
            name: 'deathSaves',
            admin: {
              condition: (_, siblingData) => {
                const { currentHitPoints } = siblingData;
                return currentHitPoints <= 0;
              },
            },
            fields: [
              {
                type: 'number',
                name: 'deathSavesSuccesses',
              },

              {
                type: 'number',
                name: 'deathSavesFailures',
              },
            ],
          },
        ],
      },
    ],
  },
];
