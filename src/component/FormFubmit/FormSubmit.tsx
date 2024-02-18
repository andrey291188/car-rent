import { Field, Formik, Form } from "formik";
import { brandChoiсeList } from "../../constants/constants";
import { FormSubmitType } from "../../types/types";
import { StyledFormWrapper } from "./StyledFormSubmit";

const FormSubmit = ({ handleSubmit }: FormSubmitType) => {
  return (
    <StyledFormWrapper>
      <Formik initialValues={{ carBrand: "" }} onSubmit={handleSubmit}>
        <Form className="form">
          <div className="form-input">
            <label htmlFor="exampleInputCar" className="form-label">
              Car Brand
            </label>
            <Field
              as="select"
              className="form-field"
              id="exampleInputCar"
              name="carBrand"
              defaultValue=""
            >
              <option key="default-option" value="" label="Choice the brand" />
              {brandChoiсeList.map((item, index) => (
                <option
                  key={item.slice(0, 5) + index + 1}
                  value={item}
                  label={item}
                />
              ))}
            </Field>
          </div>

          <button type="submit" className="button-search">
            Search
          </button>
        </Form>
      </Formik>
    </StyledFormWrapper>
  );
};

export default FormSubmit;
