import {
  HvLoading,
  HvTableContainer,
  HvTable,
  HvTableHead,
  HvTableRow,
  HvTableCell,
  HvTableHeader,
  HvTableBody,
  HvTableInstance,
} from "@hitachivantara/uikit-react-core";

interface TableProps {
  id?: string;
  instance: HvTableInstance<ListViewModel, string>;
  isLoading: boolean;
}

/**
 * The requests table.
 *
 * @param {instance} Object the instance returned by the `useHvData` data.
 * @param {isLoading} boolean indicates whether or not the data is loading.
 */
export const Table = ({ id, instance, isLoading }: TableProps) => {
  return (
    <HvTableContainer style={{ padding: "2px" }}>
      <HvTable id={id} variant="listrow" {...instance.getTableProps()}>
        <HvTableHead>
          {instance.headerGroups.map((headerGroup) => (
            <HvTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <HvTableHeader {...col.getHeaderProps()} variant="default">
                  {col.render("Header")}
                </HvTableHeader>
              ))}
            </HvTableRow>
          ))}
        </HvTableHead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={7}>
                <div style={{ marginTop: 40, marginBottom: 40 }}>
                  <HvLoading label="Loading data..." />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <HvTableBody withNavigation {...instance.getTableBodyProps()}>
            {instance.page.map((row) => {
              instance.prepareRow(row);
              return (
                <HvTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <HvTableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </HvTableCell>
                  ))}
                </HvTableRow>
              );
            })}
          </HvTableBody>
        )}
      </HvTable>
    </HvTableContainer>
  );
};
