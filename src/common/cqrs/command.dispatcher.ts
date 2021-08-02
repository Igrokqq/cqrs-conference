import {
  CommandHandlerInterface,
  CommandHandlerResponseInterface,
  CommandInterface,
  DispatcherInterface,
} from "./interfaces";
import { provide } from "inversify-binding-decorators";
import { diDependenciesIds } from "@common/server/http/di";

@provide(diDependenciesIds.COMMAND_DISPATCHER)
export default class CommandDispatcher implements DispatcherInterface {
  async execute(
    command: CommandInterface
  ): Promise<CommandHandlerResponseInterface> {
    try {
      const handler: CommandHandlerInterface = command.getHandler();
      const handlerResponse: CommandHandlerResponseInterface =
        await handler.execute(command);

      return handlerResponse;
    } catch (error) {
      return {
        error,
        isOk: false,
      };
    }
  }
}
