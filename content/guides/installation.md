---
title: Installation
sort: 0
contributors:
  - pyramidium
---

Bannertime uses Node Package Manager to manage and install dependencies. A question we get asked often is “what’s the best, npm-recommended way of installing npm?" There are multiple ways to install npm.

**The best way to install npm is to install node using nvm. npm is installed as part of node.**

### Install nvm

You can install nvm using cURL:
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```

T> You will need to restart terminal to source nvm.

<sub>For more information go to https://github.com/creationix/nvm</sub>

### Install node

Install the latest stable version of node using:
```bash
$ nvm install stable
```

Use the installed version of node:
```bash
$ nvm use stable
```

To set a default Node version to be used in any new shell, use the alias 'default':
```bash
$ nvm alias default node
```

### Check installations

To check that you are running the latest versions of nvm, node and npm run the following commands.

```bash
$ nvm --version
```

```bash
$ node -v
```

```bash
$ npm -v
```

T> These three commands should display the latest version numbers for each package
