import { Field } from 'payload/types';
import { option } from '../../option';
import { abilityScoreOptions } from './ability-score-options';
import { diceOptions } from '../diceTypes';
import { damageTypeOptions } from './damage-type-options';

export const actionsFields: Field[] = [
    {
        type: 'array',
        name: 'actions',
        fields: [
            {
                type: 'text',
                name: 'name',
            },

            {
                type: 'select',
                name: 'type',
                options: [
                    option('Melee'),
                    option('Ranged'),
                    option('Spell'),
                    option('Power'),
                    option('Special'),
                    option('Potion'),
                    option('Magic Item'),
                    option('Other'),
                ],
            },

            {
                type: 'text',
                name: 'range',
            },

            {
                type: 'checkbox',
                name: 'proficient',
            },

            {
                type: 'group',
                name: 'attack',
                fields: [
                    {
                        type: 'select',
                        name: 'abilityScore',
                        options: abilityScoreOptions,
                    },

                    {
                        type: 'number',
                        name: 'miscModifier',
                    },

                    {
                        type: 'number',
                        name: 'magicModifier',
                    },

                    {
                        type: 'number',
                        name: 'attackBonus',
                    },
                ],
            },

            {
                type: 'group',
                name: 'damage',
                fields: [
                    {
                        type: 'number',
                        name: 'diceCount',
                    },

                    {
                        type: 'select',
                        name: 'diceType',
                        options: diceOptions,
                    },

                    {
                        type: 'select',
                        name: 'damageAbilityScore',
                        options: abilityScoreOptions,
                    },

                    {
                        type: 'select',
                        name: 'damageType',
                        options: damageTypeOptions,
                    },

                    {
                        type: 'number',
                        name: 'damageMiscModifier',
                    },

                    {
                        type: 'number',
                        name: 'damageMagicModifier',
                    },

                    {
                        type: 'number',
                        name: 'damageBonus',
                    },
                ],
            },

            {
                type: 'text',
                name: 'summary',
            },

            {
                type: 'textarea',
                name: 'description',
            },
        ],
    },
];
