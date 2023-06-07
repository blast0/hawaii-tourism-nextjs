
export default async function getActivity(name: string) {
  const activityData = await fetch(
   "https://web-dev.dev.kimo.ai/v1/activities/"+name
  );
  const activity = await activityData.json();
  return activity;
}