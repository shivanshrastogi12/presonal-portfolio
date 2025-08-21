import React from "react";
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Img,
    Row,
    Column,
    Link,
} from "@react-email/components";

import { PERSONAL, SOCIAL_PLATFORMS } from "@/src/constants/personal";

interface EmailTemplateProps {
    userName: string;
    contactReason: string;
    userMessage: string;
}

export function EmailTemplate({
    userName,
    contactReason,
    userMessage,
}: EmailTemplateProps) {
    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/shivanshrastogi12",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/shivansh-rastogi12/",
            icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/Shivansh_1204/",
            icon: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
        },
        {
            name: "Email",
            url: "mailto:shivansh.rastogi1204@gmail.com",
            icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
        },
    ];

    return (
        <Html>
            <Head>
                <title>Thank you for contacting Shivansh Rastogi</title>
            </Head>
            <Body style={main}>
                <Container style={container}>
                    {/* Header Section */}
                    <Section style={header}>
                        <Row>
                            <Column style={{ width: "60px" }}>
                                <div style={logoContainer}>
                                    <Text style={logoText}>SR</Text>
                                </div>
                            </Column>
                            <Column>
                                <Text style={brandText}>Shivansh Rastogi</Text>
                                <Text style={jobTitleText}>Senior Full-Stack Developer</Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Main Content Section */}
                    <Section style={contentSection}>
                        <Text style={greeting}>Hey {userName}! 👋</Text>

                        <Text style={text}>
                            Thanks for reaching out through my portfolio! 🚀 <br />
                            Your message has been received and I'm excited to connect with you.
                        </Text>

                        {/* Message Details Card */}
                        <div style={infoCard}>
                            <Text style={cardTitle}>📋 Your Message Details</Text>

                            <div style={infoRow}>
                                <Text style={label}>
                                    📌 Contact Reason: <span style={highlight}>{contactReason}</span>
                                </Text>
                            </div>

                            <div style={infoRow}>
                                <Text style={label}>💬 Your Message:</Text>
                                <div style={messageBox}>
                                    <Text style={messageText}>{userMessage}</Text>
                                </div>
                            </div>
                        </div>

                        <Text style={text}>
                            I'll get back to you within 24-48 hours. In the meantime, feel free to
                            check out my latest projects and connect with me on social media! 🌟
                        </Text>

                        {/* Social Links Section */}
                        <Section style={socialSection}>
                            <Text style={socialTitle}>Let's Connect! 🤝</Text>
                            <table style={socialTable}>
                                <tbody>
                                    <tr>
                                        {socials.map((social) => (
                                            <td key={social.name} style={socialIconCol}>
                                                <Link href={social.url} style={socialLink}>
                                                    <Img
                                                        src={social.icon}
                                                        alt={social.name}
                                                        width="32"
                                                        height="32"
                                                        style={socialIcon}
                                                    />
                                                </Link>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </Section>

                        {/* Footer */}
                        <Text style={footerText}>
                            You're receiving this email because you contacted me through my portfolio website.
                            Looking forward to our conversation! ✨
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main: React.CSSProperties = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#ffffff",
    lineHeight: "1.6",
    minHeight: "100vh",
};

const container: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    color: "#333333",
};

const header: React.CSSProperties = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "30px",
    alignItems: "center",
    color: "#ffffff",
};

const logoContainer: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid rgba(255, 255, 255, 0.3)",
};

const logoText: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0",
};

const brandText: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "15px",
    marginTop: "0",
    marginBottom: "5px",
    color: "#ffffff",
};

const jobTitleText: React.CSSProperties = {
    fontSize: "14px",
    marginLeft: "15px",
    marginTop: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "normal",
};

const contentSection: React.CSSProperties = {
    padding: "30px 0",
};

const greeting: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333333",
    textAlign: "center",
};

const text: React.CSSProperties = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555555",
    lineHeight: "1.6",
    padding: "0 30px",
};

const infoCard: React.CSSProperties = {
    backgroundColor: "#f8f9fa",
    margin: "30px",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #e9ecef",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const cardTitle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333333",
    borderBottom: "2px solid #667eea",
    paddingBottom: "10px",
};

const infoRow: React.CSSProperties = {
    marginBottom: "15px",
};

const label: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "8px",
};

const highlight: React.CSSProperties = {
    color: "#667eea",
    fontWeight: "bold",
};

const messageBox: React.CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
    marginTop: "8px",
};

const messageText: React.CSSProperties = {
    fontSize: "14px",
    color: "#495057",
    lineHeight: "1.5",
    whiteSpace: "pre-wrap",
    margin: "0",
};

const socialSection: React.CSSProperties = {
    backgroundColor: "#f8f9fa",
    margin: "30px",
    padding: "25px",
    textAlign: "center",
    borderRadius: "12px",
    border: "1px solid #e9ecef",
};

const socialTitle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333333",
    marginBottom: "20px",
};

const socialTable: React.CSSProperties = {
    margin: "0 auto",
    borderSpacing: "15px",
    borderCollapse: "separate",
};

const socialIconCol: React.CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "12px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease",
};

const socialLink: React.CSSProperties = {
    textDecoration: "none",
    display: "block",
};

const socialIcon: React.CSSProperties = {
    borderRadius: "6px",
    width: "32px",
    height: "32px",
};

const footerText: React.CSSProperties = {
    fontSize: "14px",
    marginTop: "30px",
    color: "#666666",
    textAlign: "center",
    padding: "0 30px 30px",
    lineHeight: "1.5",
};