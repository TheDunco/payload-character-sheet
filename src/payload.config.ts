import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { FifthEditionCharacter } from './collections/5eCharacter';
import { Media } from './collections/Upload';
import { Notes } from './collections/Notes';
import { Campaigns } from './collections/Campaign';
import { Logo } from './components/Logo';
import { Dashboard } from './components/Dashboard';
import { KidsOnBroomsCharacter } from './collections/KidsOnBroomsCharacter';
import { SignUp } from './components/SignUp';
import { SignInHeader } from './components/SignInHeader';

export default buildConfig({
    serverURL: process.env.BASE_URL || 'http://localhost:3002',
    admin: {
        user: Users.slug,
        meta: {
            favicon: '/assets/favicon.ico',
            titleSuffix: '| Book of Names Admin',
            ogImage: '/assets/logo.svg',
        },
        components: {
            views: {
                Dashboard,
            },
            graphics: {
                Logo: Logo,
                Icon: Logo,
            },
            beforeLogin: [SignInHeader],
            afterLogin: [SignUp],
        },
    },
    collections: [FifthEditionCharacter, KidsOnBroomsCharacter, Campaigns, Notes, Media, Users],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
        disablePlaygroundInProduction: false,
    },
});

export const customConfig = {
    appVersion: '0.0.1',
};
