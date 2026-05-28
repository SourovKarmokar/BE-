const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const userSchema = require("./model/userSchema");
const categorySchema = require("./model/categorySchema");
const subCategorySchema = require("./model/SubCategorySchema");
const productSchema = require("./model/productSchema");

const CATEGORIES_DATA = [
  {
    name: "Woman's Fashion",
    subCategories: ["Dresses", "T-Shirts", "Sarees", "Jewelry"]
  },
  {
    name: "Men's Fashion",
    subCategories: ["Shirts", "T-Shirts", "Pants", "Watches"]
  },
  {
    name: "Electronics",
    subCategories: ["Phones", "Computers", "HeadPhones", "Gaming", "Camera", "SmartWatch"]
  },
  {
    name: "Home & Lifestyle",
    subCategories: ["Furniture", "Bedding", "Kitchenware", "Decor"]
  },
  {
    name: "Medicine",
    subCategories: ["OTC Drugs", "First Aid", "Supplements"]
  },
  {
    name: "Sports & Outdoor",
    subCategories: ["Fitness Equipments", "Sportswear", "Camping Gear"]
  },
  {
    name: "Baby's & Toys",
    subCategories: ["Diapers", "Baby Toys", "Strollers"]
  },
  {
    name: "Groceries & Pets",
    subCategories: ["Snacks", "Beverages", "Pet Food"]
  },
  {
    name: "Health & Beauty",
    subCategories: ["Skincare", "Makeup", "Fragrance", "Haircare"]
  }
];

const PRODUCTS_DATA = [
  {
    name: "Havic HV G-92 Gamepad",
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. Sleek white and blue design.",
    price: 192,
    discount: 40,
    stock: 12,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60",
    rating: 5,
    categoryName: "Electronics",
    subCategoryName: "Gaming"
  },
  {
    name: "AK-900 Wired Keyboard",
    description: "Mechanical keyboard with RGB lighting. Durable keys and ergonomic layout for professional gamers.",
    price: 960,
    discount: 35,
    stock: 8,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33faf9c1?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    categoryName: "Electronics",
    subCategoryName: "Gaming"
  },
  {
    name: "IPS LCD Gaming Monitor",
    description: "24-inch Curved Full HD monitor with high refresh rate and vibrant colors. Perfect for gaming and design.",
    price: 370,
    discount: 30,
    stock: 15,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    categoryName: "Electronics",
    subCategoryName: "Computers"
  },
  {
    name: "ASUS FHD Gaming Laptop",
    description: "High-performance gaming laptop with FHD display and powerful graphics card. Ideal for heavy gaming and rendering.",
    price: 1200,
    discount: 10,
    stock: 5,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    categoryName: "Electronics",
    subCategoryName: "Computers"
  },
  {
    name: "Smart Watch Elite X",
    description: "Premium smartwatch with heart-rate tracking, sleep monitoring, and beautiful OLED display.",
    price: 150,
    discount: 15,
    stock: 20,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    categoryName: "Electronics",
    subCategoryName: "SmartWatch"
  },
  {
    name: "Canon DSLR Professional Camera",
    description: "Capture stunning detail with 24.2 Megapixel sensor, high-speed autofocus, and Full HD video recording.",
    price: 650,
    discount: 12,
    stock: 7,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
    rating: 4.6,
    categoryName: "Electronics",
    subCategoryName: "Camera"
  },
  {
    name: "Premium Leather Duffle Bag",
    description: "Luxury duffle bag made with premium leather and canvas materials. Spacious and stylish for elite travel.",
    price: 240,
    discount: 20,
    stock: 14,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    categoryName: "Men's Fashion",
    subCategoryName: "Watches"
  },
  {
    name: "Quilted Satin Jacket",
    description: "Stylish satin jacket with quilted design. Warm, comfortable, and outstanding casual wear.",
    price: 120,
    discount: 15,
    stock: 25,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    categoryName: "Woman's Fashion",
    subCategoryName: "Dresses"
  }
];

async function seed() {
  console.log("Connecting to database at:", process.env.DATABASE_URL);
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected to MongoDB!");

  // --- 1. Seed Verified Admin ---
  console.log("Seeding verified admin user...");
  const adminEmail = "admin@example.com";
  const adminPassword = "adminpassword123";

  // Delete existing admin user if any
  await userSchema.deleteMany({ email: adminEmail });

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  const adminUser = new userSchema({
    firstName: "System",
    lastName: "Admin",
    email: adminEmail,
    password: hashedPassword,
    verified: true,
    role: "admin"
  });
  await adminUser.save();
  console.log(`✅ Admin account seeded: ${adminEmail} / ${adminPassword}`);

  // --- 2. Clean Existing Collections ---
  console.log("Cleaning up old categories, subcategories, and products...");
  await categorySchema.deleteMany({});
  await subCategorySchema.deleteMany({});
  await productSchema.deleteMany({});
  console.log("✅ Cleanup done.");

  // --- 3. Seed Categories and Subcategories ---
  console.log("Seeding categories and subcategories...");
  const categoryMap = {};
  const subCategoryMap = {};

  for (const catData of CATEGORIES_DATA) {
    const category = new categorySchema({
      name: catData.name,
      description: `Premium collection of ${catData.name}`
    });
    await category.save();
    categoryMap[catData.name] = category;

    // Seed Subcategories under this category
    for (const subName of catData.subCategories) {
      const subCategory = new subCategorySchema({
        name: subName,
        description: `${subName} under ${catData.name}`,
        category: category._id
      });
      await subCategory.save();
      subCategoryMap[`${catData.name}-${subName}`] = subCategory;

      // Link subcategory to category
      category.subCategory.push(subCategory._id);
    }
    await category.save();
  }
  console.log("✅ Categories and subcategories seeded successfully!");

  // --- 4. Seed Products ---
  console.log("Seeding products...");
  for (const prodData of PRODUCTS_DATA) {
    const cat = categoryMap[prodData.categoryName];
    const sub = subCategoryMap[`${prodData.categoryName}-${prodData.subCategoryName}`];

    if (!cat) continue;

    const product = new productSchema({
      name: prodData.name,
      description: prodData.description,
      price: prodData.price,
      discount: prodData.discount,
      stock: prodData.stock,
      quantity: prodData.quantity,
      rating: prodData.rating,
      image: prodData.image,
      category: cat._id,
      subCategory: sub ? sub._id : undefined
    });
    await product.save();
  }
  console.log("✅ Products seeded successfully!");

  console.log("\n🔥 DB Seeding completed successfully!");
  process.exit(0);
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
