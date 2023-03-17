module.exports = {
  name: "uridge.com", // optional, falls back to object key
  description: "Rob’s Personal web site",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    runs: 1,
    frequency: 1, // (im minutes)
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.uridge.com/",
    "https://www.uridge.com/projects/",
    "https://www.uridge.com/snippets/",
    // Posts
    "https://www.uridge.com/snippets/git-fixup-rebase/",
    "https://www.uridge.com/snippets/git-amend/",
  ],
};
