# Coffee Shop

## Table of Contents

- [Demo](#demo)
- [Requirements & their implementation](#requirements-and-implementation)
- [Editor Setup](#editor-setup)
- [Branching](#branching)
- [Development Setup](#development-setup)
- [Project Configuration](#project-configuration)

## Demo

https://github.com/amatyaichhya/Coffee-Shop/assets/40434515/cb5ab26a-1371-4c70-95aa-774f36551a3a

# Requirements and implementation

### Animation

`react-native-shared-elements` has been used for animated navigation transitions between list and detail screens

### Auth

Social login has been implemented for google

### Styling/Theme

- Styling has been done using only the Stylesheet API provided by React Native
- Dark & Light themes have been implemented, the switch is automatic depending on the system's theme with the default being the light theme

### State Management & Networking

Redux-toolkit & Redux-toolkit-query have been used for managing the app state & managing the web API interactions

<br>

# Editor Setup

Following tools are used to make code look consistent. Please install the mentioned tools below,

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

# Branching

Git Flow

# Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Android Studio](https://developer.android.com/studio)
- [XCode](https://developer.apple.com/xcode/)

> Please make sure that you have follow environment setup steps as described in [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) documentation.

# Project Configuration

### We use [react-native-config](https://github.com/luggit/react-native-config) to manage and inject `.env` variables to native codes.

> Make sure to follow their documentation for more information.

### `.env` Files

`.env` files are where we save all the environment variables. They are placed under project root directory.

```
|- project-root
  |- .env.sample
  |- .env
  |- .env.development
```

### `.env.sample`

```
API_URL=
ENVIRONMENT=
WEB_CLIENT_ID=
```

### After setting `env` variables follow following steps to get up and running with development. Run following commands from project root directory

### 1. Install dependencies

```
yarn
```

### 2. Link necessary dependencies

```
cd ios && pod install
```

### 3. Start react-native metro bundler

```
npx react-native start
```

### 4. Build the app

```
npx react-native run-ios
```

```
npx react-native run-android
```
