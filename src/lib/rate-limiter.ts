/**
 * In-memory rate limiter for form submissions
 * Reduces Google Sheets API calls by caching recent submissions
 *
 * Note: In-memory cache resets on serverless cold starts
 * This is acceptable trade-off for performance
 */

interface Submission {
  ipAddress: string
  timestamp: number
}

class RateLimiter {
  private submissions: Submission[] = []
  private readonly WINDOW_MS = 3600000 // 1 hour
  private readonly MAX_SUBMISSIONS = 3

  /**
   * Add a submission to the rate limiter cache
   */
  addSubmission(ipAddress: string): void {
    const now = Date.now()

    // Clean up old submissions outside the window
    this.submissions = this.submissions.filter(
      (sub) => now - sub.timestamp < this.WINDOW_MS
    )

    // Add new submission
    this.submissions.push({
      ipAddress,
      timestamp: now,
    })
  }

  /**
   * Check if an IP address has exceeded the rate limit
   * @returns Object with exceeded flag and current count
   */
  checkRateLimit(ipAddress: string): { exceeded: boolean; count: number } {
    const now = Date.now()

    // Clean up old submissions
    this.submissions = this.submissions.filter(
      (sub) => now - sub.timestamp < this.WINDOW_MS
    )

    // Count submissions from this IP in the time window
    const count = this.submissions.filter(
      (sub) => sub.ipAddress === ipAddress
    ).length

    return {
      exceeded: count >= this.MAX_SUBMISSIONS,
      count,
    }
  }

  /**
   * Get recent submissions for an IP address within a time window
   * @param ipAddress IP address to check
   * @param hours Number of hours to look back
   * @returns Array of submission timestamps
   */
  getRecentSubmissions(ipAddress: string, hours: number): number[] {
    const windowMs = hours * 3600000
    const now = Date.now()

    return this.submissions
      .filter(
        (sub) =>
          sub.ipAddress === ipAddress && now - sub.timestamp < windowMs
      )
      .map((sub) => sub.timestamp)
  }

  /**
   * Clear all submissions (for testing)
   */
  clear(): void {
    this.submissions = []
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter()
