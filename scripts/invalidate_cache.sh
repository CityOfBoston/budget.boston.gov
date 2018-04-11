#!/bin/bash

set -o errexit -o nounset

echo "Preparing to run CDN Invalidation on $TRAVIS_BRANCH branch."

if [[ "${TRAVIS_BRANCH}" = "master" ]];
then
  echo "Invalidating production Cloudfront."
  # Invalidate CloudFront distribution
  pip install --upgrade --user awscli
  aws configure set preview.cloudfront true
  aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_PROD_ID --paths '/*'
elif [[ "${TRAVIS_BRANCH}" = "develop" ]];
then
  echo "Invalidating staging Cloudfront."
  # Invalidate CloudFront distribution
  pip install --upgrade --user awscli
  aws configure set preview.cloudfront true
  aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_STG_ID --paths '/*'
else
  echo "This commit was made against the $TRAVIS_BRANCH and not master or develop! No deploy!"
  exit 0
fi
