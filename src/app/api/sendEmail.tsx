"use server";
import { Resend } from "resend";

const resend = new Resend("re_LejPhynt_J1fEeNwaZj1AZR71Z3w4Erke");

export const sendEmail = async (data: string) => {
  const formData = JSON.parse(data);
  const fname = formData.fname;
  const lname = formData.lname;
  const mobile = formData.mobile;
  const email = formData.email;
  const Address1 = formData.Address1;
  const Address2 = formData.Address2;
  const requirement = formData.requirement;

  if (!fname || typeof fname !== "string") {
    return {
      error: "Invalid fisrt name",
    };
  }
  if (!lname || typeof lname !== "string") {
    return {
      error: "Invalid last name",
    };
  }
  if (!mobile || typeof mobile !== "string") {
    return {
      error: "Invalid mobile",
    };
  }
  if (!email || typeof email !== "string") {
    return {
      error: "Invalid email",
    };
  }
  if (!Address1 || typeof Address1 !== "string") {
    return {
      error: "Invalid address",
    };
  }
  if (!requirement || typeof requirement !== "string") {
    return {
      error: "Invalid requirement",
    };
  }

  await resend.emails.send({
    from: "Quotation Form <onboarding@resend.dev>",
    to: "kodfec@gmail.com",
    subject: "Message from new client",
    reply_to: email,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quotation Request</title>
        <style>
            /* Add your CSS styles here */
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            h2 {
                color: #333;
                margin: 0 auto;
            }
            .data {
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
          
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Quotation Request Details</h2>
            <div class="data">
                <p><strong>First Name:</strong> ${fname}</p>
                <p><strong>Last Name:</strong> ${lname}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address 1:</strong> ${Address1}</p>
                <p><strong>Address 2:</strong> ${Address2}</p>
                <p><strong>Requirement:</strong> ${requirement}</p>
            </div>
        </div>
    </body>
    </html>`,
  });
};
