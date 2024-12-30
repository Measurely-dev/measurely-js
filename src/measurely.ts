// Defines the structure of the payload sent to the Measurely API.
type CapturePayload = {
  value: number; // The value of the metric to be recorded.
};

// Defines the structure of the result returned after attempting to send a metric.
type CaptureResult = {
  success: boolean; // Indicates if the API call was successful.
  message: string; // Contains the response message or error information.
};

export default class Measurely {
  // Holds the API key used for authentication with the Measurely API.
  private static API_KEY = "";

  /**
   * Initializes the Measurely library with an API key.
   * @param NEW_API_KEY - The API key provided by Measurely.
   */
  static init(NEW_API_KEY: string) {
    this.API_KEY = NEW_API_KEY;
  }

  /**
   * Sends a metric to the Measurely API.
   * @param metric_identifier - The metric id or metric name to be tracked.
   * @param payload - The data payload containing the metric value.
   * @returns A Promise resolving to a CaptureResult object.
   */
  static async capture(
    metric_identifier: string,
    payload: CapturePayload,
  ): Promise<CaptureResult> {
    // Ensure the API key is set before making the API call.
    if (this.API_KEY === "") {
      return {
        success: false,
        message: "Missing API KEY, please call the init function",
      };
    }

    // Makes a POST request to the Measurely API with the metric data.
    const response = await fetch(
      `https://api.measurely.dev/event/v1/${metric_identifier}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.API_KEY}`, // Adds the API key for authentication.
          "Content-Type": "application/json", // Specifies JSON as the content type.
        },
        body: JSON.stringify(payload), // Converts the payload to a JSON string.
      },
    );

    // Retrieves the text response from the server.
    const text = await response.text();

    // Returns whether the request was successful and the server response.
    return {
      success: response.ok, // True if the HTTP status code indicates success.
      message: text, // The response message from the server.
    };
  }
}
