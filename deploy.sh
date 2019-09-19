#!/bin/bash

export SSHPASS=$PASS
sshpass -e scp -o stricthostkeychecking=no omod/target/*.omod $USER@$HOST:./travis_deployments/$TRAVIS_BRANCH
sshpass -e ssh -o stricthostkeychecking=no $USER@$HOST <<EOF
  cd /opt/openmrs-ref-app/modules
  ls | grep -P "spa-[0-9]\.[0-9](\.[0-9])?(-SNAPSHOT)?\.omod" | xargs -d"\n" rm
  mv ~/travis_deployments/$TRAVIS_BRANCH/*.omod ./
  cd ../ && docker-compose restart
  echo "Module SPA Successfully Deployed"
EOF
