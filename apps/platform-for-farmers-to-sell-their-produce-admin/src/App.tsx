import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { FarmerList } from "./farmer/FarmerList";
import { FarmerCreate } from "./farmer/FarmerCreate";
import { FarmerEdit } from "./farmer/FarmerEdit";
import { FarmerShow } from "./farmer/FarmerShow";
import { PricingList } from "./pricing/PricingList";
import { PricingCreate } from "./pricing/PricingCreate";
import { PricingEdit } from "./pricing/PricingEdit";
import { PricingShow } from "./pricing/PricingShow";
import { ProduceList } from "./produce/ProduceList";
import { ProduceCreate } from "./produce/ProduceCreate";
import { ProduceEdit } from "./produce/ProduceEdit";
import { ProduceShow } from "./produce/ProduceShow";
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
        title={"Platform for Farmers to Sell Their Produce"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Farmer"
          list={FarmerList}
          edit={FarmerEdit}
          create={FarmerCreate}
          show={FarmerShow}
        />
        <Resource
          name="Pricing"
          list={PricingList}
          edit={PricingEdit}
          create={PricingCreate}
          show={PricingShow}
        />
        <Resource
          name="Produce"
          list={ProduceList}
          edit={ProduceEdit}
          create={ProduceCreate}
          show={ProduceShow}
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
