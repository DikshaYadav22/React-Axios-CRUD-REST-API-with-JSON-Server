import React, { memo } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddContacts = memo(() => {
  return (
    <div className="container p-4 m-4 mx-auto bg-light">
      <h3 className="text-center">Add Contacts</h3>
      <Form inline className=" p-2 m-2">
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
          <Label className="me-sm-2" for="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="something@idk.cool"
            type="email"
          />
        </FormGroup>

        <Button color="info">Submit</Button>
      </Form>
    </div>
  );
});

export default AddContacts;
