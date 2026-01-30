
export type CertificateType = 'Egyptian General Secondary' | 'IGCSE/GCE' | 'Al-Azhar' | 'International Baccalaureate (IB)' | 'American Diploma' | 'Other International';

export interface LeadFormData {
  fullName: string;
  score: string;
  certificateType: CertificateType;
  desiredMajor: string;
  whatsappNumber: string;
  email: string;
  country: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UniversityInsight {
  status: 'safe' | 'target' | 'reach' | 'unlikely';
  title: string;
  content: string;
}
