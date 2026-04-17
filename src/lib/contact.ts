import { Mail, Phone, MapPin } from 'lucide-react'

export const contactInfo = {
  email: 'clemento444@gmail.com',
  phone: '+234 813 265 2982',
  phoneTel: '+2348132652982',
  location: 'Lagos, Nigeria',
}

export const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phoneTel}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactInfo.location,
    href: 'https://maps.google.com/?q=Lagos,Nigeria',
  },
]
