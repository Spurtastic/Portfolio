import logging
import sys

# Create a custom logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# Create handlers
file_handler = logging.FileHandler('filename.log', mode='w')
file_handler.setLevel(logging.INFO)

stream_handler = logging.StreamHandler(sys.stdout)
stream_handler.setLevel(logging.INFO)

# Create a formatter and set it for both handlers
formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s')
file_handler.setFormatter(formatter)
stream_handler.setFormatter(formatter)

# Add handlers to the logger
logger.addHandler(file_handler)
logger.addHandler(stream_handler)

with open("someText.txt") as file:
    lines = file.readlines()
    count = 0
    string = ""

    for line in lines:
        line = line.strip()  # Strip newlines and extra spaces
        columns = ""
        
        if count == 0:  # Header row
            columns = "||" + line.replace(",", "||") + "||"
            logger.info("%s", columns)
            string += columns + "\n"
            count += 1
        else:  # Data rows
            columns = "|" + line.replace(",", "|") + "|"
            logger.info("%s", columns)
            string += columns + "\n"

# Write the formatted table to another file
with open("another.txt", "w") as output_file:
    output_file.write(string)

# Explicitly flush and close the file handler
file_handler.flush()
file_handler.close()