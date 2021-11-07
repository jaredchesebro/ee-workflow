# ee-workflow
A simple Github Actions workflow example for deploying ExpressionEngine sites to production or staging.

## Workflows
---
### Staging
**File:** `.github/workflows/staging.yml`

**Triggers:** Workflow Dispatch

**Secrets:** `SSH_PRIVATE_KEY`, `STAGING_SSH_USER`, `STAGING_SSH_HOST`, `STAGING_SSH_PATH`

----

### Production
**File:** `.github/workflows/production.yml`

**Triggers:** Workflow Dispatch, and Release (published, deleted)

**Secrets:** `SSH_PRIVATE_KEY`, `SSH_USER`, `SSH_HOST`, `SSH_PATH`

---
## Credits

**Using Github actions to deploy Craft CMS websites**
Jérôme Coupé
https://www.webstoemp.com/blog/github-actions-deploy-craftcms/

**Automating continuous deployment and rollback with Github releases and actions**
Julian Krispel
https://jkrsp.com/deploy-and-rollback-releases-with-github-actions/
