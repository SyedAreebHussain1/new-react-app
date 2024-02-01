import React from 'react';
import { Table } from 'antd';
const { Column } = Table
interface DataType {
  formData: any;
}
const DashboardTwoTable: React.FC<DataType> = ({formData}) => {
  return (
    <Table dataSource={formData}>
    <Column title="Confirm" dataIndex="confirm" key="confirm" />
    <Column title="Nickname" dataIndex="nickname" key="nickname" />
    <Column title="Phone Number" dataIndex="phone" key="phone" />
    <Column title="Website" dataIndex="website" key="website" />
  </Table>
);
}

export default DashboardTwoTable;