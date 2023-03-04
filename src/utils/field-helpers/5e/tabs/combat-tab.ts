import { Tab } from "payload/dist/fields/config/types";
import { defensesFields } from "../defenses-fields";
import { healthFields } from "../health-fields";
import { proficiencyFields } from "../proficiency-fields";
import { spellsFields } from "../spells-fields";

export const combatTab: Tab = {
    name: "combat",
    label: "Combat",
    fields: [
        ...healthFields,
        ...proficiencyFields,
        ...spellsFields,
        //TODO: add combat actions
        //TODO: add feats
        ...defensesFields,
    ],
};
