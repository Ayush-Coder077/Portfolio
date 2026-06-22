export async function POST(request) {
  try {
    const formData = await request.formData();

    // Honeypot
    if (formData.get("botcheck")) {
      return Response.json(
        {
          success: false,
          message: "Bot detected",
        },
        { status: 400 }
      );
    }

    const token = formData.get(
      "cf-turnstile-response"
    );

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Please complete verification",
        },
        { status: 400 }
      );
    }

    // Verify Turnstile
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret:
            process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const verifyData =
      await verifyResponse.json();

    if (!verifyData.success) {
      return Response.json(
        {
          success: false,
          message:
            "Captcha verification failed",
        },
        { status: 400 }
      );
    }

    // Send to Web3Forms
    const web3Data = new FormData();

    web3Data.append(
      "access_key",
      process.env.WEB3FORMS_ACCESS_KEY
    );

    web3Data.append(
      "name",
      formData.get("name")
    );

    web3Data.append(
      "email",
      formData.get("email")
    );

    web3Data.append(
      "message",
      formData.get("message")
    );

    web3Data.append(
      "subject",
      "Ayush Portfolio Contact Form"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: web3Data,
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}