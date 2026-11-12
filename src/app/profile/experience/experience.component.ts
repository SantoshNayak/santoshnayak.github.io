import { Component } from '@angular/core';

interface Role {
  title: string;
  company: string;
  period: string;
  badge?: string;
  summary?: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      title: 'Software Engineer Master',
      company: 'HashedIn by Deloitte',
      period: 'Jun 2026 – Present',
      badge: 'Promoted',
      summary: 'Lead development and architecture for complex web and Gen AI platforms.',
      bullets: [
        'Architected state management solution for OpenAI-based code generation tool, improving application performance by 40% and reducing code complexity through NgRx.',
        'Led multi-SSO integration refactoring (Azure AD, Okta, Google, OIDC), enabling enterprise-grade authentication for 50k+ users.',
        'Integrated Razorpay payments and recurring subscription flows, and built reliable background job processing with Hangfire for billing and async workloads.',
        'Mentored 5+ junior developers through code reviews, reducing bug rates by 25% and elevating team quality to Fortune 500 standards.',
        'Spearheaded sprint planning and estimation, ensuring 100% on-time delivery across multiple client engagements.'
      ]
    },
    {
      title: 'Software Engineer III',
      company: 'HashedIn by Deloitte',
      period: 'Dec 2023 – Jun 2026',
      bullets: [
        'Optimized client website achieving 95% PageSpeed Insights score and 30% faster loading times through lazy loading, code splitting, and image optimization.',
        'Implemented transactional email (SMTP, Resend) and multi-channel push notifications (Firebase, OneSignal) to drive user engagement.',
        'Proposed and implemented Angular Universal for Server-Side Rendering (SSR), achieving 50% faster initial page loads and improving SEO rankings by 35%.',
        'Led product demos to C-level executives, incorporating feedback to improve client satisfaction scores by 40%.'
      ]
    },
    {
      title: 'Software Engineer II',
      company: 'HashedIn by Deloitte',
      period: 'Mar 2022 – Dec 2023',
      bullets: [
        'Developed enterprise E-commerce admin panel using Angular and GraphQL, processing 10k+ daily transactions with real-time inventory management.',
        'Implemented Microfrontend Architecture enabling plug-and-play module integration, reducing deployment time by 60%.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Kare4u Healthcare Solutions Pvt Ltd',
      period: 'Apr 2021 – Mar 2022',
      bullets: [
        'Built fully-functional healthcare booking system independently, delivering 2 weeks ahead of schedule with zero critical bugs.',
        'Collaborated with cross-functional teams to identify and resolve 100+ software bugs, improving application stability.',
        'Optimized database queries and API responses, reducing average response time from 800ms to 200ms.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Kare4u Healthcare Solutions Pvt Ltd',
      period: 'Jan 2020 – Apr 2021',
      bullets: [
        'Developed COVID-19 vaccine slot booking application "CO-WIN HELP 4U", helping 10k+ users secure vaccination appointments.',
        'Built responsive web applications using Angular, ensuring cross-browser compatibility and mobile responsiveness.'
      ]
    }
  ];
}
