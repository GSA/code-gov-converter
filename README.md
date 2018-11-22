# code-json-converter
WIP: Converts publiccode.yml to code.json

# install
```
npm install @code.gov/converter
```

# usage
To convert a publiccode.yml file to a code.json file
```
const { readFileSync, writeFileSync } from 'fs';
const { toCodeDotGov } from '@code.gov/converter';

const text = readFileSync('./publiccode.yml');

const data = toCodeDotJSON(text);

writeFileSync('code.json', JSON.stringify(data));
```

# contact
daniel.dufour@gsa.gov
