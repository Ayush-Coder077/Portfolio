export async function POST(request) {
  try {
    const formData = await request.formData();

    // Honeypot check
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
            "Verification failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // Add Web3Forms key securely
    formData.append(
      "access_key",
      process.env.WEB3FORMS_ACCESS_KEY
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}