import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications = [
    {
      name: 'JavaScript Security',
      issuer: 'Infosec',
      date: 'Feb 2025',
      credentialId: 'RGS7OTJ287IE',
      skills: ['JavaScript Security', 'Web Application Security', 'OWASP', 'Secure Coding'],
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEyUVkBmRiIQg/company-logo_100_100/company-logo_100_100/0/1732733414833/infosec_institute_logo?e=1760572800&v=beta&t=4yrp1_rAg_8FEs_RDnbv0rVwGz4JehdvSdGYjK9yRj0',
      verifyUrl: 'https://www.credly.com/badges/your-badge-id' // Replace with actual URL
    },
    {
      name: 'Meta Front-End Developer Certificate',
      issuer: 'Coursera',
      date: 'Aug 2024',
      credentialId: 'WJIVOUF18X9X',
      skills: ['User Interface Design', 'React', 'HTML/CSS', 'JavaScript', 'Frontend Development'],
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1760572800&v=beta&t=XLmwy4qSK9sI3zSV62AVATqha4KUFVUfltI7XSCDn-g',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/RGS7OTJ287IE' // Replace with actual URL
    },
    {
      name: 'Cloud Digital Leader Certification',
      issuer: 'Google Cloud',
      date: 'Jan 2023',
            credentialId: 'ce8316c588e040fc8dfae709e07fadc7',

      expires: '',
      skills: ['Cloud Computing', 'Google Cloud Platform', 'Digital Transformation', 'Cloud Strategy'],
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1760572800&v=beta&t=MRad8gDxLKRtNzVHRwEvXCTCbUvuBoY3wAhqJsG4Xz0',
      verifyUrl: 'https://www.credly.com/badges/b3136056-093b-4119-af66-0046b797e9bc/linked_in_profile' // Replace with actual URL
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
