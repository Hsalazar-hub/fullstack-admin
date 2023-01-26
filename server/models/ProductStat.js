import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,

    year: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    monthlydata: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailydata: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
