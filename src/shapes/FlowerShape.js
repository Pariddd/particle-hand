/**
 * FlowerShape.js
 *
 * Rose curve (r = cos(k·θ)) — persamaan parametric klasik untuk bentuk bunga N-kelopak.
 * Konsisten dengan pendekatan shape lain di project ini (PlanetShape, HeartShape): murni
 * generatif dari rumus matematika, bukan asset gambar/tekstur eksternal.
 *
 * DESAIN: 85% partikel disebar MENGIKUTI kurva rose (bentuk kelopak jelas terlihat),
 * 15% sisanya diisi tipis di area DALAM kurva (bukan celah kosong total) dengan radius
 * lebih kecil — supaya saat morph DARI/KE shape lain (yang solid seperti planet/heart),
 * transisinya tidak terlihat seperti titik-titik "menghilang" ke ruang kosong secara tiba-tiba.
 */
export function generateFlowerPositions(count) {
  const positions = new Float32Array(count * 3);

  const PETALS = 5; // jumlah kelopak (k pada rumus r = cos(k*theta))
  const SCALE = 1.8; // radius maksimum kurva, sepadan dengan HeartShape (~1.5-2)
  const fillRatio = 0.15; // porsi partikel untuk isian dalam (anti celah kosong saat morph)
  const fillCount = Math.floor(count * fillRatio);
  const curveCount = count - fillCount;

  // --- Populasi 1: mengikuti kurva rose, dengan sedikit noise radial supaya kelopak
  // terlihat sebagai "sapuan" partikel bertekstur, bukan garis matematis tipis sempurna ---
  for (let i = 0; i < curveCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const r = SCALE * Math.cos(PETALS * theta);

    // Noise radial kecil (±8% dari SCALE) di sekitar kurva ideal
    const noise = (Math.random() - 0.5) * SCALE * 0.16;
    const rNoised = r + noise;

    const idx = i * 3;
    positions[idx] = rNoised * Math.cos(theta);
    positions[idx + 1] = rNoised * Math.sin(theta);
    positions[idx + 2] = (Math.random() - 0.5) * 0.1; // ketebalan tipis di sumbu Z
  }

  // --- Populasi 2: isian dalam (dekat pusat), radius kecil, uniform-area (r = sqrt(random)) ---
  for (let i = 0; i < fillCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const r = SCALE * 0.35 * Math.sqrt(Math.random());

    const idx = (curveCount + i) * 3;
    positions[idx] = r * Math.cos(theta);
    positions[idx + 1] = r * Math.sin(theta);
    positions[idx + 2] = (Math.random() - 0.5) * 0.1;
  }

  return positions;
}
