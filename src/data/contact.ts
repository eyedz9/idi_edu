import type { ContactInfo, SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/interiordesignersinstitute/",
    icon: "facebook",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/interiordesignersinstitute/",
    icon: "instagram",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA",
    icon: "youtube",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@idi_newportbeach",
    icon: "tiktok",
  },
  {
    platform: "Pinterest",
    url: "https://www.pinterest.com/idinewportbeach/",
    icon: "pinterest",
  },
];

export const contactInfo: ContactInfo = {
  address: "1061 Camelback Street",
  city: "Newport Beach",
  state: "CA",
  zip: "92660",
  phone: "(949) 675-4451",
  fax: "(949) 759-0667",
  email: "contact@idi.edu",
  catalogUrl: "/documents/idi-catalog.pdf",
  socialLinks,
};

/** Full formatted address for display */
export const fullAddress = `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.state} ${contactInfo.zip}`;

/** Google Maps embed URL for the campus location */
export const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4!2d-117.8769!3d33.6189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf0d4a5e073f%3A0x8e4e3dd5a9e0c0a!2sInterior+Designers+Institute!5e0!3m2!1sen!2sus!4v1";

/** Google Maps link for directions */
export const googleMapsDirectionsUrl =
  "https://www.google.com/maps/dir//Interior+Designers+Institute,+1061+Camelback+St,+Newport+Beach,+CA+92660";

/** Office hours */
export const officeHours = {
  weekdays: "Monday \u2013 Friday: 8:00 AM \u2013 5:00 PM",
  saturday: "Saturday: By appointment",
  sunday: "Sunday: Closed",
};

/** BPPE school code */
export const bppeSchoolCode = "2302631";

/** Federal school code for FAFSA */
export const federalSchoolCode = "041863";
