import { Container } from "inversify";

export function initBeforeFirstInjectUtil(
  container: Container,
  dependencyIds: string[]
): void {
  dependencyIds.forEach((dependencyId: string) => {
    const dependency = container.get<unknown | Promise<unknown>>(dependencyId);

    if (typeof dependency === "function") {
      dependency();
    }
  });
}
