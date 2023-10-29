import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await db.connect();
  let products;

  try {
    products = await client.sql`SELECT * FROM Product;`;
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({ data: products });
}
