---
title: "Setting Up Shared Code and Boilerplates"
date: 2020-12-05T05:32:36Z
draft: false 
categories: ["Setup"]
tags: ["shared-code","tests","jsdoc","CI/CD"]
---

So I have finally stated to setup the boilerplate code which will be used in this project's shared code. So far I am just looking at setting up the base npm mopdule with one placeholder function. My plan is also setup and use GitHub's package system which allows you to publish npm packages.

The few things I would like to setup for this sub project would be:
- Unit tests
- Typescript
- JSDoc (or some typescript alternative)
- CI/CD with github actions

# Unit Testing
For this I will just be using mocha and chai.

# Documentation
I will be following the typescript documnetation standart from Microsoft. However, I will, for now, not be generation any documentation from it. Ideally I would like to just output the docs to the README of the project or a neighburing markdown documnet. I have managed to compile markdown using jsdoc2md package, however, this will not provide any ts typings. For now I will just stick to just commenting the code properly, and someday I will comeback and figure out a way to compile markdown out of the comments.


