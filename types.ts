export enum MembershipType {
  STANDARD = 'Standard',
  PREMIUM = 'Premium',
  PATRON = 'Patron'
}

export enum PartnerStatus {
  PROSPECT = 'Prospecto',
  APPROVED = 'Aprobado',
  INACTIVE = 'Inactivo'
}

export enum EventType {
  NETWORKING = 'Networking',
  COMMITTEE = 'Comité',
  WEBINAR = 'Webinar',
  SOCIAL = 'Social'
}

export enum EventStatus {
  DRAFT = 'Borrador',
  PUBLISHED = 'Publicado',
  CLOSED = 'Cerrado'
}

export interface Partner {
  id: string;
  name: string;
  sector: string;
  country: string;
  membership: MembershipType;
  status: PartnerStatus;
  joinDate: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: EventType;
  modality: 'Presencial' | 'Online' | 'Híbrido';
  status: EventStatus;
  attendees: number;
}

export interface Benefit {
  id: string;
  name: string;
  type: 'Descuento' | 'Evento' | 'Acceso';
  membership: MembershipType[];
  validUntil: string;
  active: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  status: 'Borrador' | 'Publicado';
}

export interface Lead {
  id: string;
  company: string;
  sector: string;
  contactName: string;
  date: string;
  status: 'Recibido' | 'En evaluación' | 'Aprobado';
}