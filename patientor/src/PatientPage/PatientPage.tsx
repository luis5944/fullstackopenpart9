/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import { Patient, Entry } from "../types";
import { setPatient } from "../state/reducer";
import Entries from "./Entries";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [state, dispatch] = useStateValue();
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchPatientList = async () => {
      try {
        const { data: patient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );

        dispatch(setPatient(patient));
        setGender(patient.gender);
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientList();
  }, [dispatch]);

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            {state.patient.name}{" "}
            <Icon
              name={
                gender === "male"
                  ? "mars stroke vertical"
                  : gender === "female"
                  ? "venus"
                  : "genderless"
              }
            />
          </Card.Header>
          <Card.Meta>
            <span>ssn: {state.patient.ssn}</span>
          </Card.Meta>
          <Card.Description>
            Occupation: {state.patient.occupation}
          </Card.Description>
        </Card.Content>
      </Card>
      <Entries />
    </div>
  );
};

export default PatientPage;
