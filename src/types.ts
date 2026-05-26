/**
 * Configuration options for LinkedinGithubBridge.
 */
export interface LinkedinGithubBridgeOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Pluggable “profile source” adapters (GitHub now, LinkedIn later/manual)
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Consistency rules (name, URL presence, company/domain hints)
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Human-in-the-loop verification prompts
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Machine-readable reports for HRIS/ATS ingestion
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by LinkedinGithubBridge operations.
 */
export interface LinkedinGithubBridgeResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
