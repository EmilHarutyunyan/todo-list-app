import * as yup from "yup";

export const schemaTask = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string(),
  deadline: yup.string(),
});
