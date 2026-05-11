#!/usr/bin/env python3
"""
Image compression script for MascotTarot
Resizes card images to 120x120px and optimizes photo-output.png
Saves all compressed images to compressed_images/ folder
"""

import os
from PIL import Image

# Create output directory
OUTPUT_DIR = "compressed_images"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Card image files to resize to 120x120px
CARD_FILES = [
    "card0.png", "card1.png", "card2.png", "card3.png", "card4.png",
    "card5.png", "card6.png", "card7.png", "card8.png", "card9.png",
    "card10.png", "card11.png", "card12.png", "card13.png", "card14.png",
    "card15.png", "card16.png", "card17.png", "card18.png", "card19.png",
    "card20.png", "card21.png",
    "3 of Cups.png",
    "4 of Wands.png"
]

PHOTO_FILE = "photo-output.png"

def get_file_size_mb(filepath):
    """Get file size in MB"""
    if os.path.exists(filepath):
        return os.path.getsize(filepath) / (1024 * 1024)
    return 0

def compress_card(filename):
    """Compress and resize card image to 120x120px"""
    input_path = filename
    output_path = os.path.join(OUTPUT_DIR, filename)
    
    if not os.path.exists(input_path):
        print(f"⚠️  {filename} not found, skipping...")
        return
    
    try:
        original_size = get_file_size_mb(input_path)
        
        # Open and resize image
        img = Image.open(input_path)
        img_resized = img.resize((120, 120), Image.Resampling.LANCZOS)
        
        # Save optimized
        img_resized.save(output_path, "PNG", optimize=True)
        
        compressed_size = get_file_size_mb(output_path)
        reduction = ((original_size - compressed_size) / original_size * 100) if original_size > 0 else 0
        
        print(f"✅ {filename}")
        print(f"   Original: {original_size:.2f}MB → Compressed: {compressed_size:.2f}MB ({reduction:.1f}% reduction)")
        
    except Exception as e:
        print(f"❌ Error processing {filename}: {e}")

def optimize_photo():
    """Optimize photo-output.png without resizing"""
    input_path = PHOTO_FILE
    output_path = os.path.join(OUTPUT_DIR, PHOTO_FILE)
    
    if not os.path.exists(input_path):
        print(f"⚠️  {PHOTO_FILE} not found, skipping...")
        return
    
    try:
        original_size = get_file_size_mb(input_path)
        
        # Open and optimize
        img = Image.open(input_path)
        img.save(output_path, "PNG", optimize=True)
        
        compressed_size = get_file_size_mb(output_path)
        reduction = ((original_size - compressed_size) / original_size * 100) if original_size > 0 else 0
        
        print(f"\n✅ {PHOTO_FILE} (optimized)")
        print(f"   Original: {original_size:.2f}MB → Compressed: {compressed_size:.2f}MB ({reduction:.1f}% reduction)")
        
    except Exception as e:
        print(f"❌ Error processing {PHOTO_FILE}: {e}")

def main():
    print("🎴 MascotTarot Image Compression Script")
    print("=" * 50)
    print(f"Output directory: {OUTPUT_DIR}/\n")
    
    print("📦 Compressing card images (120x120px)...")
    for card_file in CARD_FILES:
        compress_card(card_file)
    
    print("\n📦 Optimizing photo-output...")
    optimize_photo()
    
    print("\n" + "=" * 50)
    print("✨ Compression complete!")
    print(f"All compressed images saved to: {OUTPUT_DIR}/")

if __name__ == "__main__":
    main()
