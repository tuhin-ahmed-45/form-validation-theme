import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import * as z from "zod";

interface IFormInput {
  number: string;
  email: string;
}

const FormValid = () => {
  const formMethods: UseFormReturn<IFormInput> = useForm({
    defaultValues: {
      number: "",
      email: "",
    },
    resolver: zodResolver(
      z.object({
        number: z
          .string()
          .min(11, "Minimum 11 digit is required! ")
          .max(13, "Max 13 digit! "),
        email: z
          .string({
            required_error: "Email is required!",
          })
          .min(1, "Email is required!")
          .email("Invalid email address!"),
      })
    ),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      {formMethods.formState.isSubmitSuccessful && (
        <p>Form submitted successfully!</p>
      )}
      <Box
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Typography variant="h4">Tuhin Ahmed</Typography>
        <TextField
          label="number"
          id="number"
          sx={{ m: 1, width: "25ch" }}
          {...formMethods.register("number")}
        />
        {formMethods.formState.errors.number && (
          <p>{formMethods.formState.errors.number.message}</p>
        )}

        <TextField
          label="email"
          id="email"
          sx={{ m: 1, width: "25ch" }}
          {...formMethods.register("email")}
        />
        {formMethods.formState.errors.email && (
          <p>{formMethods.formState.errors.email.message}</p>
        )}
        <Button type="submit">Submit</Button>
      </Box>
    </FormProvider>
  );
};

export default FormValid;
