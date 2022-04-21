import React, { memo } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const AddContacts = memo(() => {
  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter username !"
            type="text"
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
});

export default AddContacts;
