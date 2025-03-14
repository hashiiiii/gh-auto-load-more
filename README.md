# GitHub Auto Load More
<img src="https://img.shields.io/badge/LICENSE-MIT-green">

A Chrome extension that automatically expands all "Load more..." buttons in GitHub PR reviews until all comments are visible.

## Features

- Automatically clicks "Load more..." buttons in GitHub PR review pages
- Works recursively until all comments are expanded
- Only activates on GitHub pull request pages
- No data collection or tracking

## Installation Guide

### Quick Installation (Recommended for Users)

1. Download the pre-built extension ZIP file from the [Releases](https://github.com/hashiiiii/gh-auto-load-more/releases) page
2. Extract the ZIP file to a folder on your computer
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" by toggling the switch in the top-right corner
5. Click "Load unpacked" and select the extracted folder
6. The extension should now be installed and active

That's it! No npm, no build process needed for regular users.

### Alternative: Install from Source (For Developers)

If you want to modify the extension or contribute to development:

#### Setting up the Development Environment

1. **Install mise (recommended)**:
   
   [mise](https://github.com/jdx/mise) is a tool version manager that helps ensure consistent development environments.
   
   ```bash
   # Install mise using the official installer
   curl https://mise.jdx.dev/install.sh | sh

   # Add mise to your shell
   eval "$(~/.local/bin/mise activate zsh)"  # or bash
   
   # Restart your terminal or source your shell configuration
   source ~/.zshrc  # or source ~/.bashrc
   ```

2. **Clone the repository**:
   ```bash
   git clone https://github.com/hashiiiii/gh-auto-load-more.git
   cd gh-auto-load-more
   ```

3. **Install Node.js using mise**:
   ```bash
   # mise will read the mise.toml file and install the correct Node.js version
   mise install
   
   # Verify Node.js installation
   node --version  # Should show the version specified in mise.toml
   ```

4. **Install dependencies** (important!):
   ```bash
   npm install
   ```

5. **Build the extension**:
   ```bash
   npm run build
   ```

6. **Load the extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click "Load unpacked" and select the `dist` folder from this project
   - The extension should now be installed and active

#### Troubleshooting

- If you see `tsc: command not found` or similar errors, make sure you've run `npm install` to install TypeScript locally.
- If Node.js commands aren't using the mise-managed version, try running `eval "$(~/.local/bin/mise activate zsh)"` to refresh your environment.

## Usage

Once installed, the extension works automatically:

1. Navigate to any GitHub Pull Request page
2. The extension will automatically detect and click all "Load more..." buttons
3. All comments will be expanded without requiring manual clicks
4. You'll see log messages in the console confirming the extension's activity

## Project Structure

- `src/content.ts` - The main TypeScript file that contains the logic for clicking "Load more..." buttons
- `manifest.json` - Chrome extension manifest file
- `popup.html` - Simple popup UI for the extension
- `icons/` - Directory containing extension icons
- `mise.toml` - Configuration file for mise to manage Node.js version

## Building for Distribution

To build the extension for distribution:

```bash
npm run build
cd dist && zip -r ../github-auto-load-more.zip * && cd ..
```

The resulting `github-auto-load-more.zip` file can be shared with others for manual installation.

## Privacy

This extension:
- Does not collect any user data
- Does not track browsing activity
- Only runs on GitHub pull request pages
- Does not communicate with any external servers

## License

[MIT License](LICENSE.md)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
