import { Table } from "components/Table";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "services";
import { toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CreateButtonContainer, ButtonLink } from "./CompanyList.style";

export const CompanyList = () => {
  const [rows, setRows] = useState<any>([]);
  const [refresh, setRefresh] = useState(0);

  const companiesHeaders = [
    "Creation Date",
    "ID",
    "Name",
    "City",
    "Status",
    "Plan Type",
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
      .delete(`companies/${id}`)
      .then(() => {
        toast.success("Company successfully deleted!");
        setRefresh(Math.random());
      })
      .catch((error) => toast.error("Error to delete company!"));
  };

  useEffect(() => {
    api
      .get("companies")
      .then((response) => {
        convertDataValuesInArray(response.data);
      })
      .catch((error) => toast.error("Error to consult companies!"));
  }, [refresh]);

  return (
    <Container>
      <CreateButtonContainer>
        <Button variant="success" className="mt-5">
          <ButtonLink to={"/companyForm"}>
            new Company <MdOutlineCreateNewFolder />
          </ButtonLink>
        </Button>
      </CreateButtonContainer>
      <Table
        handleDeleteButton={handleDeleteButton}
        tableTitle="Companies"
        headers={companiesHeaders}
        tableDataRows={rows}
      />
    </Container>
  );
};
