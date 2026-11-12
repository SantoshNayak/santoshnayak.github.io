import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  groups = [
    {
      title: 'Languages & Frameworks',
      intro: 'Deep foundation in scripting, compiled runtimes, and building enterprise apps.',
      items: [
        'Angular (Expert)',
        'TypeScript / JS',
        'HTML5 / CSS3 / SCSS',
        'React.js',
        'Node.js',
        '.NET Core'
      ]
    },
    {
      title: 'Frontend Architecture',
      intro: 'Designing reactive state managers, server rendering, and scalable architectures.',
      items: [
        'NgRx / RxJS / Redux',
        'Microfrontends',
        'Angular Universal (SSR)',
        'Tailwind CSS / Material',
        'Vite / Webpack Bundling',
        'Cypress / Jest testing'
      ]
    },
    {
      title: 'Payments, Auth & APIs',
      intro: 'Building transactional gateways, messaging queues, and identity endpoints.',
      items: [
        'Razorpay Gateway',
        'SSO (Azure AD, Okta, OIDC)',
        'Hangfire background jobs',
        'SMTP / Resend transaction email',
        'Firebase Auth / OTP verification',
        'Meta WhatsApp Business API'
      ]
    },
    {
      title: 'Cloud, Database & Gen AI',
      intro: 'Deploying secure infrastructure, querying clusters, and engineering smart LLM agents.',
      items: [
        'PostgreSQL / SQL Server',
        'GCP (Certified Leader) / AWS',
        'RAG Pipelines & Vector DBs',
        'Gemini Function Calling',
        'Docker / VPS Deployment',
        'Flutter / React Native'
      ]
    }
  ];
}
