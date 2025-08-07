import apiClient from "@/lib/api-client";

/**
 * Service for project-related API calls.
 */
export const projects = {
  /**
   * Get a paginated list of all projects.
   * @param page - The page number to retrieve.
   * @param limit - The number of projects per page.
   * @returns Promise with the list of projects.
   */
  getAllProjects: (page: number, limit: number) =>
    apiClient(`/manage-project-task/project/list?page=${page}&limit=${limit}`),

  /**
   * Get detail of a project by its ID.
   * @param projectId - The ID of the project.
   * @returns Promise with the project detail.
   */
  getProjectById: (projectId: string) =>
    apiClient(`/project/detail?project_id=${projectId}`),

  /**
   * Get a paginated list of tasks for a specific project.
   * @param projectId - The ID of the project.
   * @param page - The page number to retrieve.
   * @param limit - The number of tasks per page.
   * @returns Promise with the list of tasks for the project.
   */
  getProjectTasks: (projectId: string, page: number, limit: number) =>
    apiClient(`/task/list?project_id=${projectId}&page=${page}&limit=${limit}`),

  /**
   * Get detail of a task by its ID.
   * @param taskId - The ID of the task.
   * @returns Promise with the task detail.
   */
  getProjectTasksById: (taskId: string) =>
    apiClient(`/task/detail?task_id=${taskId}`),

  /**
   * Get the list of dependencies for a specific task.
   * @param taskId - The ID of the task.
   * @returns Promise with the list of task dependencies.
   */
  getTaskDependencies: (taskId: string) =>
    apiClient(`/task/dependency/list?task_id=${taskId}`),
};
