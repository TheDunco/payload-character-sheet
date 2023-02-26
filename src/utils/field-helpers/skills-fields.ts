import { Field } from 'payload/types';

const skill = (name: string, label?: string): Field[] => [
  {
    label: label ? label : name,
    type: 'collapsible',
    fields: [
      {
        type: 'group',
        name,
        fields: [
          {
            name: 'Proficient',
            type: 'checkbox',
            admin: {
              width: '10%',
            },
          },
          {
            name: 'Bonus',
            type: 'number',
            defaultValue: 0,
            admin: {
              readOnly: true,
              width: '10%',
            },
          },
        ],
      },
    ],
  },
];

export const skillsFields: Field[] = [
  {
    type: 'group',
    name: 'IntelligenceSkills',
    fields: [
      ...skill('Arcana'),
      ...skill('History'),
      ...skill('Investigation'),
      ...skill('Nature'),
      ...skill('Religion'),
    ],
  },

  {
    type: 'group',
    name: 'WisdomSkills',
    fields: [
      ...skill('AnimalHandling', 'Animal Handling'),
      ...skill('Insight'),
      ...skill('Medicine'),
      ...skill('Perception'),
      ...skill('Survival'),
    ],
  },

  {
    type: 'group',
    name: 'CharismaSkills',
    fields: [
      ...skill('Deception'),
      ...skill('Intimidation'),
      ...skill('Performance'),
      ...skill('Persuasion'),
    ],
  },

  {
    type: 'group',
    name: 'DexteritySkills',
    fields: [
      ...skill('Acrobatics'),
      ...skill('SleightOfHand', 'Sleight of Hand'),
      ...skill('Stealth'),
    ],
  },
];
