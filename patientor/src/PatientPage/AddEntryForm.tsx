/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Form, Formik } from "formik";
import React from "react";
import { useStateValue } from "../state";
import { Diagnosis } from "../types";
import { DiagnosisSelection } from "../AddPatientModal/FormField";
import { Button, Grid } from "semantic-ui-react";

export type DiagnosisFormValues = Omit<Diagnosis, "id">;
interface Props {
  onSubmit: (values: DiagnosisFormValues) => void;
  onCancel: () => void;
}

const AddEntryForm = ({ onSubmit, onCancel }: Props) => {
  const [{ diagnoses }] = useStateValue();

  return (
    <Formik
      initialValues={{
        code: "",
        name: "",
      }}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />

            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
export default AddEntryForm;
