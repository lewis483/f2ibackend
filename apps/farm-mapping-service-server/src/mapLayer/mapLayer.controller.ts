import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapLayerService } from "./mapLayer.service";
import { MapLayerControllerBase } from "./base/mapLayer.controller.base";

@swagger.ApiTags("mapLayers")
@common.Controller("mapLayers")
export class MapLayerController extends MapLayerControllerBase {
  constructor(
    protected readonly service: MapLayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
