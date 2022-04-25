import { TableTitle } from "./Table.style";
import { FaRegTrashAlt } from "react-icons/fa";
import { Container, Button } from "react-bootstrap";
import { GrUpdate } from "react-icons/gr";

interface ITableProps {
  handleDeleteButton?: any;
  formType?: string;
  tableTitle: string;
  headers: any[];
  tableDataRows: any[];
}

export const Table: React.FC<ITableProps> = ({
  formType,
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
                      <a href={`/${formType}/${dataRows[1]}`}>
                        <GrUpdate />
                      </a>
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
