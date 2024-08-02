import { useState } from "react";

import Form from "../../base/form/Form";
import Input from "../../base/form/Input";
import Button from "../../base/button/Button";

import classes from "./FindUnitForm.module.css";

interface Props {
  onHandleSubmitSearch: (unitNumber: string) => void;
}

const FindUnitForm: React.FC<Props> = (props: Props) => {
  const { onHandleSubmitSearch } = props;
  const [unitId, setUnitId] = useState<string>("");

  const onChangeUnitId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnitId(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onHandleSubmitSearch(unitId);
    setUnitId("");
  };

  return (
    <Form
      onSubmit={submitFormHandler}
      externalstyles={classes["find-unit-form"]}
    >
      <Input
        element="input"
        labeltext="Unit"
        name="unit"
        id="unit"
        type="text"
        onChange={onChangeUnitId}
        value={unitId}
        externalstyles={classes["find-unit-input"]}
      />
      <Button externalstyles={classes["find-unit-btn"]}>Search</Button>
    </Form>
  );
};

export default FindUnitForm;
