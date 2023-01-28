import * as yup from "yup";

const schema = yup.object().shape({
    image: yup.string().required("Enter value"),
    name: yup.string().min(3).required("Enter value"),
    comment: yup.string().min(10).max(1000).required("Enter value")
});

export default schema