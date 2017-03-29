---
title: Getting Started
sort: 1
contributors:
  - pyramidium
---

Bannertime provides a Command Line Interface (CLI) to generate banner campaigns.

Have a look at the [installation guide](/guides/installation) if you do not have bannertime already set up and running.

Follow these steps to scaffold out a HTML5 banner campaign.

### Pre-requisites

Make sure you have node installed on your machine.

If you do not, follow the installation instructions [here](/documentation/installation).

### Install Yeoman, Yarn, Gulp and Bannertime

Install the required global npm dependencies.

```bash
$ npm i -g yo yarn gulp generator-bannertime
```

### Make a new directory and cd into it

Make a new directory with the name of your project.

```bash
$ mkdir my-campaign && cd $_
```

### Run Bannertime

Run the generator.

```bash
$ yo bannertime
```

T> The generator will then prompt you with a few questions about which kind of project you'd like to generate.

## Sub-generators

#### New banner

You can create **new** banners using the following command.

```bash
$ yo bannertime:new
```

#### Copy banner

You can **copy** banners using the following command.

```bash
$ yo bannertime:copy
```

#### Basic deploy script

You can generate a basic **deploy** script using the following command.

```bash
$ yo bannertime:deploy
```