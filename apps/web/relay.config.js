module.exports = {
  src: './src',
  language: 'typescript',
  schema: './data/schema.gql',
  artifactDirectory: './__generated__',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/.next/**',
  ],
}
