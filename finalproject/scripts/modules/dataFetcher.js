// Asynchronous Fetch API with try...catch block requirement
export async function getProjectsData() {
  try {
    const response = await fetch('./data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load project data:", error);
    return [];
  }
}