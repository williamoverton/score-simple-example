#!/usr/bin/env bash

docker build --platform linux/amd64 . -t europe-west2-docker.pkg.dev/will-overton-gcp/demo/helloworld:latest

docker push europe-west2-docker.pkg.dev/will-overton-gcp/demo/helloworld:latest