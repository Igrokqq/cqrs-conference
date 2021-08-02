export interface ServerInterface {
  run(): Promise<void>;
}
export interface ServerDependenciesInterface {
  init(app: unknown): void;
}
