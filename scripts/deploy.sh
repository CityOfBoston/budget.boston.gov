#!/usr/bin/env bash

# What does this script do?
# It deploys the budget site using the appropraite
# environment flags based on the branch being merged.

# How to use this script?
# This script should be executed in the `install` section of .travis.yml.
# It requires no arguments. Example call:
# `scripts/deploy.sh`

# Get the latest git tag.
tag=$(git describe --abbrev=0 --tags)
echo "The current git tag is $tag."

# Get the directory that this script is in.
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Create an empty array to hold _source subdirectory names.
sources=()
# Loop through all the directories in the _source folder.
for dir in $(find "${DIR}"/../_source/. -maxdepth 1 -mindepth 1 -type d); do
  # Remove the path so only the directory name is displayed.
  directory=$(basename $dir)
  echo "Source $directory was found."
  # Add directory names to sources array.
  sources+=("$directory")
done

# Set initial state for source.
source_is_found=false
# Loop through names in sources array.
for element in $sources; do
  # Check if any of the names match the current git tag.
	if [[ $element == $tag && $element != "" ]]; then
	  echo "Tag $tag was found in _source."
    source_is_found=true
		break
	fi
done

# Check if the source specified by the git tag is actually found.
if ( $source_is_found ); then

  echo "Current branch is \"${TRAVIS_BRANCH}\"."

  # For https://budget.digital-staging.boston.gov
  if [[ "${TRAVIS_BRANCH}" = "develop" ]];
    then
      echo "Building with --staging flag."
      gulp build --staging --source $tag
  # for https://budget.boston.gov
  elif [[ "${TRAVIS_BRANCH}" = "master" ]];
    then
      echo "Building without environment flags."
      gulp build --source $tag
  else
    echo "Not develop or master branches, skipping site build."
  fi

else
  # Let it be known that the source couldn't be found so the build couldn't happen.
  echo "The source could not be determined from the latest git tag. Skipping deploy entirely."
fi
