import { Tab } from 'payload/dist/fields/config/types';
import { defensesFields } from '../field-helpers/defenses-fields';
import { healthFields } from '../field-helpers/health-fields';
import { proficiencyFields } from '../field-helpers/proficiency-fields';
import { spellsFields } from '../field-helpers/spells-fields';
import { option } from '../options-helpers/option';

export const combatTab: Tab = {
  name: 'combat',
  label: 'Combat',
  fields: [
    ...healthFields,
    ...proficiencyFields,
    ...spellsFields,
    //TODO: add combat actions
    //TODO: add feats
    ...defensesFields,
  ],
};
