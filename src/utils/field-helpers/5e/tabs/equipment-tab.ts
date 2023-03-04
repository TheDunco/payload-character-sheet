import { Tab } from 'payload/dist/fields/config/types';

export const equipmentTab: Tab = {
    label: 'Equipment',
    fields: [
        {
            type: 'array',
            name: 'equipment',
            fields: [
                {
                    type: 'text',
                    name: 'name',
                },

                {
                    type: 'number',
                    name: 'quantity',
                },

                {
                    type: 'checkbox',
                    name: 'equipped',
                },

                {
                    type: 'checkbox',
                    name: 'carried',
                },

                {
                    type: 'number',
                    name: 'weight',
                },
            ],
        },

        {
            type: 'group',
            name: 'money',
            fields: [
                {
                    type: 'number',
                    name: 'platinum',
                    defaultValue: 0,
                },

                {
                    type: 'number',
                    name: 'gold',
                    defaultValue: 0,
                },

                {
                    type: 'number',
                    name: 'silver',
                    defaultValue: 0,
                },

                {
                    type: 'number',
                    name: 'copper',
                    defaultValue: 0,
                },
            ],
        },
    ],
};
