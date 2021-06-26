#!/usr/bin/env sh

printf "removing containers...\n"
docker container stop nodejs-react-challenge-dev
docker container rm nodejs-react-challenge-dev -v

printf "\nremoving volumes...\n"
docker volume prune -f