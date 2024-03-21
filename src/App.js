import React from "react";
import Table from "./Table";
import { SCHEDULE_DATA } from "./data/schedules.data";
import { groupByKey } from "./utils";

const App = () => {
  // Sample data
  const tableData = groupByKey(SCHEDULE_DATA, 'team');

  return (
    <div className="app-container">
      <Table data={tableData} />
    </div>
  );
};

export default App;
