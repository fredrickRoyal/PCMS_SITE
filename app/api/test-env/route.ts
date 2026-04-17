import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.URRMS_API_KEY,
    apiKeyLength: process.env.URRMS_API_KEY?.length || 0,
  });
}
