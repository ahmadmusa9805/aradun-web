import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Button, ButtonLink } from "../../frontend/src/components/ui/button";
import { Dialog } from "../../frontend/src/components/ui/dialog";
import {
  TextField,
  TextAreaField,
  SelectField,
  Choice,
} from "../../frontend/src/components/forms/field";
import { ErrorSummary } from "../../frontend/src/components/forms/error-summary";
import { Feedback } from "../../frontend/src/components/feedback/feedback";
import { Table } from "../../frontend/src/components/data-display/table";
import { PriceComparison } from "../../frontend/src/modules/catalog/components/price-presentation";
import "../../frontend/src/styles/tokens.css";
import "../../frontend/src/styles/controls.css";

function Fixture() {
  const [attempt, setAttempt] = useState(0);
  const [removed, setRemoved] = useState(false);
  return (
    <main>
      <h1>Component verification — synthetic data</h1>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          setAttempt((value) => value + 1);
        }}
      >
        <ErrorSummary
          submission={attempt}
          errors={
            attempt
              ? [{ fieldId: "email", message: "Enter an email address" }]
              : []
          }
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          hint="Use an address you can access."
          error={attempt ? "Enter an email address" : undefined}
        />
        <TextAreaField id="brief" label="Brief" optional />
        <SelectField id="topic" label="Topic">
          <option value="">Choose a topic</option>
          <option>Website</option>
        </SelectField>
        <fieldset>
          <legend>Preferred contact</legend>
          <Choice
            id="contact-email"
            type="radio"
            name="contact"
            label="Email reply"
            defaultChecked
          />
          <Choice
            id="contact-phone"
            type="radio"
            name="contact"
            label="Phone reply"
          />
        </fieldset>
        <Choice id="consent" label="Synthetic choice" />
        <Button type="submit">Check answers</Button>
      </form>
      <ButtonLink href="#states" variant="secondary">
        View states
      </ButtonLink>
      <Button pending pendingLabel="Saving changes…">
        Save
      </Button>
      <section id="states" aria-label="Feedback examples">
        {(
          [
            "loading",
            "empty",
            "denied",
            "failure",
            "conflict",
            "success",
          ] as const
        ).map((state) => (
          <Feedback key={state} state={state}>
            <p>Synthetic {state} example; no request made.</p>
          </Feedback>
        ))}
      </section>
      <Table
        caption="Synthetic records"
        columns={[
          { id: "name", label: "Name" },
          { id: "state", label: "State" },
        ]}
      >
        <tr>
          <th scope="row">Sample record</th>
          <td>Draft</td>
        </tr>
      </Table>
      <section aria-labelledby="sample-prices">
        <h2 id="sample-prices">SAMPLE price presentations</h2>
        <PriceComparison
          offers={[
            {
              id: "SAMPLE-project",
              label: "SAMPLE project",
              price: {
                label: "From $699/project",
                currency: "USD",
                model: "one-time",
                unitConfirmed: true,
                indicative: true,
              },
            },
            {
              id: "SAMPLE-monthly",
              label: "SAMPLE monthly",
              price: {
                label: "From $49/month",
                currency: "USD",
                model: "monthly",
                unitConfirmed: true,
                indicative: true,
              },
            },
            {
              id: "SAMPLE-setup",
              label: "SAMPLE setup",
              price: {
                label: "$99 setup + $49/month",
                currency: "USD",
                model: "setup-plus-monthly",
                unitConfirmed: true,
                indicative: true,
              },
            },
            {
              id: "SAMPLE-custom",
              label: "SAMPLE custom",
              price: {
                label: "Custom",
                currency: "USD",
                model: "custom",
                unitConfirmed: false,
                indicative: true,
              },
            },
            {
              id: "SAMPLE-unknown",
              label: "SAMPLE unknown unit",
              price: {
                label: "$199",
                currency: "USD",
                model: "unconfirmed",
                unitConfirmed: false,
                indicative: true,
              },
            },
          ]}
        />
      </section>
      <Dialog
        trigger="Review removal"
        title="Remove Sample record?"
        description="This synthetic action affects Sample record only."
      >
        <Button variant="destructive" onClick={() => setRemoved(true)}>
          Remove Sample record
        </Button>
        {removed && <p role="status">Synthetic removal selected</p>}
      </Dialog>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<Fixture />);
