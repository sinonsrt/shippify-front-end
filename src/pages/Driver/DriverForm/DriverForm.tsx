import {
  FormTitle,
  FormButtons,
  ButtonLink,
  TopButtonContainer,
} from "./DriverForm.style";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "services";
import { toast } from "react-toastify";
import { useFormik } from "formik";
export const DriverForm = () => {
  const [companies, setCompanies] = useState<any[]>([]);

  const createCompany = (values: object) => {
    api
      .post("drivers", values)
      .then((response) => toast.success("Successfully to create driver!"))
      .catch((error) => toast.error("Error to create driver!"));
  };

  const formik = useFormik({
    initialValues: {
      company_id: "",
      city: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      avatar_url: "",
      status: "",
    },
    onSubmit: (values) => {
      createCompany(values);
    },
  });

  useEffect(() => {
    api
      .get("companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => toast.error("Error to consult companies!"));
  });

  return (
    <Container>
      <TopButtonContainer>
        <Button variant="primary" className="mt-5">
          <ButtonLink to={"/driversList"}>
            See drivers <AiOutlineUnorderedList />
          </ButtonLink>
        </Button>
      </TopButtonContainer>
      <FormTitle> Create a new Driver </FormTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="company_id">
          <Form.Label>Driver</Form.Label>
          <Form.Select
            id="company_id"
            placeholder="company_id"
            value={formik.values.company_id}
            onChange={formik.handleChange}
          >
            <option>Select a company...</option>
            {companies &&
              companies.map((company, index) => (
                <option
                  key={index}
                  value={company.id}
                >{`${company.name}`}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text id="city">City</InputGroup.Text>
          <FormControl
            placeholder="Input a city here..."
            aria-label="city"
            aria-describedby="city"
            id="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="model">First Name</InputGroup.Text>
          <FormControl
            placeholder="Input the first name here..."
            aria-label="first_name"
            aria-describedby="first_name"
            id="first_name"
            type="text"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="last_name">Last Name</InputGroup.Text>
          <FormControl
            placeholder="Input a last name here..."
            aria-label="last_name"
            aria-describedby="last_name"
            id="last_name"
            type="text"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="email">Email</InputGroup.Text>
          <FormControl
            placeholder="Input a email here..."
            aria-label="email"
            aria-describedby="email"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="phone">Phone</InputGroup.Text>
          <FormControl
            placeholder="Input a phone here..."
            aria-label="phone"
            aria-describedby="phone"
            id="phone"
            type="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="avatar_url"> Avatar URL</InputGroup.Text>
          <FormControl
            placeholder="Input a avatar URL here..."
            aria-label="avatar_url"
            aria-describedby="avatar_url"
            id="avatar_url"
            type="avatar_url"
            value={formik.values.avatar_url}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="status">Status</InputGroup.Text>
          <FormControl
            placeholder="Input a status here..."
            aria-label="status"
            aria-describedby="status"
            id="status"
            type="status"
            value={formik.values.status}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <FormButtons>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </FormButtons>
      </Form>
    </Container>
  );
};
