#!/usr/bin/env bash

# What does this script do?
# It deploys the budget site using the appropraite
# environment flags based on the branch being merged.

# How to use this script?
# This script should be executed in the `install` section of .travis.yml.
# It requires no arguments. Example call:
# `scripts/deploy.sh`

# Create a YAML parser so we can get the "source" value from _config.yml
parse_yaml() {
   local prefix=$2
   local s='[[:space:]]*' w='[a-zA-Z0-9_]*' fs=$(echo @|tr @ '\034')
   sed -ne "s|^\($s\)\($w\)$s:$s\"\(.*\)\"$s\$|\1$fs\2$fs\3|p" \
        -e "s|^\($s\)\($w\)$s:$s\(.*\)$s\$|\1$fs\2$fs\3|p"  $1 |
   awk -F$fs '{
      indent = length($1)/2;
      vname[indent] = $2;
      for (i in vname) {if (i > indent) {delete vname[i]}}
      if (length($3) > 0) {
         vn=""; for (i=0; i<indent; i++) {vn=(vn)(vname[i])("_")}
         printf("%s%s%s=\"%s\"\n", "'$prefix'",vn, $2, $3);
      }
   }'
}

if [[ "${TRAVIS_BRANCH}" = "develop" ]];
  then
  # for https://budget.digital-staging.boston.gov
    echo "On ${TRAVIS_BRANCH} branch so looking for FY source in _config_stg.yml"
    eval $(parse_yaml _config_stg.yml "config_")
elif [[ "${TRAVIS_BRANCH}" = "master" ]];
  then
  # for https://budget.boston.gov
    echo "On ${TRAVIS_BRANCH} branch so looking for FY source in _config.yml"
    eval $(parse_yaml _config.yml "config_")
else
  echo "Not on develop or master branches, config_fy_source being set to 'missing'."
  config_fy_source="missing"
fi

# Get the source specified in appropriate config file
echo "The source specified in config is: $config_fy_source."

# Get the directory that this script is in.
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# Create an empty array to hold _source subdirectory names.
available_sources=()
# Loop through all the directories in the _source folder.
for dir in $(find "${DIR}"/../_source/. -maxdepth 1 -mindepth 1 -type d); do
  # Remove the path so only the directory name is displayed.
  directory=$(basename $dir)
  echo "Source $directory was found."
  # Add directory names to sources array.
  available_sources+=("$directory")
done

# Set initial state for source.
source_is_found=false
# Loop through names in sources array.
for element in $available_sources; do
  # Check if any of the names match the current git tag.
	if [[ $element == $config_fy_source && $element != "" ]]; then
	  echo "Config source $config_fy_source was found in _source."
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
      #echo "Cleaning out old collections."
      #gulp clean_project
      echo "executing script in ${PWD}"
      echo "executing script in $(pwd)"
      ls
      echo "Building with --staging flag."
      gulp build --staging --source $config_fy_source
      if [ ! -d "_cabinets" ]; then
        echo "Cabinets missing."
      else
        echo "Cabinets exist!"
      fi
      if [ ! -d "_departments" ]; then
        echo "Departments missing."
      else
        echo "Departments exist!"
      fi
      if [ ! -d "_programs" ]; then
        echo "Programs missing."
      else
        echo "Programs exist!"
      fi
      if [ ! -d "_cp_depts" ]; then
        echo "CP Depts missing."
      else
        echo "CP Depts exist!"
      fi
      if [ ! -d "_categories" ]; then
        echo "Categories missing."
      else
        echo "Categories exist!"
      fi
      if [ ! -d "_projects" ]; then
        echo "Projects missing."
      else
        echo "Projects exist!"
      fi
      echo "Project files:"
      ls
      echo "----------------"
      echo "Inside _chapters dir:"
      ls _chapters
      sleep 25
      echo "----------------"
      if [ -d "_site" ]; then
        echo "_site folder has been created:"
        ls _site
      else
        echo "No _site folder :("
      fi
  # for https://budget.boston.gov
  elif [[ "${TRAVIS_BRANCH}" = "master" ]];
    then
      #echo "Cleaning out old collections."
      #gulp clean_project
      echo "Building without environment flags."
      gulp build --source $config_fy_source
  else
    echo "Not develop or master branches, skipping site build."
  fi

else
  # Let it be known that the source couldn't be found so the build couldn't happen.
  echo "The FY source could not be determined from the config file. Skipping deploy entirely."
fi
