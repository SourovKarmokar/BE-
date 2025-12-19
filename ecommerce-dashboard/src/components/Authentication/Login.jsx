import { useState } from "react";
import { Input } from "@/components/ui/input";
import {useNavigate} from "react-router-dom"

import axios from "axios";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

export default function Login() {
    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await axios.post(
      "http://localhost:3000/api/v1/authentication/login",
      formData
    );
    console.log(res);
    const token = res.data.accessToken
    localStorage.setItem("accessToken" , token)
    if(res.data.success === "Login Successfully done");{
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }
    
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg -gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 sm:p-10">
        <FieldGroup>
          <FieldSet>
            <div className="mb-8 text-center">
              <FieldLegend className="text-3xl font-bold text-gray-800">
                Login
              </FieldLegend>
              <FieldDescription className="text-gray-600 mt-2">
                Forget Password
              </FieldDescription>
            </div>

           

            <div className="mt-6">
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-1.5 h-11"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="mt-1.5 h-11"
                />
              </Field>
            </div>
          </FieldSet>

          <div className="flex justify-center pt-8 mt-8 border-t">
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-blue-600 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </FieldGroup>
      </div>
    </div>
  );
}



