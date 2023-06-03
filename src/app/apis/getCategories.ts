
export default async function getCategories() {
  const categoriesData = await fetch(
    "https://web-dev.dev.kimo.ai/v1/categories"
  );
  const categories = await categoriesData.json();
  return categories;
}