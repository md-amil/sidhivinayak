import os
import re

pdf_path = "siddhivinayak catlogue.pdf"
with open(pdf_path, "rb") as f:
    content = f.read()

print("PDF total size:", len(content))

# Look for image streams or XObject
xobjects = re.findall(rb"/Subtype\s*/Image", content)
print("XObject Images count:", len(xobjects))

# Look for stream locations
streams = [m.start() for m in re.finditer(rb"stream", content)]
print("Stream count:", len(streams))

# Let's inspect where screenshots saved by view_file are located
# The artifact directory is /Users/amil/.gemini/antigravity-ide/brain/d6f0bded-661d-4700-a7c4-b3de06925fb3
