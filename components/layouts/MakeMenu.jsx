import React, { useState } from "react";
import Cinput from "../../utils/Cinput";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import useStore from "../../store";
import Link from "next/link";
const MakeMenu = () => {
  const router = useRouter();

  const { handleSubmit, register, reset } = useForm();

  // const onSubmit = async (values) => {
  //   try {
  //     const data = await axios.post("/api/addp", values, {
  //       headers: { "Content-Type": "application/json" },
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       "Access-Control-Allow-Headers":
  //         "Content-Type, Authorization, Content-Length, X-Requested-With",
  //       "Access-Control-Allow-Credentials": true,
  //     });
  //     alert(JSON.stringify(data, null, 2));
  //     // alert(JSON.stringify(data, null, 2));
  //   } catch (e) {
  //     alert(JSON.stringify(values, null, 2));
  //     alert(e);
  //   } finally {
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // };
  const addOrder = useStore((state) => state.addOrders);

  const onSubmit = (data) => {
    // e.preventDefault();
    alert(JSON.stringify(data, null, 2));
    addOrder(data);
    if (data.pid == "00") {
      resetCart();
    }
    reset(data);
  };

  return (
    <div>
      <Link href="/receipt">Print</Link>
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <Cinput name="pid" register={register} />
        <Cinput name="name" register={register} />
        <Cinput name="price" register={register} />
        <Cinput name="discount" register={register} />
        <Cinput name="qty" register={register} />
        <Button mt={4} colorScheme="red" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeMenu;
