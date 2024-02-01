import React, { useState } from 'react';
import FormOne from './helpers/FormOne';
import FormTwo from './helpers/FormTwo';
import { useForm } from 'antd/es/form/Form'
import DashboardOneTable from './helpers/DashboardOneTable';
import DashboardTwoTable from './helpers/DashboardTwoTable';
import TableHead from '../../utils/components/TableHead';

interface FormData {
  firstName: string;
  lastName: string;
}
const Dashboard: React.FC = () => {
  const [form] = useForm()
  const [form2] = useForm()
  const [formData, setFormData] = useState<FormData[]>([]);
  const [formDataTwo, setFormDataTwo] = useState<FormData[]>([]);
const onFinishFormOne = (values: any) => {
    setFormData(prevDataArray => [
    ...prevDataArray,
    { ...values },
  ]);
  form.resetFields()
};
const onFinishFormTwo = (values: any) => {
  setFormDataTwo(prevDataArray => [
    ...prevDataArray,
    { ...values },
  ]);
  form2.resetFields()
};
  return (
    <>
    <div className="App">
        <div>
      <FormOne onFinish={onFinishFormOne} form={form} />
      <FormTwo onFinish={onFinishFormTwo} form={form2}/>
        </div>
        <div>
            <TableHead heading="Form One Heading" />
            <DashboardOneTable  formData={formData}/>
            <br />
            <TableHead heading="Form Two Heading" />
            <DashboardTwoTable  formData={formDataTwo}/>
        </div>
    </div>
    </>
  );
};

export default Dashboard;