// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
// const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');

module.exports = function override(config, env) {
  // config = rewireInlineImportGraphqlAst(config, env);
  // config = rewireReactHotLoader(config, env);

  return config;
}