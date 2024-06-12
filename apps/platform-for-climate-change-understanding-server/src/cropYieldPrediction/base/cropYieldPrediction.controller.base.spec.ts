import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CropYieldPredictionController } from "../cropYieldPrediction.controller";
import { CropYieldPredictionService } from "../cropYieldPrediction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  cropName: "exampleCropName",
  id: "exampleId",
  updatedAt: new Date(),
  yieldPrediction: "exampleYieldPrediction",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  cropName: "exampleCropName",
  id: "exampleId",
  updatedAt: new Date(),
  yieldPrediction: "exampleYieldPrediction",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    cropName: "exampleCropName",
    id: "exampleId",
    updatedAt: new Date(),
    yieldPrediction: "exampleYieldPrediction",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  cropName: "exampleCropName",
  id: "exampleId",
  updatedAt: new Date(),
  yieldPrediction: "exampleYieldPrediction",
};

const service = {
  createCropYieldPrediction() {
    return CREATE_RESULT;
  },
  cropYieldPredictions: () => FIND_MANY_RESULT,
  cropYieldPrediction: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CropYieldPrediction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CropYieldPredictionService,
          useValue: service,
        },
      ],
      controllers: [CropYieldPredictionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /cropYieldPredictions", async () => {
    await request(app.getHttpServer())
      .post("/cropYieldPredictions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cropYieldPredictions", async () => {
    await request(app.getHttpServer())
      .get("/cropYieldPredictions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cropYieldPredictions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cropYieldPredictions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cropYieldPredictions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cropYieldPredictions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cropYieldPredictions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cropYieldPredictions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cropYieldPredictions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
