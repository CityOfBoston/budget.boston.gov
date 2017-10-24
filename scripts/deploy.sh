#!/usr/bin/env bash

# What does this script do?
# It deploys the budget site using the appropraite
# environment flags based on the branch being merged.

# How to use this script?
# This script should be executed in the `install` section of .travis.yml.
# It requires no arguments. Example call:
# `scripts/deploy.sh`

echo "Current tag is \"${TRAVIS_TAG}\"."

# Get the directory that this script is in.
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Create an empty array to hold _source subdirectory names.
sources=()
# Loop through all the directories in the _source folder.
for directory in ${DIR}/../_source/. ; do
  echo "Source: $directory found."
  # Add directory names to sources array.
  sources+=("$directory")
done

# Loop through names in sources array.
for element in "${!sources}"; do
  # Check if any of the names match the current git tag.
	if [[ $element == ${TRAVIS_TAG} ]]; then
	  echo "Tag ${TRAVIS_TAG} was found in _source."
		break
	fi
done

echo "Current branch is \"${TRAVIS_BRANCH}\"."

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
