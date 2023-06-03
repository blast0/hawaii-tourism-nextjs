
export default async function getHighlights() {
  const highlightData = await fetch(
    "https://web-dev.dev.kimo.ai/v1/highlights"
  );
  const highlights = await highlightData.json();
  return highlights;
}