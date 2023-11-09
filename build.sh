#!/bin/bash

# Exit script if any command fails
set -e

# Install npm dependencies
echo "Installing dependencies..."
npm install

# Build the CMS
echo "Building the CMS..."
npm run cms-build

# Check if build was successful
if [ -d ".next" ]; then
    echo "The build has completed. The .next directory contains:"
    ls -l .next
else
    echo "Build failed or .next directory does not exist."
    exit 1
fi

