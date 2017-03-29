#!/bin/bash

DIRECTORY=build

if [ -d "$DIRECTORY" ];
then

  # go to the out directory and create a *new* Git repo
  cd build

  # Remove possible existing git repo. We'll replace entire wiki
  rm -rf .git

  # Init new repo
  git init

  # The first and only commit to this new Git repo contains all the
  # files present with the commit message "Deploy to Wiki".
  git add --all
  git commit -m "deploy: gh pages"

  # Add origin
  git remote add deploy git@github.com:bannertime/bannertime.github.io.git

  # Force push from the current repo's master branch to the remote
  # (All previous history on the master branch will be lost, since we are overwriting it.)
  git push --force deploy master:master

else
  echo "Build directory does not exist!"
fi