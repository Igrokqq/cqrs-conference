export interface CommandHandlerResponseInterface {
  readonly isOk: boolean;
  readonly error: null | Error;
}
export interface CommandDispatcherResponse
  extends CommandHandlerResponseInterface {}
export interface CommandInterface {
  getHandler(): CommandHandlerInterface;
}
export interface CommandHandlerInterface {
  execute(command: unknown): Promise<CommandHandlerResponseInterface>;
}
export interface DispatcherInterface {
  execute(command: CommandInterface): Promise<CommandHandlerResponseInterface>;
}
export interface QueryInterface {
  getHandler(): QueryHandlerInterface;
}
export interface QueryHandlerInterface {
  execute(query: unknown): Promise<unknown>;
}
export type QueryDispatcherResponse<Data> = Promise<Data>;
