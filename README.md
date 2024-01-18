
# 2324-WTA-Portfolio_CMS

Create your custom portfolio with following projects:

- [Portfolio_API](https://github.com/SennaUyttersprot03/2324-WTA-Portfolio_API)
- [Portfolio_JAMSTACK](https://gitlab.com/jente.decamps/2324-wta-portfolio-jamstack)

This is a portfolio API made with GraphQL created for [Portfolio_API](https://github.com/SennaUyttersprot03/2324-WTA-Portfolio_API) & [Portfolio_JAMSTACK](https://gitlab.com/jente.decamps/2324-wta-portfolio-jamstack).


## Authors

- [Senna Uyttersprot](https://gitlab.com/senna.uyttersprot)
- [Jente De Camps](https://gitlab.com/jente.decamps)


## Requirements

For this project is the installation of [Deno](https://docs.deno.com/runtime/manual) required.
## Getting Started

Clone this project into your own repository.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORTFOLIO_API`: this is the domain of your portfolio API.

### Run the development server

After running the following command the server with your CMS will start.

```bash
  deno task start
```


## Deployment

Deploy this project with [Deno Deploy](https://deno.com/deploy) and connect with your GitHub account.

Don't forget to set up your environment variables under the settings tab.

**Attention**: Please note Fresh uses TailwindCSS by default, which requires a custom build step with GitHub actions. Therefore follow the following steps:

- Create an empty project on Deno Deploy
- Give your Deno Deploy project a name under the settings tab
- Enter your Deno Deploy project name at the bottom of the deploy.yml file
- Link your Deno Deploy project with your GitHub repository and choose for build step
- Push your changes to GitHub

You can find more information about deployment on the [Fresh Documentation](https://fresh.deno.dev/docs/concepts/ahead-of-time-builds#deploying-an-optimized-fresh-project)