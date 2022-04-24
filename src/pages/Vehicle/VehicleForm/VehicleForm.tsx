import {
  FormTitle,
  FormButtons,
  ButtonLink,
  TopButtonContainer,
} from "./VehicleForm.style";
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

export const VehicleForm = () => {
  const [drivers, setDrivers] = useState<any[]>([]);

  const createCompany = (values: object) => {
    api
      .post("vehicles", values)
      .then((response) => toast.success("Successfully to create vehicle!"))
      .catch((error) => toast.error("Error to create vehicle!"));
  };

  const formik = useFormik({
    initialValues: {
      driver_id: "",
      plate: "",
      model: "",
      type: "",
      capacity: "",
    },
    onSubmit: (values) => {
      createCompany(values);
    },
  });

  useEffect(() => {
    api
      .get("drivers")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => toast.error("Error to consult drivers!"));
  });

  return (
    <Container>
      <TopButtonContainer>
        <Button variant="primary" className="mt-5">
          <ButtonLink to={"/vehiclesList"}>
            See vehicles <AiOutlineUnorderedList />
          </ButtonLink>
        </Button>
      </TopButtonContainer>
      <FormTitle> Create a new Vehicle </FormTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="driver_id">
          <Form.Label>Driver</Form.Label>
          <Form.Select
            id="driver_id"
            placeholder="driver_id"
            value={formik.values.driver_id}
            onChange={formik.handleChange}
          >
            <option>Select a driver...</option>
            {drivers &&
              drivers.map((driver, index) => (
                <option
                  key={index}
                  value={driver.id}
                >{`${driver.first_name} ${driver.last_name}`}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text id="plate">Plate</InputGroup.Text>
          <FormControl
            placeholder="Input a plate here..."
            aria-label="plate"
            aria-describedby="plate"
            id="plate"
            type="text"
            value={formik.values.plate}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="model">Model</InputGroup.Text>
          <FormControl
            placeholder="Input a model here..."
            aria-label="model"
            aria-describedby="model"
            id="model"
            type="text"
            value={formik.values.model}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="type">Type</InputGroup.Text>
          <FormControl
            placeholder="Input a type here..."
            aria-label="type"
            aria-describedby="type"
            id="type"
            type="text"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="capacity">Capacity</InputGroup.Text>
          <FormControl
            placeholder="Input a capacity here..."
            aria-label="capacity"
            aria-describedby="capacity"
            id="capacity"
            type="capacity"
            value={formik.values.capacity}
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
