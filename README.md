# Astro with Tailwind

```sh
npm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

## Deployment

Every push to `main` deploys the site (`.github/workflows/deploy.yml`): GitHub Actions builds it and copies the files into the S3 bucket `osama-site-185591434430`, which CloudFront serves at **osama.ahmaro.com**. It all lives in the AWS account `personal` (185591434430):

- **DNS:** the Route 53 zone for `ahmaro.com`.
- **CDN:** the CloudFront distribution for osama.ahmaro.com, with a free ACM certificate (us-east-1). The `static-site-index` function serves `<page>/index.html` for page addresses.
- **Access:** GitHub signs in as `github-deploy-osama-site`, a role that only this repository's `main` branch can use and that can only write to the bucket. No AWS keys are stored in GitHub.
