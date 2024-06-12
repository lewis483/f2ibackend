import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UsageGuidelineList } from "./usageGuideline/UsageGuidelineList";
import { UsageGuidelineCreate } from "./usageGuideline/UsageGuidelineCreate";
import { UsageGuidelineEdit } from "./usageGuideline/UsageGuidelineEdit";
import { UsageGuidelineShow } from "./usageGuideline/UsageGuidelineShow";
import { InsecticideList } from "./insecticide/InsecticideList";
import { InsecticideCreate } from "./insecticide/InsecticideCreate";
import { InsecticideEdit } from "./insecticide/InsecticideEdit";
import { InsecticideShow } from "./insecticide/InsecticideShow";
import { PesticideList } from "./pesticide/PesticideList";
import { PesticideCreate } from "./pesticide/PesticideCreate";
import { PesticideEdit } from "./pesticide/PesticideEdit";
import { PesticideShow } from "./pesticide/PesticideShow";
import { FertilizerList } from "./fertilizer/FertilizerList";
import { FertilizerCreate } from "./fertilizer/FertilizerCreate";
import { FertilizerEdit } from "./fertilizer/FertilizerEdit";
import { FertilizerShow } from "./fertilizer/FertilizerShow";
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
        title={"Platform for Agricultural Products Information"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UsageGuideline"
          list={UsageGuidelineList}
          edit={UsageGuidelineEdit}
          create={UsageGuidelineCreate}
          show={UsageGuidelineShow}
        />
        <Resource
          name="Insecticide"
          list={InsecticideList}
          edit={InsecticideEdit}
          create={InsecticideCreate}
          show={InsecticideShow}
        />
        <Resource
          name="Pesticide"
          list={PesticideList}
          edit={PesticideEdit}
          create={PesticideCreate}
          show={PesticideShow}
        />
        <Resource
          name="Fertilizer"
          list={FertilizerList}
          edit={FertilizerEdit}
          create={FertilizerCreate}
          show={FertilizerShow}
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
