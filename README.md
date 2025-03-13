<img src="https://img.shields.io/badge/LICENSE-MIT-green">

# GitHub Auto Load More

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

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/gh-auto-load-more.git
   cd gh-auto-load-more
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the extension:
   ```
   npm run build
   ```

4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" by toggling the switch in the top-right corner
6. Click "Load unpacked" and select the `dist` folder from this project
7. The extension should now be installed and active

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

## Building for Distribution

To build the extension for distribution:

```
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
