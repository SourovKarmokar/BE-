import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CreateProduct() {
    return (
        // Responsive padding: px-4 on mobile, growing on larger screens
        <div className="w-full px-4 md:px-12 lg:px-20 py-8">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Create Product Form</FieldLegend>
                        {/* Responsive grid: 
              - Stacks on mobile (grid-cols-1) 
              - Becomes 2 columns on medium screens (md:grid-cols-2)
            */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="product-name">
                                        Product Name
                                    </FieldLabel>
                                    <Input
                                        id="product-name"
                                        placeholder="Product Name"
                                        required
                                       
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="product-price">
                                        Product Price
                                    </FieldLabel>
                                    <Input
                                        id="product-price"
                                        type="number"
                                        placeholder="Product Price"
                                        required
                                        
                                         />
                                </Field>
                                 </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="product-stock">
                                        Product Stock
                                    </FieldLabel>
                                    <Input
                                        id="product-stock"
                                        type="number"
                                        placeholder="Product Stock"
                                     required
                                        
                                    />
                                </Field>
                            </FieldGroup>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Product Image</Label>
                                <Input
                                    id="picture"
                                    type="file"
                                    className="h-11" /* Made file input bigger */
                                />
                            </div>
                        </div>
                    </FieldSet>
                    
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="product-description">
                                    Description
                                </FieldLabel>
                                <Textarea
                                    id="product-description"
                                    placeholder="Product Description"
                                    className="resize-none"
                                    rows={6} 
                                    Dimensions />
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    {/* Responsive button layout:
            - Stacks vertically on mobile (flex-col-reverse)
            - Side-by-side on small screens and up (sm:flex-row)
            - Aligned to the right on small screens and up (sm:justify-end)
          */}
                    <Field className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
                        
                        <Button type="submit">Submit</Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}