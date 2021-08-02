import {
  BaseHttpController,
  controller,
  httpGet,
} from "inversify-express-utils";

@controller("/")
export default class DebugController extends BaseHttpController {
  @httpGet("ping")
  ping(): void {
    this.ok("Pong");
  }
}
