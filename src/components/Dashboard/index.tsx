import React, { useRef, useState } from 'react';
import { useForm } from 'antd/es/form/Form'
import html2canvas from "html2canvas"
// import jsPDF from "jspdf"
import FormOne from './helpers/FormOne';
import FormTwo from './helpers/FormTwo';
import DashboardOneTable from './helpers/DashboardOneTable';
import DashboardTwoTable from './helpers/DashboardTwoTable';
import TableHead from '../../utils/components/TableHead';

interface FormData {
  firstName: string;
  lastName: string;
}
function downloadPDF(pdfRef: React.RefObject<HTMLDivElement>) {
  const input = pdfRef.current;

  if (input) {
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'pdf_image.png';
      link.href = imgData;
      link.click();
    });
  } else {
    console.error('PDF reference is null or undefined.');
  }
}
const Dashboard: React.FC = () => {
  const [form] = useForm()
  const pdfRefOne = useRef<HTMLDivElement>(null);
  const pdfRefTwo = useRef<HTMLDivElement>(null);
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
const handleDownloadPDFOne = () => {
  downloadPDF(pdfRefOne);
};
const handleDownloadPDFTwo = () => {
  downloadPDF(pdfRefTwo);
};
let btnOne = <button onClick={handleDownloadPDFOne}>Download pdf</button>
let btnTwo = <button onClick={handleDownloadPDFTwo}>Download pdf</button>
  return (
    <>
    <div className="App">
        <div>
      <FormOne onFinish={onFinishFormOne} form={form} />
      <FormTwo onFinish={onFinishFormTwo} form={form2}/>
        </div>
        <div >
            <div ref={pdfRefOne}>
            <TableHead heading="Form One Heading" btn={btnOne}/>
            <DashboardOneTable  formData={formData}/>
            </div>
            <br />
            <br />
            <div ref={pdfRefTwo}>
            <TableHead heading="Form Two Heading" btn={btnTwo} />
            <DashboardTwoTable  formData={formDataTwo}/>
        </div>
            <br />
            <br />
        </div>
    </div>
    </>
  );
};

export default Dashboard;