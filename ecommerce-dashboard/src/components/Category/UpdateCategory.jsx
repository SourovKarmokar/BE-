import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateCategory = () => {
    const {id} = useParams();
    console.log(id);
    
    const [subCategory   , setSubCategory] = useState(null);
      const  fetchCategories =  async () =>{
    try{
      const {data} = await axios.get(`http://localhost:3000/api/v1/subcategory/getsinglecategory/${id}`);
      setSubCategory(data.data);
      
      
    }catch(error) {
      console.log(error);
      
    }
  }

  useEffect (()=>{
    fetchCategories()
  },[])

  console.log(category);
  
  const handleUpdate = async (e) =>{
    e.preventDefault();
    try{
        const res = await  axios.patch(`http://localhost:3000/api/v1/category/updatecategory/${id}`,
            category
         );
         console.log(res);
         
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className='px-10'> 
    <form  >
            <FieldGroup className='my-2' > 
                 <Field>
                   <FieldLabel htmlFor="name">
                     Category Name
                  </FieldLabel>
   
                   <Input
                   onChange={(e)=>setCategory( {...category , name: e.target.value})}
                    id="name"
                   placeholder="Category Name"
                   value ={category?.name}
                    
                 />
                 
                </Field>
             </FieldGroup>
            <FieldGroup className='my-2'>
                 <Field>
                   <FieldLabel htmlFor="description">
                     Category Description
                  </FieldLabel>
   
                   <Input

                   onChange={(e) => setCategory( {...category,
                    description: e.target.value
                   })}
                     
                    id="description"
                   placeholder="Category Description"
                   value ={category?.description}
                 />
                 
                 
                </Field>
             </FieldGroup>


             
             <div className="mt-5">
               <Button type="submit" onClick={handleUpdate }>Update Category</Button>
             </div>
         </form> 
    </div>
    
  )
}

export default UpdateCategory
