# Modest Dark Theme

A dark theme for VSCode, Cursor, and Windsurf inspired by [Tim Cole's Modest Dark theme](https://github.com/timcole/modest-dark) for Zed editor.

## Color Palette

The theme uses a carefully selected color palette that emphasizes readability and reduces eye strain:

- **Background**: `#0F1219` - Deep, neutral dark background
- **Text**: `#abb2bf` - Clear, readable light gray
- **Syntax Colors**:
  - Keywords: `#ca72e4` (Vibrant Purple, Italic)
  - Functions: `#5ab0f6` (Bright Blue, Italic)
  - Strings: `#97ca72` (Soft Green)
  - Variables: `#e06c75` (Soft Red)
  - Constants: `#d99a5e` (Warm Orange)
  - Types/Classes: `#ebc275` (Warm Yellow)
  - Comments: `#546178` (Muted Gray, Italic)
  - Operators: `#abb2bf` (Light Gray)

## Installation

### VSCode

1. Download the latest `.vsix` file from the [releases page](https://github.com/fourcolors/modest-dark-theme/releases)
2. Open VSCode
3. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
4. Type "Install from VSIX" and select the downloaded file
5. Press `Cmd+Shift+P` again
6. Type "Color Theme" and select "Modest Dark"

### Cursor

1. Follow the same steps as VSCode installation
2. Cursor is compatible with VSCode extensions, so the theme will work automatically

### Windsurf

1. Create the themes directory if it doesn't exist:
   ```bash
   mkdir -p ~/.config/windsurf/themes
   ```
2. Download the theme file:
   ```bash
   curl -o ~/.config/windsurf/themes/windsurf-modest-dark.json https://raw.githubusercontent.com/fourcolors/modest-dark-theme/main/theme/windsurf-modest-dark.json
   ```
3. Open Windsurf settings
4. Go to the Appearance section
5. Select "Modest Dark" from the theme dropdown

## Credits

This theme is a port of the excellent [Modest Dark theme](https://github.com/timcole/modest-dark) created by [Tim Cole](https://github.com/timcole) for the Zed editor. All credit for the original color scheme and design goes to Tim.

## Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

## License

MIT License - See [LICENSE](LICENSE) file for details
