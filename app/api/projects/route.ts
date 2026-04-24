import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.URRMS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "URRMS_API_KEY is not configured", status: false },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.partnerships.opm.go.ug/ProjectManagement/projectSummary/thematicBudgetInvestment?accountType=MANAGEMENT",
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
    return NextResponse.json({
      data: data,
      status: true,
      message: "Projects data fetched successfully",
    });
  } catch (error) {
    console.error("API Request Error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Failed to fetch projects",
        status: false,
      },
      { status: 500 }
    );
  }
}
