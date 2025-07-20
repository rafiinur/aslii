import React from "react";
import type { Module } from "../types";

interface EditModuleFormProps {
  module: Module;
  onSuccess?: () => void;
}

const EditModuleForm = ({ module, onSuccess }: EditModuleFormProps) => {
  return <div>EditModuleForm</div>;
};

export default EditModuleForm;
