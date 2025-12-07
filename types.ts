export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ContactFormData {
  clinicName: string;
  yourName: string;
  phoneNumber: string;
  city: string;
  patientCount: string;
  message: string;
}

export interface PatientRecord {
  id: string;
  name: string;
  lastVisit: string;
  status: 'Active' | 'Pending' | 'Completed';
  notes: string;
}
