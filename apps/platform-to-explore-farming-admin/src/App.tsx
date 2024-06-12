import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { FarmerProfileList } from "./farmerProfile/FarmerProfileList";
import { FarmerProfileCreate } from "./farmerProfile/FarmerProfileCreate";
import { FarmerProfileEdit } from "./farmerProfile/FarmerProfileEdit";
import { FarmerProfileShow } from "./farmerProfile/FarmerProfileShow";
import { ProduceInfoList } from "./produceInfo/ProduceInfoList";
import { ProduceInfoCreate } from "./produceInfo/ProduceInfoCreate";
import { ProduceInfoEdit } from "./produceInfo/ProduceInfoEdit";
import { ProduceInfoShow } from "./produceInfo/ProduceInfoShow";
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
        title={"Platform to Explore Farming"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
        <Resource
          name="FarmerProfile"
          list={FarmerProfileList}
          edit={FarmerProfileEdit}
          create={FarmerProfileCreate}
          show={FarmerProfileShow}
        />
        <Resource
          name="ProduceInfo"
          list={ProduceInfoList}
          edit={ProduceInfoEdit}
          create={ProduceInfoCreate}
          show={ProduceInfoShow}
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
