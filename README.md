# react-select2-ts

[![NPM](https://img.shields.io/npm/v/react-select2-ts.svg)](https://www.npmjs.com/package/react-select2-ts)[![Build Status](https://travis-ci.org/idriss92/react-select2-ts.svg?branch=master)](https://travis-ci.org/idriss92/react-select2-ts)
[![Coverage Status](https://coveralls.io/repos/github/idriss92/react-select2-ts/badge.svg?branch=master)](https://coveralls.io/github/idriss92/react-select2-ts?branch=master)


Lightweight library for select2


```ts
yarn install react-select2-ts
```

## Usage

```ts
import * as React from 'react';
import { JSonResult, Select2 } from 'react-select2-ts';


class App extends React.Component {
  constructor(props: {}) {
    super(props);
    this.onOptionsClick = this.onOptionsClick.bind(this);
  }
  call(value: string): Promise<{data: JSonResult[]}> {
    if (!value) {
      return Promise.resolve({data: []});
    }
    return Promise.resolve({data: [{id: 1, text: 'spain', selected: false}, {id: 2, text: 'russia', selected: false} ]});
  }

  onOptionsClick(event: React.SyntheticEvent<HTMLAnchorElement>) {
    // playground for setting state for example
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Select2
          language=""  
          loadOptions={this.call.bind(this)} 
          id="x" 
          onOptionsClick={this.onOptionsClick}
          minimumInputLength={3}
          placeholder="hello friend" 
        />
      </div>
    );
  }
}

export default App;

```


## Issues and feature requests

Please open issues on [Github](https://github.com/idriss92/react-select2-ts/issues). Issues are easier to address if you include context and code samples.

## Contributing

Please contribute!

## Feedback or contact

Feel free to contact me at idriss2004@hotmail.com.