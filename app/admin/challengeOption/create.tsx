import { Create, ReferenceInput, required, SimpleForm, TextInput, BooleanInput } from "react-admin"

export const ChallengeOptionCreate = () => {
  return (
    <Create>
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
    </Create>
  )
}
