#!/bin/bash

set -o errexit -o nounset

echo "Preparing to delete all S3 files based on $TRAVIS_BRANCH branch."

if [[ "${TRAVIS_BRANCH}" = "master" ]];
then
  echo "Update scripts/clear_s3.sh to actually delete prod s3 files."
  #echo "Deleting everything currently on production bucket."
  #pip install --upgrade --user awscli
  #aws s3 rm s3://budget-boston-gov --recursive --region $AWS_DEFAULT_REGION 
elif [[ "${TRAVIS_BRANCH}" = "develop" ]];
then
  echo "Deleting everything currently on staging bucket."
  pip install --upgrade --user awscli
  aws s3 rm s3://budget-digital-staging-boston-gov --recursive --region $AWS_DEFAULT_REGION 
else
  echo "This commit was made against the $TRAVIS_BRANCH and not master or develop! No deploy!"
  exit 0
fi
