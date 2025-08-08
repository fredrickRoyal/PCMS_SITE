import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = "f47ac10b-58cc-4372-a567-0e02b2c3d479";

    const response = await fetch(
      "http://urrms.opm.go.ug:1408/api/v1/organizations?page=0&size=10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "URRMS-API-KEY": apiKey,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Response Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      return NextResponse.json(
        {
          message: `API request failed: ${response.status} ${response.statusText}`,
          status: false,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Request Error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch organizations",
        status: false,
      },
      { status: 500 }
    );
  }
}
