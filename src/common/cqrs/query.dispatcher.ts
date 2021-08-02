import {
  DispatcherInterface,
  QueryDispatcherResponse,
  QueryHandlerInterface,
  QueryInterface,
} from "./interfaces";
import { provide } from "inversify-binding-decorators";
import { diDependenciesIds } from "@common/server/http/di";

@provide(diDependenciesIds.QUERY_DISPATCHER)
export default class QueryDispatcher implements DispatcherInterface {
  execute<ResponseData>(
    query: QueryInterface
  ): QueryDispatcherResponse<ResponseData> {
    const handler: QueryHandlerInterface = query.getHandler();

    return handler.execute(query) as Promise<ResponseData>;
  }
}
