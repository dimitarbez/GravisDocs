#!/bin/bash

if ! command -v convert &> /dev/null
then
    echo "ImageMagick must be installed to run this script."
    exit 1
fi


# Check if a directory is provided
if [ $# -eq 0 ]; then
  echo "Please provide the directory containing the images."
  exit 1
fi

# Directory containing the images
DIRECTORY="$1"

# Add trailing slash if not present
[[ "${DIRECTORY}" != */ ]] && DIRECTORY="${DIRECTORY}/"

# Resize percentage
PERCENT="33%"

# Loop through all JPEG files in the directory
for FILE in ${DIRECTORY}*.jpg; do
  # Run the convert command, overwriting the original file
  convert -resize $PERCENT "$FILE" "$FILE"

  # Print a success message
  echo "Resized $FILE."
done

echo "All images have been resized!"
