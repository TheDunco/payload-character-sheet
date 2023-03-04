import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { abilityScoresAndSkillsTab } from '../utils/field-helpers/5e/tabs/ability-scores-and-skills-tab';
import { characterTab } from '../utils/field-helpers/5e/tabs/character-tab';
import { combatTab } from '../utils/field-helpers/5e/tabs/combat-tab';
import { notesTab } from '../utils/field-helpers/5e/tabs/notes-tab';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
export const FifthEditionCharacter: CollectionConfig = {
    slug: 'fifth-edition-character',
    labels: {
        singular: '5e Character',
        plural: '5e Characters',
    },

    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'level', 'users'],
    },

    access: {
        read: isAdminOrSelf,
        create: isAdminOrSelf,
        update: isAdminOrSelf,
        delete: isAdminOrSelf,
    },

    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },

        {
            name: 'pictures',
            label: 'Picture(s)',
            type: 'relationship',
            hasMany: true,
            relationTo: 'media',
            admin: {
                position: 'sidebar',
            },
        },

        {
            type: 'tabs',
            //TODO: Add equipment tab
            tabs: [characterTab, abilityScoresAndSkillsTab, combatTab, notesTab],
        },
    ],
};
