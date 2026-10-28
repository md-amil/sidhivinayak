import os
import re
import zlib

pdf_path = "siddhivinayak catlogue.pdf"
output_dir = "public/products"
os.makedirs(output_dir, exist_ok=True)

with open(pdf_path, "rb") as f:
    data = f.read()

# Pattern to find object dictionaries containing /Subtype /Image
# e.g., obj ... << /Type /XObject /Subtype /Image /Width W /Height H /ColorSpace ... /Filter /FlateDecode ... >> stream ... endstream
obj_pattern = re.compile(rb'(\d+\s+\d+\s+obj\s*<<.*?/Subtype\s*/Image.*?>>\s*stream\r?\n)(.*?)(?:\r?\nendstream)', re.DOTALL)

matches = obj_pattern.findall(data)
print(f"Found {len(matches)} image streams via regex")

for idx, (header, stream_bytes) in enumerate(matches):
    header_str = header.decode('latin1', errors='ignore')
    width_m = re.search(r'/Width\s+(\d+)', header_str)
    height_m = re.search(r'/Height\s+(\d+)', header_str)
    filter_m = re.search(r'/Filter\s*/(\w+)', header_str)
    colorspace_m = re.search(r'/ColorSpace\s*/?(\w+)', header_str)
    
    width = int(width_m.group(1)) if width_m else 0
    height = int(height_m.group(1)) if height_m else 0
    filt = filter_m.group(1) if filter_m else 'None'
    
    print(f"Image {idx+1}: {width}x{height}, Filter: {filt}, Raw size: {len(stream_bytes)} bytes")
    
    if filt == 'FlateDecode':
        try:
            decomp = zlib.decompress(stream_bytes)
            print(f"  Decompressed size: {len(decomp)} bytes")
            # If RGB raw uncompressed pixel data
            # Create PPM or PNG using python standard library struct/zlib
            # PPM P6 header: P6\nWidth Height\n255\n + raw RGB data
            if len(decomp) == width * height * 3:
                ppm_header = f"P6\n{width} {height}\n255\n".encode('ascii')
                ppm_file = os.path.join(output_dir, f"page_{idx+1}_image.ppm")
                with open(ppm_file, 'wb') as pf:
                    pf.write(ppm_header + decomp)
                print(f"  Saved PPM: {ppm_file}")
            elif len(decomp) == width * height * 4: # RGBA or CMYK
                print(f"  4 channels raw image, size {width}x{height}")
        except Exception as e:
            print(f"  Decompress error: {e}")
    elif filt == 'DCTDecode':
        jpg_file = os.path.join(output_dir, f"page_{idx+1}_image.jpg")
        with open(jpg_file, 'wb') as jf:
            jf.write(stream_bytes)
        print(f"  Saved JPG: {jpg_file}")

