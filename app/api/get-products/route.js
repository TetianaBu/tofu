import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const searchTerm = searchParams.get("searchTerm");

  const client = await db.connect();

  try {
    let products;
    if (searchTerm) {
      const result = await client.query({
        text: "SELECT * FROM Product WHERE hardness ILIKE $1;",
        values: [`%${searchTerm}%`],
      });
      products = result.rows;
    } else {
      // If no search term provided, fetch all products
      const result = await client.query("SELECT * FROM Product;");
      products = result.rows;
    }

    return NextResponse.json({ status: 200, data: products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "Internal Server Error" });
  } finally {
    client.release();
  }
}
