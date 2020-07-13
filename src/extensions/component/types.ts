/**
 * type for representing content-addressable filesystem hashes.
 */
export type Hash = string;

/**
 * author type.
 */
export type Author = {
  /**
   * author full name (for example: "Ran Mizrahi")
   */
  displayName: string;

  /**
   * author email in a proper format (e.g. "ran@bit.dev")
   */
  email: string;
};
