// app/routes/contact.tsx
import { Form } from '@remix-run/react';
import { redirect, ActionFunction } from '@remix-run/node';

export default function Contact() {
  return (
    <Form method="post">
      <label>
        Name: <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
}

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");

  // Process the form data (e.g., save to database)
  console.log("Name: "+name);

  return redirect("/thank-you");
};