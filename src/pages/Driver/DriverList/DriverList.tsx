import { Table } from "components/Table";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { toast } from "react-toastify";
import { api } from "services";
import { ButtonLink, CreateButtonContainer } from "./DriverList.style";

export const DriverList = () => {
  const [rows, setRows] = useState<any>([]);

  const driversHeaders = [
    "Creation Date",
    "ID",
    "City",
    "First Name",
    "Last Name",
    "E-mail",
    "Phone",
    "Avatar URL",
    "Status",
    "Company",
  ];

  const convertDataValuesInArray = (data: any) => {
    const rowsObjects: any[] = [];
    data.forEach((row: any) => {
      rowsObjects.push(Object.values(row));
    });

    setRows(rowsObjects);
  };

  useEffect(() => {
    api
      .get("drivers")
      .then((response) => {
        convertDataValuesInArray(response.data);
      })
      .catch((error) => toast.error("Error to consult drivers!"));
  });

  return (
    <Container>
      <CreateButtonContainer>
        <Button variant="success" className="mt-5">
          <ButtonLink to={"/driverForm"}>
            new Driver <MdOutlineCreateNewFolder />
          </ButtonLink>
        </Button>
      </CreateButtonContainer>
      <Table
        tableTitle="Drivers"
        headers={driversHeaders}
        tableDataRows={rows}
      />
    </Container>
  );
};
