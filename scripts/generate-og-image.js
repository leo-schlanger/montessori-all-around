import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// SVG content for OG image (1200x630)
const svgContent = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#E9E1D8"/>

  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="150" fill="#AFC6D1" fill-opacity="0.3"/>
  <circle cx="1100" cy="530" r="200" fill="#F4A28C" fill-opacity="0.25"/>
  <circle cx="1050" cy="100" r="120" fill="#F2C66D" fill-opacity="0.3"/>
  <circle cx="150" cy="530" r="100" fill="#B7CBA3" fill-opacity="0.3"/>

  <!-- Logo circles -->
  <g transform="translate(500, 80)">
    <circle cx="70" cy="70" r="56" fill="#AFC6D1" fill-opacity="0.9"/>
    <circle cx="130" cy="70" r="56" fill="#F4A28C" fill-opacity="0.9"/>
    <circle cx="100" cy="124" r="56" fill="#F2C66D" fill-opacity="0.9"/>
    <circle cx="120" cy="100" r="44" fill="#B7CBA3" fill-opacity="0.85"/>
  </g>

  <!-- Text: Montessori All Around -->
  <text x="600" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="56" font-weight="600" fill="#6E7377" text-anchor="middle">
    Montessori All Around
  </text>

  <!-- Subtitle -->
  <text x="600" y="360" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#6E7377" fill-opacity="0.85" text-anchor="middle">
    Projeto Educativo Holístico
  </text>

  <!-- Description -->
  <text x="600" y="420" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#6E7377" fill-opacity="0.7" text-anchor="middle">
    Pedagogia Montessori • Arte • Natureza • Comunidade
  </text>

  <!-- Services line 1 -->
  <text x="600" y="500" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#F4A28C" text-anchor="middle">
    Consultoria para Famílias • Babysitting Educativo • Yoga
  </text>

  <!-- Services line 2 -->
  <text x="600" y="530" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#F4A28C" text-anchor="middle">
    Programas na Natureza • Experiências Culturais • Consultoria para Escolas
  </text>

  <!-- Location -->
  <text x="600" y="590" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#6E7377" fill-opacity="0.5" text-anchor="middle">
    Lisboa e Sintra, Portugal
  </text>
</svg>
`;

async function generateOgImage() {
  try {
    const outputPath = join(publicDir, 'og-image.png');

    await sharp(Buffer.from(svgContent))
      .png()
      .toFile(outputPath);

    console.log('✓ OG image generated successfully:', outputPath);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOgImage();
