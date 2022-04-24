import { Table } from "components/Table";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "services";
import { toast } from "react-toastify";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  const companiesHeaders = [
    "ID",
    "Name",
    "City",
    "Status",
    "Plan Type",
    "Creation Date",
  ];

  useEffect(() => {
    api
      .get("companies")
      .then((response) => setCompanies(response.data))
      .catch((error) => toast.error("Error to consult comapanies!"));
  }, []);

  return <Table headers={companiesHeaders} data={companies} />;
};
