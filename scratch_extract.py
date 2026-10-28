import fitz  # PyMuPDF
import os

pdf_path = "siddhivinayak catlogue.pdf"
output_dir = "public/products"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")

image_count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    
    print(f"Page {page_num + 1} has {len(image_list)} images")
    
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
        
        print(f"Saved: {image_path} ({len(image_bytes)} bytes)")
        image_count += 1

print(f"Total images extracted: {image_count}")
