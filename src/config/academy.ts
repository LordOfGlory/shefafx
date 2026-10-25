/**
 * ACADEMY CONFIGURATION
 * ---------------------------------------------------------------------------
 * Edit this one file to change the academy name, contact details, social links,
 * course fee, course duration and instructor profile. Every page reads from here.
 *
 * Leave a value as an empty string ('') when you do not have it yet. The website
 * then shows a clearly marked "to be added" note instead of inventing details.
 */

export const academy = {
  name: 'Shefa Forex Academy',
  tagline: 'Learn. Trade. Grow.',
  location: 'Kampala, Uganda',

  mission:
    'To equip aspiring and experienced traders with practical forex trading knowledge, disciplined risk management, and the skills required to make informed trading decisions.',
  vision:
    'To become a trusted forex trading education institution in Uganda and eventually across East Africa.',

  /** Contact details. Leave empty until you have them. */
  contact: {
    email: 'shefaventurez@outlook.com',
    phone: '+256 763 533 786',
    whatsapp: '256763533786',
  },

  /** Full web addresses, e.g. 'https://www.facebook.com/yourpage'. Leave empty to hide the link. */
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  /**
   * The single course. Fee and duration are NOT invented.
   * Example once known:  fee: 'UGX 000,000 (one-time payment)',  duration: '12 weeks'
   */
  course: {
    fee: '',
    duration: '',
    feeFallback: 'Contact the academy for course fees.',
    durationFallback: 'Contact the academy for the course schedule.',
  },

  /** Instructor profile. Replace the placeholder text with real information when ready. */
  instructor: {
    name: '', // e.g. 'Full Name'
    title: '', // e.g. 'Lead Instructor'
    bio: '', // two or three sentences about experience and teaching background
    photo: '', // e.g. 'images/instructor.jpg' (file placed in public/images/)
  },
}

export const courseFeeText = () => academy.course.fee.trim() || academy.course.feeFallback
export const courseDurationText = () =>
  academy.course.duration.trim() || academy.course.durationFallback
export const hasEmail = () => academy.contact.email.trim().length > 0
export const hasPhone = () => academy.contact.phone.trim().length > 0
export const hasWhatsapp = () => academy.contact.whatsapp.trim().length > 0
export const whatsappLink = () => `https://wa.me/${academy.contact.whatsapp.replace(/\D/g, '')}`
export const instructorConfigured = () => academy.instructor.name.trim().length > 0
