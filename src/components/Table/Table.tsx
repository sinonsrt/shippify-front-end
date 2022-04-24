import { useEffect } from "react";
import { useState } from "react";

interface ITableProps {
  headers: any[];
  data: any[];
}

export const Table: React.FC<ITableProps> = ({ headers, data }) => {
  const [contents, setContents] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertDataValuesInArray = () => {
    const rowsObjects: any[] = [];
    data.forEach((row) => {
      rowsObjects.push(Object.values(row));
    });

    setContents(rowsObjects);
  };

  console.log(contents);

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers &&
              headers.map((header, key) => <th key={key}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {contents &&
            contents.map((content, index) => {
              return (
                <tr key={index}>
                  <td>a</td>
                  {/* {content[index].map((value: any, index: any) => (
                    <td key={index}>{value}</td>
                  ))} */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
