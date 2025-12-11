/**
 * Utility functions for WhatsApp integration
 */

/**
 * Creates a WhatsApp link for a given phone number
 * @param {string} phoneNumber - The phone number (can include spaces, dashes, +, etc.)
 * @param {string} message - Optional pre-filled message
 * @returns {string} WhatsApp URL
 */
export const createWhatsAppLink = (phoneNumber, message = '') => {
  // Remove all non-digit characters except + at the beginning
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
  
  // Ensure the number starts with country code (add +92 if it doesn't start with +)
  const formattedPhone = cleanPhone.startsWith('+') ? cleanPhone : `+92${cleanPhone}`;
  
  // Create the WhatsApp URL
  const baseUrl = 'https://wa.me/';
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  
  return `${baseUrl}${formattedPhone}${encodedMessage}`;
};

/**
 * Default message for business inquiries
 */
export const DEFAULT_WHATSAPP_MESSAGE = "Hello! I found your profile on AlphaSoft360 and would like to get in touch.";

/**
 * Creates a WhatsApp link with default business message
 * @param {string} phoneNumber - The phone number
 * @returns {string} WhatsApp URL with pre-filled message
 */
export const createBusinessWhatsAppLink = (phoneNumber) => {
  return createWhatsAppLink(phoneNumber, DEFAULT_WHATSAPP_MESSAGE);
};
