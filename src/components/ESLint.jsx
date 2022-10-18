import React from 'react';
import '../styles/eslint.css';

function ESLint() {
  return (
    <div className='lint-container'>
      <h1>ESLintConf</h1>
      <pre>
        {JSON.stringify(
          {
            env: {
              browser: true,
              es2021: true,
            },
            settings: {
              react: {
                version: 'detect',
              },
            },
            extends: [
              'plugin:react/recommended',
              'standard',
              'eslint-config-prettier',
            ],
            overrides: [],
            parserOptions: {
              ecmaVersion: 'latest',
              sourceType: 'module',
            },
            plugins: ['react'],
            rules: {},
          },
          undefined,
          2
        )}
      </pre>
    </div>
  );
}

export default ESLint;
