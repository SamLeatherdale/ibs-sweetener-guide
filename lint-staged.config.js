const config = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix", () => "tsc --noEmit"],
  "*.{json,css,md}": ["prettier --write"],
};

export default config;
