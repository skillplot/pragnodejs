#!/bin/bash

## Copyright (c) 2020 mangalbhaskar.
# __author__='mangalbhaskar'

pdirs=(
  src/app
  src/app/api
  src/app/common
  src/app/config
  src/app/db
  src/app/dnn/gpuconfig
  src/app/entities
  src/app/routes
  src/app/schemas
  src/app/_site/images
  src/app/templates/src
  src/app/utils
  src/app/tests
  src/docs
  src/test
  src/test/config
  src/ata
)

for d in "${pdirs[@]}"; do
  echo "Creating directory: ${d}"
  mkdir -p ${d}
done
