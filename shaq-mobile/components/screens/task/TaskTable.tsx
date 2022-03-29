import * as React from "react";
import { DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const TaskTable = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Subject</DataTable.Title>
        <DataTable.Title>Project</DataTable.Title>
        <DataTable.Title>Description</DataTable.Title>
        <DataTable.Title>Assignee</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default TaskTable;
