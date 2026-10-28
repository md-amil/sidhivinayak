import Foundation
import PDFKit
import AppKit

let pdfURL = URL(fileURLWithPath: "siddhivinayak catlogue.pdf")
guard let pdfDoc = PDFDocument(url: pdfURL) else {
    print("Failed to load PDF")
    exit(1)
}

let outputDir = URL(fileURLWithPath: "public/products")
try? FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

for i in 0..<pdfDoc.pageCount {
    guard let page = pdfDoc.page(at: i) else { continue }
    let pageBounds = page.bounds(for: .mediaBox)
    
    let scale: CGFloat = 3.0
    let width = Int(pageBounds.width * scale)
    let height = Int(pageBounds.height * scale)
    
    guard let bitmapRep = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: width,
        pixelsHigh: height,
        bitsPerSample: 8,
        samplesPerPixel: 4,
        hasAlpha: true,
        isPlanar: false,
        colorSpaceName: .deviceRGB,
        bytesPerRow: 0,
        bitsPerPixel: 0
    ) else { continue }
    
    NSGraphicsContext.saveGraphicsState()
    guard let context = NSGraphicsContext(bitmapImageRep: bitmapRep) else { continue }
    NSGraphicsContext.current = context
    
    NSColor.white.set()
    NSRect(x: 0, y: 0, width: CGFloat(width), height: CGFloat(height)).fill()
    
    let cgContext = context.cgContext
    cgContext.scaleBy(x: scale, y: scale)
    
    page.draw(with: .mediaBox, to: cgContext)
    
    NSGraphicsContext.restoreGraphicsState()
    
    // Save full page high-res PNG
    if let pngData = bitmapRep.representation(using: .png, properties: [:]) {
        let fileURL = outputDir.appendingPathComponent("page_\(i + 1).png")
        try? pngData.write(to: fileURL)
    }
    
    // Precise crop for product photos on pages 2-8
    if i >= 1 && i <= 7 {
        // PDF Y-axis in AppKit CGContext is inverted vs screen coordinates
        // Crop rect in AppKit bitmap coordinates (origin top-left):
        let cropX = Int(CGFloat(width) * 0.032)
        let cropY = Int(CGFloat(height) * 0.274)
        let cropW = Int(CGFloat(width) * 0.482)
        let cropH = Int(CGFloat(height) * 0.485)
        
        if let cgImage = bitmapRep.cgImage?.cropping(to: CGRect(x: cropX, y: cropY, width: cropW, height: cropH)) {
            let croppedRep = NSBitmapImageRep(cgImage: cgImage)
            if let croppedPng = croppedRep.representation(using: .png, properties: [:]) {
                let cropFileURL = outputDir.appendingPathComponent("product_\(i + 1).png")
                try? croppedPng.write(to: cropFileURL)
                print("Exported clean product image product_\(i + 1).png")
            }
        }
    }
}
print("PDF Render and Clean Crop Complete!")
