import { Tab } from 'payload/dist/fields/config/types';
import { actionsFields } from '../actions-fields';
import { defensesFields } from '../defenses-fields';
import { featFields } from '../feat-fields';
import { healthFields } from '../health-fields';
import { proficiencyFields } from '../proficiency-fields';
import { spellsFields } from '../spells-fields';

export const combatTab: Tab = {
    name: 'combat',
    label: 'Combat',
    fields: [
        ...healthFields,
        ...proficiencyFields,
        ...spellsFields,
        ...actionsFields,
        ...defensesFields,
        ...featFields,
    ],
};
