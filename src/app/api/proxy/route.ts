import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
    }

    try {
        const response = await fetch(url);
        let content = await response.text();

        // Rewrite relative URLs to absolute URLs
        const targetOrigin = new URL(url).origin;
        content = content.replace(
            /(href|src|content|url)="(?!https?:\/\/)([^"]*)"/g,
            (match, attribute, relativeUrl) => {
                // Convert relative URLs to absolute URLs
                const absoluteUrl = new URL(relativeUrl, targetOrigin).toString();
                return `${attribute}="${absoluteUrl}"`;
            }
        );

        // Return the modified content
        return new NextResponse(content, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch the target website" }, { status: 500 });
    }
}