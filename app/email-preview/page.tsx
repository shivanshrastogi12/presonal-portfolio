import { EmailTemplate } from "@/components/template/Email";

export default function EmailPreview() {
    const sampleData = {
        userName: "John Doe",
        contactReason: "Job Opportunity",
        userMessage: "Hi Shivansh,\n\nI came across your portfolio and I'm impressed by your work. We have an exciting full-stack developer position at our company that I think would be a great fit for you.\n\nWould you be interested in discussing this opportunity?\n\nBest regards,\nJohn"
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Email Template Preview</h1>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <EmailTemplate {...sampleData} />
                </div>
            </div>
        </div>
    );
}
