import GenericService from './GenericService'

export function AIConsulting() {
  return (
    <GenericService
      title="AI Consulting"
      points={[
        'Discovery workshops & opportunity mapping',
        'Model selection, evaluation & PoCs',
        'Responsible AI & governance frameworks',
        'Integration with your data & operations',
      ]}
    />
  )
}

export function AutomationAgents() {
  return (
    <GenericService
      title="Automation & Agents"
      points={[
        'LLM-based agents for support, sales & ops',
        'Process automation and RPA replacements',
        'Human-in-the-loop oversight & guardrails',
        'Monitoring, analytics & continuous tuning',
      ]}
    />
  )
}

export function ProductEngineering() {
  return (
    <GenericService
      title="Product Engineering"
      points={[
        'MVPs, web apps and APIs',
        'Design systems & UX audits',
        'Performance, accessibility & SEO',
        'Quality engineering & CI/CD',
      ]}
    />
  )
}

export function CloudDevOps() {
  return (
    <GenericService
      title="Cloud & DevOps"
      points={[
        'Infrastructure as Code and Kubernetes',
        'Observability & SRE practices',
        'Security hardening & cost optimization',
        'Developer platforms & pipelines',
      ]}
    />
  )
}

export function DataAnalytics() {
  return (
    <GenericService
      title="Data & Analytics"
      points={[
        'Data pipelines & warehousing',
        'BI dashboards & decision intelligence',
        'Real-time analytics & eventing',
        'Data governance & quality',
      ]}
    />
  )
}

export function SecurityCompliance() {
  return (
    <GenericService
      title="Security & Compliance"
      points={[
        'Threat modeling & AppSec reviews',
        'Pen testing & vulnerability management',
        'Privacy by design & policy support',
        'Compliance readiness (SOC2, ISO, GDPR)',
      ]}
    />
  )
}
