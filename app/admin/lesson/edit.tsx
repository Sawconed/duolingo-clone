import { Edit, NumberInput, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" validate={[required()]} />
        <TextInput source="title" label="Title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" label="Order" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
