import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

export const CarCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="marka" />
        <TextInput source="model" />
        <TextInput source="slika" />
        <TextInput source="klasa" />
        <TextInput source="cijena" />
        <NumberInput source="potrosnja" />
        <NumberInput source="brojcilindara" />
        <TextInput source="pogonskiKotaci" />
        <TextInput source="vrstaMotora" />
        <NumberInput source="obujamMotora" />
        <NumberInput source="ubrzanje" />
        <TextInput source="boja" />
      </SimpleForm>
    </Create>
  );
};
