import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import { FifthEditionCharacter } from './collections/5eCharacter';

export default buildConfig({
  serverURL: 'http://localhost:3002',
  admin: {
    user: Users.slug,
  },
  collections: [Users, FifthEditionCharacter],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
