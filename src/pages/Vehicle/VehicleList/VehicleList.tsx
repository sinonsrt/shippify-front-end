import { Table } from "components/Table";
import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { toast } from "react-toastify";
import { api } from "services";
import { ButtonLink, TopButtonContainer } from "./VehicleList.style";

export const VehicleList = () => {
  const [rows, setRows] = useState<any>([]);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [search, setSearch] = useState<number>();
  const [refresh, setRefresh] = useState(0);

  const vehiclesHeaders = [
    "Creation Date",
    "ID",
    "Plate",
    "Model",
    "Type",
    "Capacity",
    "Driver",
  ];

  const convertDataValuesInArray = (data: any) => {
    const rowsObjects: any[] = [];
    data.forEach((row: any) => {
      rowsObjects.push(Object.values(row));
    });

    setRows(rowsObjects);
  };

  const handleDeleteButton = (id: number) => {
    api
      .delete(`vehicles/${id}`)
      .then(() => {
        toast.success("Vehicle successfully deleted!");
        setRefresh(Math.random());
      })
      .catch((error) => toast.error("Error to delete company!"));
  };

  useEffect(() => {
    api
      .get("vehicles")
      .then((response) => {
        convertDataValuesInArray(response.data);
      })
      .catch((error) => toast.error("Error to consult vehicles!"));

    api
      .get("drivers")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => toast.error("Error to consult drivers!"));
  }, [refresh]);

  useEffect(() => {
    api
      .get(`vehicles`, {
        params: {
          ...(search && { driver_id: search }),
        },
      })
      .then((response) => convertDataValuesInArray(response.data))
      .catch((error) => toast.error("Error to filter vehicles by driver!"));
  }, [search, refresh]);

  return (
    <Container>
      <TopButtonContainer>
        <Button variant="success" className="mt-5">
          <ButtonLink to={"/vehicleForm"}>
            new Vehicle <MdOutlineCreateNewFolder />
          </ButtonLink>
        </Button>
      </TopButtonContainer>
      <InputGroup className="mb-3 mt-3">
        <Form.Select onChange={(e) => setSearch(Number(e.target.value))}>
          <option>Select a driver to filter...</option>
          {drivers &&
            drivers.map((driver, index) => (
              <option
                key={index}
                value={driver.id}
              >{`${driver.first_name} ${driver.last_name}`}</option>
            ))}
        </Form.Select>
      </InputGroup>
      <Table
        handleDeleteButton={handleDeleteButton}
        tableTitle="Vehicles"
        headers={vehiclesHeaders}
        tableDataRows={rows}
      />
    </Container>
  );
};
