import React from 'react'
interface MyComponentProps {
    heading: String;
    btn:any
  }
  const TableHead: React.FC <MyComponentProps>= ({ heading,btn }) => {
  return (
    <>
    <div style={{marginTop:"10px",marginBottom:"10px"}}>
      <h2>
      {heading}
      </h2>
      {btn}
    </div>
    </>
  )
}

export default TableHead