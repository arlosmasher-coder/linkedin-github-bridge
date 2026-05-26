/**
 * Custom error classes for linkedin-github-bridge.
 */

/**
 * Base error class for all LinkedinGithubBridge errors.
 */
export class LinkedinGithubBridgeError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "LINKEDINGITHUBBRIDGE_ERROR") {
    super(message);
    this.name = "LinkedinGithubBridgeError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends LinkedinGithubBridgeError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends LinkedinGithubBridgeError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends LinkedinGithubBridgeError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
