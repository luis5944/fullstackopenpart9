/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import AddDiagnoseModal from "./AddDiagnoseModal";
import { DiagnosisFormValues } from "./AddEntryForm";
import EntryDetails from "./EntryDetails";

const Entries = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const [error, setError] = React.useState<string | undefined>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const [state, dispatch] = useStateValue();
  const entries = state.patient.entries;

  const submitNewEntry = async (values: DiagnosisFormValues) => {
    try {
      console.log(values);
      //  const data = await axios.post(`${apiBaseUrl}/patients`, values);
      // dispatch(addPatient(newPatient));
      closeModal();
    } catch (e) {
      console.error(e.response?.data || "Unknown Error");
      setError(e.response?.data?.error || "Unknown error");
    }
  };

  if (entries.length <= 0) {
    return null;
  }

  return (
    <div>
      <h3>Entries</h3>
      {entries.map((e) => (
        <Grid columns={2} key={e.id}>
          {<EntryDetails entry={e} />}
        </Grid>
      ))}

      <AddDiagnoseModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button onClick={() => openModal()}>Add New Entry</Button>
    </div>
  );
};

export default Entries;
