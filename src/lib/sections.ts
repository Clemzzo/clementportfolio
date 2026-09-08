export const sectionOrder = [
  'about',
  'process',
  'projects',
  'experience',
  'skills',
  'contact',
] as const

export type SectionId = (typeof sectionOrder)[number]

export function sectionNumber(id: SectionId) {
  return String(sectionOrder.indexOf(id) + 1).padStart(2, '0')
}
