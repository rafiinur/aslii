import React from "react";

const EmployeeDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default EmployeeDetailPage;
