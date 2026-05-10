import { filterTasksBySearchQuery } from "./filterTasksBySearchQuery";
import type { Task } from "../../model/task";

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Users cannot log in",
    priority: "high",
    completed: false,
    projectId: "p1",
  },
  {
    id: "2",
    title: "Write docs",
    description: "Document the API",
    priority: "low",
    completed: false,
    projectId: "p1",
  },
];

describe("filterTasksBySearchQuery", () => {
  it("returns all tasks when query is empty", () => {
    expect(filterTasksBySearchQuery(mockTasks, "")).toEqual(mockTasks);
  });
  it("filters tasks by title", () => {
    expect(filterTasksBySearchQuery(mockTasks, "login")).toEqual([
      mockTasks[0],
    ]);
  });
  it("filters tasks by description", () => {
    expect(filterTasksBySearchQuery(mockTasks, "document the api")).toEqual([
      mockTasks[1],
    ]);
  });

  it("filters tasks by priority", () => {
    expect(filterTasksBySearchQuery(mockTasks, "high")).toEqual([mockTasks[0]]);
  });

  it("is case insensitive", () => {
    expect(filterTasksBySearchQuery(mockTasks, "FIX LOGIN")).toEqual([
      mockTasks[0],
    ]);
  });

  it("returns empty array when no tasks match", () => {
    expect(filterTasksBySearchQuery(mockTasks, "abc123")).toEqual([]);
  });
  it("returns all tasks when query is only whitespace", () => {
    expect(filterTasksBySearchQuery(mockTasks, "   ")).toEqual(mockTasks);
  });
});
