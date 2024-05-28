import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  NumberField,
} from "react-admin";

export const CarList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="marka" />
        <TextField source="model" />
        <TextField source="slika" />
        <TextField source="klasa" />
        <TextField source="cijena" />
        <TextField source="potrosnja" />
        <TextField source="brojcilindara" />
        <TextField source="pogonskiKotaci" />
        <TextField source="vrstaMotora" />
        <TextField source="obujamMotora" />
        <TextField source="ubrzanje" />
        <TextField source="boja" />
      </Datagrid>
    </List>
  );
};
