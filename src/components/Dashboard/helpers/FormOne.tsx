import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, InputNumber } from 'antd';

const FormContainer = styled(Form)`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
interface MyComponentProps {
  onFinish: any;
  form: any;
}
const FormOne: React.FC<MyComponentProps> = ({onFinish,form}) => {
  return (  
  <FormContainer
    {...layout}
    name="nest-messages"
    form={form}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <FormHeading>Form 1</FormHeading>
    <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={'age'} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={'website'} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={'introduction'} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </FormContainer>
)};

export default FormOne;
