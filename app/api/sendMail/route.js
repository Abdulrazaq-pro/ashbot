import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, name } = await req.json();
    const firstName = name ? name.split(" ")[0] : "Friend";

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER || "defaultEmail@example.com",
        pass: process.env.EMAIL_PASS || "defaultPasswordHere",
      },
    });

    const mailOptions = {
      from: `"Ashbots" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Ashbots! 🚀",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f0f1f3; margin: 0; padding: 0;">
          
          <!-- Top brutalist header -->
          <div style="background-color: #0d3b2e; padding: 50px 20px; text-align: left;">
            <h1 style="color: #ffffff; font-size: 36px; font-weight: 900; margin: 0; line-height: 1.1;">
              Welcome, ${firstName}.
            </h1>
          </div>

          <!-- Main content card -->
          <div style="max-width: 600px; margin: -20px auto 40px auto; background-color: #ffffff; border-radius: 0; border-left: 4px solid #0d3b2e; border-right: 4px solid #0d3b2e; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.15);">
            
            <div style="padding: 30px 25px; color: #111; font-size: 16px; line-height: 1.6;">
              <p style="font-weight: 600; margin-bottom: 15px;">Thanks for joining Ashbots waitlist.</p>

              <p style="margin-bottom: 15px;">
                You’re now among the first to explore our AI-driven platform. Expect precision, efficiency, and bold tools for your workflow.
              </p>

              <p style="margin-top: 20px; font-weight: 500;">
                Stay tuned—we’ll notify you as soon as Ashbots is live.
              </p>
            </div>

            <div style="padding: 15px 25px; background-color: #0d3b2e; color: #ffffff; font-size: 14px; text-align: center;">
              Ashbots Team — Sharp. Smart. Efficient.
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
