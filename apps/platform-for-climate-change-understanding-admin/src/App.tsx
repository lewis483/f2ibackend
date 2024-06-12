import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CropYieldPredictionList } from "./cropYieldPrediction/CropYieldPredictionList";
import { CropYieldPredictionCreate } from "./cropYieldPrediction/CropYieldPredictionCreate";
import { CropYieldPredictionEdit } from "./cropYieldPrediction/CropYieldPredictionEdit";
import { CropYieldPredictionShow } from "./cropYieldPrediction/CropYieldPredictionShow";
import { ClimateDataList } from "./climateData/ClimateDataList";
import { ClimateDataCreate } from "./climateData/ClimateDataCreate";
import { ClimateDataEdit } from "./climateData/ClimateDataEdit";
import { ClimateDataShow } from "./climateData/ClimateDataShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Platform for Climate Change Understanding"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CropYieldPrediction"
          list={CropYieldPredictionList}
          edit={CropYieldPredictionEdit}
          create={CropYieldPredictionCreate}
          show={CropYieldPredictionShow}
        />
        <Resource
          name="ClimateData"
          list={ClimateDataList}
          edit={ClimateDataEdit}
          create={ClimateDataCreate}
          show={ClimateDataShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
