import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CropYieldPredictionService } from "./cropYieldPrediction.service";
import { CropYieldPredictionControllerBase } from "./base/cropYieldPrediction.controller.base";

@swagger.ApiTags("cropYieldPredictions")
@common.Controller("cropYieldPredictions")
export class CropYieldPredictionController extends CropYieldPredictionControllerBase {
  constructor(
    protected readonly service: CropYieldPredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
