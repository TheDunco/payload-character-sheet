import { Tab } from 'payload/dist/fields/config/types';
import { option } from '../../../option';

export const trackablesTab: Tab = {
    label: 'Trackables',
    fields: [
        {
            type: 'array',
            name: 'trackables',
            fields: [
                {
                    type: 'text',
                    name: 'trackableName',
                },

                {
                    type: 'number',
                    name: 'trackableMaximum',
                    label: 'Maximum',
                },

                {
                    type: 'number',
                    name: 'trackableCurrent',
                    label: 'Current',
                },

                {
                    type: 'select',
                    name: 'trackableType',
                    label: 'Type',
                    options: [option('Checkboxes'), option('Number')],
                },

                {
                    type: 'textarea',
                    name: 'trackableDescription',
                },
            ],
        },
    ],
};
