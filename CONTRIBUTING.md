**helpers /**
[Readme](https://cosmic.plus/#view:js-helpers)
• [Contributing](https://cosmic.plus/#view:js-helpers/CONTRIBUTING)
• [Changelog](https://cosmic.plus/#view:js-helpers/CHANGELOG)

# Contributing

Welcome to new contributors! This project is open to input & edits.

## Bug Reports & Feature Requests

Please use the [dedicated form](https://github.com/cosmic-plus/js-helpers/issues/new/choose).

## Pull Requests

1. Fork [js-helpers](https://github.com/cosmic-plus/js-helpers).
2. Commit your changes to the fork.
3. Create a pull request.

If you want to implement a new feature, please get in touch first:
[Keybase](https://keybase.io/team/cosmic_plus),
[Telegram](https://t.me/cosmic_plus), [Email](mailto:mister.ticot@cosmic.plus).

## Project Structure

- `es5/`: JS transpiled code (generated at build time, not commited).
- `src/`: JS source code.
- `test/`: Test suite.

## Workflow

**Clone:**

```
git clone https://github.com/cosmic-plus/js-helpers
```

**Commit:**

```
npm run test
npm run lint
git ci ...
```

Please sign your commits with your PGP key.

**Release:**

First of all update the package version into `package.json`.

```
export version={semver}
npm run make-release
npm run publish-release
```

Please sign your commits and tags with your PGP key.

## Scripts

Those helpers require a POSIX shell.

- `npm run test`: Run the test suite.
- `npm run lint`: Lint code.
- `npm run clean`: Clean the `web/` directory.
- `npm run build`: Build the transpiled code.
- `npm run watch`: Automatically transpile code after each change.
- `version={semver} npm run make-release`: Build & locally commit release.
- `version={semver} npm run publish-release`: Tag, push & publish release.
