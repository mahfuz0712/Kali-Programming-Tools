#!/bin/bash

# Update package list
sudo apt update -y



# Check if bluemooth already exists in /usr/local/bin
if [ -f /usr/local/bin/kpt ]; then
    echo "kpt already exists in /usr/local/bin. Removing the old version..."
    sudo rm /usr/local/bin/kpt
else
    echo "installing please wait..."
fi

# Move bluemooth to /usr/local/bin
sudo cp kpt /usr/local/bin/

# Make it executable
sudo chmod +x /usr/local/bin/kpt

# Notify the user that the setup is complete
echo "Installation completed successfully!"