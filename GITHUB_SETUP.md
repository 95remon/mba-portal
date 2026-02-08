# GitHub Integration Setup

You have successfully created the local Git repository for your MBA Study Portal. To link this to GitHub:

1.  **Create a New Repository**:
    *   Go to [GitHub.com](https://github.com/new).
    *   Name it `antigravity-mba-portal`.
    *   Do **not** initialize with README/gitignore (we already have them).

2.  **Link Remote**:
    *   Copy the repository URL (e.g., `https://github.com/yourusername/antigravity-mba-portal.git`).
    *   Run the following command in your terminal (inside `MBA_Study_Portal`):
        ```bash
        git remote add origin https://github.com/yourusername/antigravity-mba-portal.git
        git push -u origin main
        ```

3.  **Deploy (Optional)**:
    *   You can deploy this site for free using GitHub Pages or Vercel.
    *   For GitHub Pages, go to Settings -> Pages and selecting the `main` branch (requires build step usually) or use Vercel/Netlify for easier setup with Vite.
