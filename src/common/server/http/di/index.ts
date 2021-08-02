import * as diDependenciesIds from "./dependenciesIds";
import { initBeforeFirstInjectUtil } from "./utils";
/**
 * Declare here modules for Dependency Injection which must be loaded
 * @example import "{{Path}}";
 */
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import "@components/user/user.controller";
import "@components/user/repositories/user-write.repository";
import "@components/user/repositories/user-read.repository";
import "@common/components/debug/debug.controller";
import "@common/database/pg/manager";
import "@common/database/pg/client";
import "@common/cqrs/command.dispatcher";
import "@common/cqrs/query.dispatcher";

/**
 * here you must work only with DI objects and only.
 */
class Di {
  private readonly container: Container = new Container({
    skipBaseClassChecks: true,
  });

  constructor() {
    this.container.load(buildProviderModule());

    // when we push dependency to di we cannot run them until first container.get from di pull of objects.
    // Sometimes we need to init smth on server start like db connection.
    // That is to do it we need to execute container.get on di init
    initBeforeFirstInjectUtil(this.container, [diDependenciesIds.PG_MANAGER]);
  }

  getContainer(): Container {
    return this.container;
  }
}

export { diDependenciesIds };
export default new Di();
