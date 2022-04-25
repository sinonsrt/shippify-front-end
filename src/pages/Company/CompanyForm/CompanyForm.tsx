import {
  FormTitle,
  FormButtons,
  ButtonLink,
  TopButtonContainer,
} from "./CompanyForm.style";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { api } from "services";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CompanyForm = () => {
  const [action, setAction] = useState<string>("create");
  const createCompany = (values: object) => {
    api
      .post("companies", values)
      .then((response) => toast.success("Successfully to create company!"))
      .catch((error) => toast.error("Error to create company!"));
  };
  const updateCompany = (id: number, values: object) => {
    api
      .put(`companies/${id}`, values)
      .then((response) => toast.success("Successfully to update company!"))
      .catch((error) => {
        console.log(error);
        toast.error("Error to update company!");
      });
  };

  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
      status: "",
      plan_type: "",
    },
    onSubmit: (values) => {
      if (action === "create") {
        createCompany(values);
      } else {
        updateCompany(Number(id), values);
      }
      window.location.replace("/companiesList");
    },
  });

  useEffect(() => {
    if (id) {
      api
        .get(`companies/${id}`)
        .then((response) => {
          formik.setValues({
            name: response.data.name,
            city: response.data.city,
            status: response.data.status,
            plan_type: response.data.plan_type,
          });

          setAction("update");
        })
        .catch(() => toast.error("Error to get company!"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      <TopButtonContainer>
        <Button variant="primary" className="mt-5">
          <ButtonLink to={"/companiesList"}>
            See companies <AiOutlineUnorderedList />
          </ButtonLink>
        </Button>
      </TopButtonContainer>
      <FormTitle> Create a new Company </FormTitle>
      <Form onSubmit={formik.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="name">Name</InputGroup.Text>
          <FormControl
            placeholder="Input a name here..."
            aria-label="name"
            aria-describedby="name"
            id="name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="city">City</InputGroup.Text>
          <FormControl
            placeholder="Input the city here..."
            aria-label="city"
            aria-describedby="city"
            id="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="status">Status</InputGroup.Text>
          <FormControl
            placeholder="Input a status name here..."
            aria-label="status"
            aria-describedby="status"
            id="status"
            type="text"
            value={formik.values.status}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="plan_type">Plan Type</InputGroup.Text>
          <FormControl
            placeholder="Input a plan type here..."
            aria-label="plan_type"
            aria-describedby="plan_type"
            id="plan_type"
            type="plan_type"
            value={formik.values.plan_type}
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
