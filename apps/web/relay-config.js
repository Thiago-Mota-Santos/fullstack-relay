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
  useImportTypeSintax: true,
  featureFrags: {
    relay_resolver_model_syntax_enabled: true,
    use_named_imports_for_relay_resolvers: true,
    enable_relay_resolver_transform: true,
    relay_resolver_enable_terse_syntax: true,
  },
  eagerEsModules: true,
}
