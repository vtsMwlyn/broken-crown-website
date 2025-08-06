const sharp = require('sharp');
const fs = require('fs/promises');
const path = require('path');

// Config
const publicFolder = path.join(__dirname, 'public');
const supportedExtensions = ['.jpeg', '.jpg', '.png', '.tiff', '.svg'];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedExtensions.includes(ext)) return;

  const webpPath = filePath.replace(ext, '.webp');

  try {
    await sharp(filePath, { unlimited: true })
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`✅ Converted: ${filePath} → ${webpPath}`);

    // DELETE the original image
    await fs.unlink(filePath);
    console.log(`🗑️ Deleted original: ${filePath}`);
  } catch (err) {
    console.error(`❌ Failed to convert ${filePath}:`, err.message);
  }
}

async function traverseAndConvert(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await traverseAndConvert(fullPath);
    } else {
      await convertImage(fullPath);
    }
  }
}

(async () => {
  console.log('🔄 Starting WebP conversion (with original deletion)...');
  await traverseAndConvert(publicFolder);
  console.log('🎉 Done!');
})();
