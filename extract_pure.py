import os
import re

pdf_path = "siddhivinayak catlogue.pdf"
output_dir = "public/products"
os.makedirs(output_dir, exist_ok=True)

with open(pdf_path, "rb") as f:
    content = f.read()

# Find all JPEG streams in PDF (start with \xff\xd8\xff and end with \xff\xd9)
jpegs = []
start = 0
while True:
    idx_start = content.find(b"\xff\xd8\xff", start)
    if idx_start == -1:
        break
    idx_end = content.find(b"\xff\xd9", idx_start)
    if idx_end == -1:
        break
    img_data = content[idx_start:idx_end + 2]
    # Filter out tiny thumbnails if any
    if len(img_data) > 5000:
        jpegs.append(img_data)
        print(f"Found JPEG {len(jpegs)}: size {len(img_data)} bytes")
    start = idx_end + 2

for i, img in enumerate(jpegs):
    out_path = os.path.join(output_dir, f"extracted_img_{i+1}.jpg")
    with open(out_path, "wb") as out_f:
        out_f.write(img)
    print(f"Saved {out_path}")
