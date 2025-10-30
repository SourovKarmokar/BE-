import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
]

export default function AllCategories() {
  const [categories, setCategories] = useState([])

  const  fetchCategories =  async () =>{
    try{
      const {data} = await axios.get("http://localhost:3000/api/v1/category/getallcategories");
      setCategories(data.data);
      
    }catch(error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchCategories()
  },[])
  
  const handleDelete = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:3000/api/v1/category/deletecategory/${id}`);
    fetchCategories();
  }
  
  return (
    <div className="mx-10 shadow rounded py-2">
      <Table>
      
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead >Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category,index) => (
          <TableRow key={category._id}>
            <TableCell className="font-medium">{index+1}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell>
              <Button className="mr-3 ">Edit</Button>
            <Button 
            onClick={()=>handleDelete(category._id)}
            className="bg-red-500" >Delete</Button>
            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
    </div>
  )
}



