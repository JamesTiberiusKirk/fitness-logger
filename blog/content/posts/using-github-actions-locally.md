---
title: "Using Github Actions Locally"
date: 2021-01-02T15:59:37Z
draft: true
tags: ["github-actions", "CI/CD", "tests"]
---

Usually is best to structure it in a way so that it doesnt use any ci specific features. All the actions that need to happen better happen in a platform agnostic way, i.e. script everything yourself. However, for now I will just use act.

Act uses docker to run all of the github actions.

# Links
- Act Github Page - https://github.com/nektos/act

