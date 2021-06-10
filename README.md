## Paulo Luan's Playground (FrontEnd Monorepo)

<span id="top"></span>

<p align="center">
    <a href="#"><img src="https://github.com/pauloluan/assets/blob/master/back.png?raw=true" width="100"></a>
</p>

<p align="center">
    <a href="https://github.com/PauloLuan/playground/actions/workflows/ci.yml"><img src="https://img.shields.io/github/workflow/status/pauloluan/playground/ci?style=for-the-badge"></a>
    <a href="https://pt-br.reactjs.org/"><img src="https://img.shields.io/badge/ReactJS-17.x-blue?style=for-the-badge"></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-14.x-green?style=for-the-badge"></a>
</p>

[![Dependency Status][daviddm-image]][daviddm-url] [![standard][standard-image]][standard-url] [![forthebadge][itworks-image]][itworks-url]

[daviddm-image]: https://img.shields.io/david/pauloluan/playground.svg?style=for-the-badge
[daviddm-url]: https://david-dm.org/pauloluan/playground
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=for-the-badge
[standard-url]: http://npm.im/standard
[itworks-image]: https://forthebadge.com/images/badges/it-works-why.svg
[itworks-url]: https://forthebadge.com

## 💡 Introduction

PauloLuan Playground-monorepo

## 📝 Minimal Requirements

- NodeJs 16.x

## 🚀 Install

```sh
$ git clone https://github.com/pauloluan/playground.git
```

Just type install and the app magically will execute the lerna bootstrap command and the apps are gonna build for the first time: 

```sh
$ yarn install
```

This will start all packages in development mode in parallel

```sh
$ yarn dev
```

If you wanna checkout the storybook components you have to run:

```sh
$ yarn storybook
```

For unit tests:

```sh
$ yarn test
```

For more commands please checkout the scripts section on `package.json`

[🔝 back to top](#top)
