import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSubCategory = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [demo, setDemo] = useState("");
  console.log(demo);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/category/getallcategories"
      );
      setCategories(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    const category = demo;
    const { name, description } = data;
    
    try {
      await axios.post(
        "http://localhost:3000/api/v1/subcategory/createsubcategory",
        {
          name,
          description,
          category
        }
      );

      toast.success("Sub Category created successfully!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error creating sub category:", error);
      toast.error("Failed to create sub category");
    }
  };

  return (
    <div className="px-10">
      <h2 className="text-2xl font-bold mb-4">Create Sub Category</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup className="my-2">
          <Field>
            <FieldLabel htmlFor="name">Sub Category Name</FieldLabel>
            <Input
              id="name"
              placeholder="Sub Category Name"
              {...register("name", {
                required: "Sub Category Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </Field>
        </FieldGroup>

        <FieldGroup className="my-2">
          <Field>
            <FieldLabel htmlFor="description">
              Sub Category Description
            </FieldLabel>
            <Input
              id="description"
              placeholder="Sub Category Description"
              {...register("description", {
                required: "Sub Category Description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </Field>
        </FieldGroup>

        <FieldGroup className="my-2">
          <Field>
            <FieldLabel htmlFor="categoryId">Category</FieldLabel>
            <Controller
              name="categoryId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={(value) => setDemo(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.categoryId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.categoryId.message}
              </p>
            )}
          </Field>
        </FieldGroup>

        <div className="mt-5">
          <Button type="submit">Create Sub Category</Button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default CreateSubCategory;
