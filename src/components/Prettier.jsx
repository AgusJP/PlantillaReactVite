import React from 'react';
import '../styles/prettier.css';

function Prettier() {
  return (
    <div className='prettier-container'>
      <h1>PrettierConf</h1>
      <pre>
        {JSON.stringify(
          {
            useTabs: true,
            singleQuote: true,
            jsxSingleQuote: true,
            arrowParens: 'avoid',
          },
          undefined,
          2
        )}
      </pre>
    </div>
  );
}

export default Prettier;
