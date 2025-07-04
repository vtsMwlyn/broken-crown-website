// converttopng.js
const Jimp = require('jimp'); // Use require with the older version
const fs = require('fs');
const path = require('path');

const imagesToConvert = [
  'femaleeliteguard.jpg',
  'maleeliteguard.jpg'
  // Add any other image names here
];

const publicFolder = path.join(__dirname, 'public');

async function convertImages() {
  console.log('Starting image conversion...');

  for (const imageName of imagesToConvert) {
    const inputPath = path.join(publicFolder, imageName);
    const outputFileName = `${path.parse(imageName).name}.png`;
    const outputPath = path.join(publicFolder, outputFileName);

    if (!fs.existsSync(inputPath)) {
      console.error(`❌ File not found: ${inputPath}`);
      continue;
    }

    try {
      const image = await Jimp.read(inputPath);
      await image.writeAsync(outputPath);
      console.log(`✅ Successfully converted: ${imageName} -> ${outputFileName}`);
    } catch (err) {
      console.error(`❌ Error converting ${imageName}:`, err);
    }
  }
  console.log('Image conversion finished!');
}

convertImages();