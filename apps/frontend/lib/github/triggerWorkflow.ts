import { octokit } from './octokit'

export default async function triggerWorkflow(
  workflowId: string,
  inputs: Record<string, unknown>
) {
  await octokit.request(
    'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
    {
      owner: 'shunueda',
      repo: 'shu-nu',
      workflow_id: workflowId,
      ref: 'main',
      inputs
    }
  )
}
