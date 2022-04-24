import Button from "react-bootstrap/Button";
import { TableTitle } from "./Table.style";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { Container } from "react-bootstrap";

interface ITableProps {
  handleDeleteButton?: any;
  tableTitle: string;
  headers: any[];
  tableDataRows: any[];
}

export const Table: React.FC<ITableProps> = ({
  handleDeleteButton,
  tableTitle,
  headers,
  tableDataRows,
}) => {
  return (
    <Container>
      <TableTitle>{tableTitle} </TableTitle>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers &&
              headers.map((header, key) => <th key={key}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableDataRows &&
            tableDataRows.map((dataRows, index) => {
              return (
                <tr key={index}>
                  {dataRows.map((value: any, index: any) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td>
                    <Button variant="primary" className="me-1">
                      <GrUpdate />
                    </Button>
                    {handleDeleteButton && (
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteButton(dataRows[1])}
                      >
                        <FaRegTrashAlt />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};
