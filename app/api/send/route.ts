import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";

import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
    const body = await request.json();
    const { senderName, senderEmail, reasonToContact, senderMsg } = body;

    if (
        !senderName ||
        !senderEmail ||
        !reasonToContact ||
        !senderMsg ||
        typeof senderName !== "string" ||
        typeof senderEmail !== "string" ||
        typeof reasonToContact !== "string" ||
        typeof senderMsg !== "string"
    ) {
        return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const htmlContent = await pretty(
        await render(
            EmailTemplate({
                userName: senderName,
                contactReason: reasonToContact,
                userMessage: senderMsg,
            })
        )
    );

    const message = {
        from: `"Shivansh Rastogi - Portfolio" <${process.env.EMAIL_FROM}>`,
        to: `${senderName} <${senderEmail}>`,
        subject: "Thank you for reaching out! - Shivansh Rastogi",
        html: htmlContent,
        headers: {
            "X-Entity-Ref-ID": "newmail",
        },
    };

    if (!process.env.EMAIL_FROM || !process.env.EMAIL_PASSWORD) {
        return NextResponse.json(
            { error: "Email credentials are not set in environment variables." },
            { status: 500 }
        );
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail(message);
        return NextResponse.json(
            {
                message: `Email has been sent to ${senderEmail} successfully`,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error(`Error sending email to ${senderEmail}:`, err);
        return NextResponse.json(
            {
                error: "Failed to send email",
            },
            { status: 500 }
        );
    }
}