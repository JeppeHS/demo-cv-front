
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://democvapi.celepus.com/graphql',
  overwrite: true,
  documents: ['graphql/**/*.graphql'],
  generates: {
    "gql/generated/": {
      preset: "client",
      overwrite: true
    },
  }
};

export default config;
