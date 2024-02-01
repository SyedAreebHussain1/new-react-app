import React from 'react'
interface MyComponentProps {
    heading: String;
  }
  const TableHead: React.FC <MyComponentProps>= ({ heading }) => {
  return (
    <>
    <div style={{marginTop:"10px",marginBottom:"10px"}}>
      <h2>
      {heading}
      </h2>
    </div>
    </>
  )
}

export default TableHead