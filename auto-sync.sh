#!/bin/bash

while true; do
  # Pull latest changes from remote
  git pull origin main

  # Add all local changes
  git add .

  # Commit local changes
  git commit -m "Auto-sync commit"

  # Push local changes to remote
  git push origin main

  # Wait for 5 minutes before repeating the process
  sleep 300
done
