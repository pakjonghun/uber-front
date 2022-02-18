import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import ErrorMessage from "../../components/Error";
import Helemt from "../../components/Helmet";
import { useCreateRest } from "./hooks";

interface FormProps {
  name: string;
  adress: string;
  cateName: string;
  file: FileList;
  error?: string;
}

const AddRest = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [func] = useCreateRest(setIsUploading);
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormProps>({ mode: "onChange" });

  const onSubmit = useCallback(
    async (args) => {
      try {
        setIsUploading(true);
        const { file, ...rest } = args;
        const body = new FormData();
        body.append("file", file[0]);
        const img = await (
          await fetch("http://localhost:8000/upload", {
            method: "POST",
            body,
          })
        ).json();

        if (img) {
          func({ variables: { args: { ...rest, img: img["url"] } } });
        } else {
          alert("img upload failed");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError("error", { message: err.message });
          alert(err.message);
        }
        console.log(err);
        setIsUploading(false);
      }
    },
    [func, setError]
  );
  const commonValid = {
    validate: {
      isEmpty: (value: string) => value.trim().length > 0 || "empty",
    },
  };
  return (
    <div className="container bg-red-50">
      <Helemt title="Create Rest" />
      <div
        onClick={(event) => {
          const tag = (event.target! as HTMLElement).tagName;
          if (tag === "INPUT") {
            clearErrors("error");
          }
        }}
      >
        <form
          className="flex flex-col w-[40%] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", { ...commonValid })}
            type="text"
            placeholder="name"
          />
          {errors.name?.message && (
            <ErrorMessage message={errors.name.message} />
          )}

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
            {...register("cateName", { ...commonValid })}
            type="text"
            placeholder="cateName"
            className="mt-3"
          />
          {errors.cateName?.message && (
            <ErrorMessage message={errors.cateName.message} />
          )}

          <div>
            <input
              type="file"
              accept="image/*"
              required
              {...register("file")}
            />
          </div>
          <Button
            name="Submit"
            isLoading={isUploading}
            isValid={!Object.keys(errors).length}
          />
        </form>
      </div>
      {errors.error?.message && <ErrorMessage message={errors.error.message} />}
    </div>
  );
};

export default AddRest;
