---
id: extensions-overview
title: Extensions overview
sidebar_label: Overview
---

## Overview

Extensions allow to extend functionality of Hookstate. An extension can:
- provide state lifecycle callbacks and maintain its own state associated with the Hookstate State
- add extension methods and properties to the Hookstate State object returned by `hookstate` and `useHookstate` functions
- work identically on a global and local states
- be combined together with other extensions via `extend` function and multiple extension can be added to the same state ([Demo](./extensions-snapshotable))
- use the functionality provided by other extensions  

> Please, submit pull request if you would like your extensions included in the list.

## Standard extensions

Extension | Description | Example | Package | Version
-|-|-|-|-
Clonable | Defines state cloning capabilities. | In Snapshotable demo | `@redocly/hookstate-clonable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-clonable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-clonable)
Comparable | Defines state comparison capabilities. |  In Snapshotable demo | `@redocly/hookstate-comparable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-comparable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-comparable)
Serializable | Adds serialization and deserialization capabilities to a state. |  In Snapshotable demo | `@redocly/hookstate-serializable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-serializable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-serializable)
Identifiable | Enable state labeling and identification by string identifier. |  In Snapshotable demo | `@redocly/hookstate-identifiable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-identifiable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-identifiable)
Initializable | Provides a way to run one off initialization callback after a state is created. |  In Snapshotable demo | `@redocly/hookstate-initializable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-initializable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-initializable)
Subscribable | Make it easier to subscribe a custom callback to state changes. | [Demo](./extensions-subscribable) | `@redocly/hookstate-subscribable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-subscribable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-subscribable)
Snapshotable | Enables access to an initial value of a [State](typedoc-hookstate-core#state) and allows to check if the current value of the state is modified (compares with the initial value). Helps with tracking of *modified* form field(s). | [Demo](./extensions-snapshotable) | `@redocly/hookstate-snapshotable` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-snapshotable.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-snapshotable)
Validation | Enables validation and error / warning messages for a state. Useful for validation of form fields and form states. | [Demo](./extensions-validation) | `@redocly/hookstate-validation` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-validation.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-validation)
Localstored | Enables persistence of managed states to browser's local storage. | [Demo](./extensions-localstored) | `@redocly/hookstate-localstored` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-localstored.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-localstored)
Broadcasted | Enables synchronization of a state across browser tabs. | [Demo](./extensions-broadcasted) | `@redocly/hookstate-broadcasted` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-broadcasted.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-broadcasted)

## Development tools

Extension | Description | Example | Package | Version
-|-|-|-|-
DevTools | Development tools for Hookstate. Install [Chrome browser's extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and [activate the extension](./devtools) in your app. [Learn more](./devtools) about using the development tools. | [Demo](https://github.com/avkonst/hookstate/tree/master/docs/demos/todolist) | `@redocly/hookstate-devtools` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-devtools.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-devtools)
Logged | Enables logging into the development console (or elsewhere if specified) when state is created, updated and destroyed. |  | `@redocly/hookstate-logged` | [![npm version](https://img.shields.io/npm/v/@redocly/hookstate-logged.svg?maxAge=300&label=version&colorB=007ec6)](https://www.npmjs.com/package/@redocly/hookstate-logged)
