import axios from "axios";




import { useState, useEffect } from "react";
import {
  SignupContainer,
  SignupForm,
  FormField,
  Label,
  Input,
  Error,
  SubmitButton,
  SignupImageLabel,
  ProfileInput,
  SignupHeader,
} from "./signupstyles";
import { useNavigate } from "react-router-dom";

function Signup() {
  const initialValues = {
    name: "",
    email: "",
    contactNo: "",
    password: "",
  };
  const [formValues, setFormValues] = useState("");
  const [formErrors, setformErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can submit the form data to your server or perform any other desired actions.
    try {
      const response = await axios.post("http://localhost:5000/api/users/", formValues);
      console.log(response.data)
      if (response.data.exists) {
        alert("exists");
      } else {
        // Use the `history` function to navigate to the login page
        history("/login");
      }
  }catch (error) {
    console.error(error);
    alert("Wrong details");
  }}
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const Validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "This is not a valid phone number";
    }
    return errors;
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <SignupHeader>Sign up</SignupHeader>

        <FormField>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Enter your Name"
            onChange={handleChange}
          />
        </FormField>
        <Error>{formErrors.name}</Error>
        <FormField>
          <Label>Contact no:</Label>
          <Input
            type="number"
            name="phone"
            value={formValues.phone}
            placeholder="Enter your Contact no"
            onChange={handleChange}
          />
        </FormField>
        <Error>{formErrors.phone}</Error>

        <FormField>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          />
        </FormField>
        <Error>{formErrors.email}</Error>

        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          />
        </FormField>
        <Error>{formErrors.password}</Error>

        <FormField>
          <Label>Profile photo</Label>
          <ProfileInput type="file" />
        </FormField>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignupForm>
    </SignupContainer>
  );
}
export default Signup;

