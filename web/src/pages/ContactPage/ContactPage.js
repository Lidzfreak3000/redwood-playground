import { Form, Submit, TextAreaField, TextField, FieldError, Label } from '@redwoodjs/forms'
import { Button, Input } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <Input as={TextField} name='name' validation={{ required: true }} errorClassName="error" />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <Input as={TextField} name='email' validation={{
          required: true, pattern: {
            value: /^[^@]+@[^.]+\..+$/,
            message: 'Please enter a valid email address',
          },
        }} errorClassName="error" />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <Input as={TextAreaField} name='message' validation={{ required: true }} errorClassName="error" />
        <FieldError name="message" className="error" />

        <Button as={Submit} type="submit">Save</Button>
      </Form>
    </>
  )
}

export default ContactPage
