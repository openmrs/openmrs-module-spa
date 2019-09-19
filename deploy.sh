#!/bin/bash

eval "$(ssh-agent -s)"
chmod 600 ./deploy_key
echo -e "Host ${HOST}\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deploy_key
scp omod/target/*.omod $USER@$HOST:./travis_deployments/$TRAVIS_BRANCH
ssh $USER@$HOST <<EOF
  cd /opt/openmrs-ref-app/modules
  ls | grep -P "spa-[0-9]\.[0-9](\.[0-9])?(-SNAPSHOT)?\.omod" | xargs -d"\n" rm
  mv ~/travis_deployments/$TRAVIS_BRANCH/*.omod ./
  cd ../ && docker-compose restart
  echo "Module SPA Successfully Deployed"
EOFs
