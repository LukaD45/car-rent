"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CarList } from "./car/list";
import { CarCreate } from "./car/create";
import { CarEdit } from "./car/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="cars"
        recordRepresentation="marka"
        list={CarList}
        create={CarCreate}
        edit={CarEdit}
      />
    </Admin>
  );
};

export default App;
