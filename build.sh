#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
cd /dist
yarn prisma migrate dev --save fistDeploy