import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CreateProduct() {
  return (
    <div className="min-h-screen  from-gray-50 to-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <form className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
        <FieldGroup>
          <FieldSet>
            <div className="mb-8">
              <FieldLegend className="text-2xl font-bold text-gray-800">
                Create Product Form
              </FieldLegend>
              <FieldDescription className="text-gray-600 mt-2">
                Fill in the details below to add a new product to your inventory
              </FieldDescription>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="product-name" className="text-gray-700 font-medium">
                    Product Name
                  </FieldLabel>
                  <Input
                    id="product-name"
                    placeholder="Product Name"
                    required
                    className="mt-1.5 h-11"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="product-price" className="text-gray-700 font-medium">
                    Product Price
                  </FieldLabel>
                  <Input
                    id="product-price"
                    type="number"
                    placeholder="Product Price"
                    required
                    className="mt-1.5 h-11"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="product-stock" className="text-gray-700 font-medium">
                    Product Stock
                  </FieldLabel>
                  <Input
                    id="product-stock"
                    type="number"
                    placeholder="Product Stock"
                    required
                    className="mt-1.5 h-11"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="picture" className="text-gray-700 font-medium">
                    Product Image
                  </FieldLabel>
                  <Input
                    id="picture"
                    type="file"
                    className="mt-1.5 h-11"
                  />
                </Field>
              </FieldGroup>
            </div>
          </FieldSet>

          <FieldSet className="mt-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="product-description" className="text-gray-700 font-medium">
                  Description
                </FieldLabel>
                <Textarea
                  id="product-description"
                  placeholder="Product Description"
                  className="resize-none mt-1.5"
                  rows={6}
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-8 mt-8 border-t border-gray-200">
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-gray-700 font-semibold text-base py-2.5 px-8 rounded-lg border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold text-base py-2.5 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Create Product
            </button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}