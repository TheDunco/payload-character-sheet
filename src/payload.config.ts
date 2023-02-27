import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { FifthEditionCharacter } from './collections/5eCharacter';
import { Media } from './collections/Upload';
import { Notes } from './collections/Notes';
import { Campaigns } from './collections/Campaign';

export default buildConfig({
  serverURL:
    process.env.NODE_ENV === 'production'
      ? 'https://payload-character-sheet-production.up.railway.app/'
      : 'http://localhost:3002',
  admin: {
    user: Users.slug,
  },
  collections: [Users, FifthEditionCharacter, Notes, Campaigns, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
