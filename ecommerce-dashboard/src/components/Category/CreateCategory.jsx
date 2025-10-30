import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateCategory = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    console.log(errors);
    

    const onSubmit = (data) =>{
      console.log(data);
      try{
        axios.post("http://localhost:3000/api/v1/category/createcategory",data);
        toast.success("Category created successfully!");
        reset(); // Reset form after successful submission
      }catch (error){
        console.log(error);
        
      }
    }

  return (
    <div className="px-10">
      this is category Page
      <form onSubmit={handleSubmit(onSubmit)} >
         <FieldGroup className='my-2' > 
              <Field>
                <FieldLabel htmlFor="name">
                  Category Name
               </FieldLabel>

                <Input
                 id="name"
                placeholder="Category Name"
                 {...register("name" ,  {
                  required : "Category Name is Required " })}
              />
              {
                errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )
              }
             </Field>
          </FieldGroup>
         <FieldGroup className='my-2'>
              <Field>
                <FieldLabel htmlFor="description">
                  Category Description
               </FieldLabel>

                <Input
                  {
                    ...register("description",{
                     required: "Category Description is Required"
                    })
                  }
                 id="description"
                placeholder="Category Description"
                
              />
              {
                errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )
              }
              
             </Field>
          </FieldGroup>
          <div className="mt-5">
            <Button>Create Category</Button>
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

export default CreateCategory;
