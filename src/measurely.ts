type CapturePayload = {
  value: number;
};

type CaptureResult = {
  success: boolean;
  message: string;
};

export default class measurely {
  private static API_KEY = "";

  static init(NEW_API_KEY: string) {
    this.API_KEY = NEW_API_KEY;
  }
  static async capture(
    metric_identifier: string,
    payload: CapturePayload,
  ): Promise<CaptureResult> {
    if (this.API_KEY === "") {
      return {
        success: false,
        message: "Missing API KEY, please call the init function",
      };
    }

    const response = await fetch(
      `https://api.measurely.dev/event/v1/${metric_identifier}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const text = await response.text();

    return {
      success: response.ok,
      message: text,
    };
  }
}
