import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CropTypeList } from "./cropType/CropTypeList";
import { CropTypeCreate } from "./cropType/CropTypeCreate";
import { CropTypeEdit } from "./cropType/CropTypeEdit";
import { CropTypeShow } from "./cropType/CropTypeShow";
import { MapLayerList } from "./mapLayer/MapLayerList";
import { MapLayerCreate } from "./mapLayer/MapLayerCreate";
import { MapLayerEdit } from "./mapLayer/MapLayerEdit";
import { MapLayerShow } from "./mapLayer/MapLayerShow";
import { FarmLocationList } from "./farmLocation/FarmLocationList";
import { FarmLocationCreate } from "./farmLocation/FarmLocationCreate";
import { FarmLocationEdit } from "./farmLocation/FarmLocationEdit";
import { FarmLocationShow } from "./farmLocation/FarmLocationShow";
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
        title={"Farm Mapping Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CropType"
          list={CropTypeList}
          edit={CropTypeEdit}
          create={CropTypeCreate}
          show={CropTypeShow}
        />
        <Resource
          name="MapLayer"
          list={MapLayerList}
          edit={MapLayerEdit}
          create={MapLayerCreate}
          show={MapLayerShow}
        />
        <Resource
          name="FarmLocation"
          list={FarmLocationList}
          edit={FarmLocationEdit}
          create={FarmLocationCreate}
          show={FarmLocationShow}
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
