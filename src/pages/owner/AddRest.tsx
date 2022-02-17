import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import ErrorMessage from "../../components/Error";
import Helemt from "../../components/Helmet";
import { useCreateRest } from "./hooks";

interface FormProps {
  name: string;
  adress: string;
  img: string;
  cateName: string;
}

const AddRest = () => {
  const [func, { data, loading }] = useCreateRest();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProps>({ mode: "onChange" });

  const onSubmit = useCallback(
    (args) => {
      func({ variables: { args } });
    },
    [func]
  );

  const commonValid = {
    validate: {
      isEmpty: (value: string) => value.trim().length > 0 || "empty",
    },
  };

  return (
    <div className="container">
      <Helemt title="Create Rest" />
      <form
        className="flex flex-col w-[40%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", { ...commonValid })}
          type="text"
          placeholder="name"
        />
        {errors.name?.message && <ErrorMessage message={errors.name.message} />}

        <input
          {...register("adress", { ...commonValid })}
          type="text"
          placeholder="adress"
          className="mt-3"
        />
        {errors.adress?.message && (
          <ErrorMessage message={errors.adress.message} />
        )}

        <input
          {...register("img", { ...commonValid })}
          type="text"
          placeholder="img"
          className="mt-3"
        />
        {errors.img?.message && <ErrorMessage message={errors.img.message} />}

        <input
          {...register("cateName", { ...commonValid })}
          type="text"
          placeholder="cateName"
          className="mt-3"
        />
        {errors.cateName?.message && (
          <ErrorMessage message={errors.cateName.message} />
        )}

        <Button name="Submit" isLoading={loading} isValid={isValid} />
      </form>
    </div>
  );
};

export default AddRest;
