#!/bin/sh

if [ $env = "development" ]
then
  npm run dev
elif [ $env = "production" ]
then
  nginx -g 'daemon off;'
fi