import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsageGuidelineService } from "./usageGuideline.service";
import { UsageGuidelineControllerBase } from "./base/usageGuideline.controller.base";

@swagger.ApiTags("usageGuidelines")
@common.Controller("usageGuidelines")
export class UsageGuidelineController extends UsageGuidelineControllerBase {
  constructor(
    protected readonly service: UsageGuidelineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
