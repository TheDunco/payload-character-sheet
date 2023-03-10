import { Tab } from 'payload/dist/fields/config/types';
import { option } from '../../../option';
import { getNSDFields } from '../field-helpers/get-nsd-fields';

export const trackablesTab: Tab = {
    label: 'Trackables',
    fields: [
        {
            type: 'array',
            name: 'trackables',
            fields: [
                ...getNSDFields(),

                {
                    type: 'number',
                    name: 'maximum',
                },

                {
                    type: 'number',
                    name: 'current',
                },

                {
                    type: 'select',
                    name: 'type',
                    options: [option('Checkboxes'), option('Number')],
                },

                {
                    type: 'checkbox',
                    name: 'resetsOnShortRest',
                },

                {
                    type: 'checkbox',
                    name: 'resetsOnLongRest',
                },
            ],
        },
    ],
};
