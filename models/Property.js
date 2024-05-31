import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Typs.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    square_feet: { type: Number, required: true },
    amenities: [{ type: String }],
    rates: {
      night: { type: Number },
      weekly: { type: Number },
      monthly: { type: Number },
    },
    seller_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    images: [{ type: String }],
    is_featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Property = models.property || model("Property", PropertySchema);

export default Property;
