# linkedin-github-bridge

Link GitHub usernames to LinkedIn profiles and validate cross-profile consistency.

## Installation

```bash
npm install linkedin-github-bridge
```

## Quick Start

```typescript
import { LinkedinGithubBridge } from "linkedin-github-bridge";

const instance = new LinkedinGithubBridge();
const result = await instance.run();
console.log(result);
```

## Features

- Pluggable “profile source” adapters (GitHub now, LinkedIn later/manual)
- Consistency rules (name, URL presence, company/domain hints)
- Human-in-the-loop verification prompts
- Machine-readable reports for HRIS/ATS ingestion

## API Reference

### `LinkedinGithubBridge`

#### Constructor

```typescript
new LinkedinGithubBridge(options?: LinkedinGithubBridgeOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<LinkedinGithubBridgeResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
