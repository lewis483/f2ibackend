import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FinancialProjectionList } from "./financialProjection/FinancialProjectionList";
import { FinancialProjectionCreate } from "./financialProjection/FinancialProjectionCreate";
import { FinancialProjectionEdit } from "./financialProjection/FinancialProjectionEdit";
import { FinancialProjectionShow } from "./financialProjection/FinancialProjectionShow";
import { AnalysisReportList } from "./analysisReport/AnalysisReportList";
import { AnalysisReportCreate } from "./analysisReport/AnalysisReportCreate";
import { AnalysisReportEdit } from "./analysisReport/AnalysisReportEdit";
import { AnalysisReportShow } from "./analysisReport/AnalysisReportShow";
import { FarmProduceList } from "./farmProduce/FarmProduceList";
import { FarmProduceCreate } from "./farmProduce/FarmProduceCreate";
import { FarmProduceEdit } from "./farmProduce/FarmProduceEdit";
import { FarmProduceShow } from "./farmProduce/FarmProduceShow";
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
        title={"Platform for Farm Produce Analysis"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FinancialProjection"
          list={FinancialProjectionList}
          edit={FinancialProjectionEdit}
          create={FinancialProjectionCreate}
          show={FinancialProjectionShow}
        />
        <Resource
          name="AnalysisReport"
          list={AnalysisReportList}
          edit={AnalysisReportEdit}
          create={AnalysisReportCreate}
          show={AnalysisReportShow}
        />
        <Resource
          name="FarmProduce"
          list={FarmProduceList}
          edit={FarmProduceEdit}
          create={FarmProduceCreate}
          show={FarmProduceShow}
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
