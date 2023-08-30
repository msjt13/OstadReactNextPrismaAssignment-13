
import { NextResponse } from "next/server";

//Set Cookies
export async function POST(req, res) {

    const json_data = await req.json();
    console.log('json data', json_data);

    const language = json_data["language"] || 'en';
    const theme = json_data["theme"] || 'light';

    return NextResponse.json(
        {
            message: "Cookie Set Successful!",
            language: language,
            theme: theme,
        },
        {
            status: 200,
            headers: {
                "Set-Cookie": `language=${language}, theme=${theme}, path=/`,
            },
        }
    );
}

//Get Cookies
export async function GET(req, res) {

    const language = req.cookies.get("language")?.value || "en"
    const theme = req.cookies.get("theme")?.value || "light"

    return NextResponse.json({
        language:language,
        theme:theme
    })
}

