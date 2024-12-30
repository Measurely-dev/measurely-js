# Measurely.js

Measurely.js is a lightweight library for interacting with the Measurely API, enabling developers to manage and track custom metrics programmatically.

## Installation

Install the package via npm:

```bash
npm install measurely-js
```

Or via yarn:

```bash
yarn add measurely-js
```

## Usage

### Initialize the Library

Before using any methods, initialize the library with your Measurely API key:

```javascript
import measurely from "measurely-js";

// Initialize the API key
measurely.init("your-api-key-here");
```

### Capture Metrics

Use the `capture` method to send metric data to the Measurely API:

```javascript
const metricIdentifier = "metric-identifier"; // Replace with your metric id or metric name
const payload = {
  value: 42, // Replace with the value you want to send
};

measurely.capture(metricIdentifier, payload);}

```

### Response Format

The `capture` method returns a `CaptureResult` object:

```typescript
type CaptureResult = {
  success: boolean; // Indicates whether the API call was successful
  message: string; // Contains the server response or error message
};
```

### Example

```javascript
import measurely from "measurely-js";

// Initialize the API key
measurely.init("your-api-key-here");

// Send a metric
measurely.capture("metric-identifier", { value: 10 });

sendMetric();
```

## API Reference

### `Measurely.init(NEW_API_KEY: string): void`

Initializes the library with the provided API key.

- **Parameters:**
  - `NEW_API_KEY` (string): Your Measurely's Application API key.

### `Measurely.capture(metric_identifier: string, payload: CapturePayload): Promise<CaptureResult>`

Sends a metric payload to the Measurely API.

- **Parameters:**

  - `metric_identifier` (string): The unique identifier for the metric.
  - `payload` (CapturePayload): The metric data to send.

- **Returns:**
  - A Promise resolving to a `CaptureResult` object.

#### `CapturePayload`

```typescript
type CapturePayload = {
  value: number; // The metric value to send
};
```

#### `CaptureResult`

```typescript
type CaptureResult = {
  success: boolean; // Indicates whether the API call was successful
  message: string; // Contains the server response or error message
};
```

## Example Project

Check out the example project in the repository for a complete implementation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to improve the library.

## License

This library is licensed under the MIT License.
