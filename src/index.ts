/**
 * linkedin-github-bridge
 * Link GitHub usernames to LinkedIn profiles and validate cross-profile consistency.
 */

export { LinkedinGithubBridge } from "./pluggable-profile-source-adapt";
export type { LinkedinGithubBridgeOptions, LinkedinGithubBridgeResult } from "./types";
export { LinkedinGithubBridgeError, ConfigurationError, ValidationError } from "./errors";
