
import { NextResponse } from "next/server";

//Set Cookies
export async function POST(req, res) {
    const json_data = await req.json();

    const language = json_data["language"];
    const theme = json_data["theme"];

    return NextResponse.json(
        {
            message: "Cookie Set!",
            lang: language,
            theme: theme,
        },
        {
            status: 200,
            headers: {
                "Set-Cookie": `lang=${language}, theme=${theme}, path=/`,
            },
        }
    );
}

//Get Cookies
export async function GET(req, res) {

    const language = req.cookies.get("language")?.value
    const theme = req.cookies.get("theme")?.value

    return NextResponse.json({
        lang:language,
        theme:theme
    })
}

