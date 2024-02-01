import React from 'react';
import { Table } from 'antd';
const { Column } = Table
interface DataType {
  formData: any;
}
const DashboardOneTable: React.FC<DataType> = ({formData}) => {
  return (
    <Table dataSource={formData}>
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Website" dataIndex="website" key="website" />
    <Column title="Introduction" dataIndex="introduction" key="introduction" />
  </Table>
);
}

export default DashboardOneTable;