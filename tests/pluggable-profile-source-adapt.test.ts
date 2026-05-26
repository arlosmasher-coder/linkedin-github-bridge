import { describe, it, expect } from "vitest";
import { LinkedinGithubBridge } from "../src";

describe("LinkedinGithubBridge", () => {
  it("should create an instance with default options", () => {
    const instance = new LinkedinGithubBridge();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new LinkedinGithubBridge({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new LinkedinGithubBridge();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
