#!/bin/bash
cd /home/kavia/workspace/code-generation/arcade-nexus-darkmode-24795-ea4b7eaa/arcade_nexus_darkmode
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

