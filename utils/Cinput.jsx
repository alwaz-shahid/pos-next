import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Cinput = ({
  name,
  placeHolder = name,
  type = "text",
  register,
  ...rest
}) => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();
  return (
    <div className="" style={{ margin: "10px" }}>
      {/* <FormControl isInvalid={errors.name}> */}
      {/* <FormLabel htmlFor={name}>First name</FormLabel> */}
      <Input
        colorScheme="blackAlpha"
        shadow={1}
        m={2}
        id={name}
        placeholder={name}
        tyoe={type}
        {...register(name, {
          // required: "This is required",
          // minLength: { value: 4, message: "Minimum length should be 4" },
        })}
        {...rest}
      />
      {/* <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> */}
      {/* </FormControl> */}
    </div>
  );
};

export default Cinput;
