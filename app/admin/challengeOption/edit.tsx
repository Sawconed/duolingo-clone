import { BooleanInput, Edit, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" label="Text" validate={[required()]} />
        <BooleanInput
          source="correct"
          label="Correct option"
        />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image URL" validate={[required()]} />
        <TextInput source="audioSrc" label="Audio URL" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
