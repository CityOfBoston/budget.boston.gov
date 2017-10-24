#!/usr/bin/env bash

# What does this script do?
# It deploys the budget site using the appropraite
# environment flags based on the branch being merged.

# How to use this script?
# This script should be executed in the `install` section of .travis.yml.
# It requires no arguments. Example call:
# `scripts/deploy.sh`

echo "Current branch is \"${TRAVIS_BRANCH}\"."
echo "Current tag is \"${TRAVIS_TAG}\"."
if [[ "${TRAVIS_BRANCH}" = "develop" ]];
  then
    echo "Building with --staging flag."
    gulp build --staging --source fy18_recommended
elif [[ "${TRAVIS_BRANCH}" = "master" ]];
  then
    echo "Building without environment flags."
    gulp build --source fy18_recommended
else
  echo "Incorrect branch, skipping site build."
fi
