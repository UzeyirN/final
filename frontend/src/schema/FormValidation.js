import * as yup from "yup";

const schema = yup.object().shape({
    image: yup.string().required("Enter value"),
    name: yup.string().min(3).required("Enter value"),
    specialty: yup.string().min(3).required("Enter value"),
    comment: yup.string().required("Enter value").min(10).max(1000)
});

export default schema