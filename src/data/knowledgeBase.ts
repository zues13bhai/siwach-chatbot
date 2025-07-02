export const knowledgeBase: Record<string, string> = {
  // Order related queries
  'order status': 'To check your order status, look for the tracking email sent within 2-4 hours of your purchase. If you haven\'t received it, please check your spam folder or email us at originalhitesh@gmail.com with your order ID.',
  
  'tracking': 'You\'ll receive tracking information via email once your order is shipped (within 24-48 hours). The email contains a direct link to track your package.',
  
  'order confirmation': 'If you didn\'t receive order confirmation, please check your spam folder. If still missing, contact originalhitesh@gmail.com with your name and transaction ID.',
  
  'cancel order': 'You can cancel your order within 2 hours of placing it by emailing originalhitesh@gmail.com with your order number. After processing begins, cancellation may not be possible.',
  
  // Shipping queries  
  'shipping': 'We deliver across India within 5-7 working days (3-5 days for metro cities). Orders are processed within 24-48 hours. International shipping is not available currently.',
  
  'delivery time': 'Standard delivery takes 5-7 working days across India. Metro cities receive orders in 3-5 days, while remote areas may take 7-10 working days.',
  
  'international shipping': 'Sorry, we currently only ship within India. International shipping will be available soon!',
  
  'change address': 'You can change your delivery address within 6 hours of placing the order. Email originalhitesh@gmail.com immediately with your order number and correct address.',
  
  'shipping cost': 'Shipping is free for orders above ₹500. For orders below ₹500, shipping charges of ₹50 apply across India.',
  
  // Returns and refunds
  'return': 'You can return unused items within 7 days of delivery. Items must be in original packaging. Email originalhitesh@gmail.com with your order number and reason for return.',
  
  'refund': 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. You\'ll be notified via email about the refund status.',
  
  'exchange': 'Exchanges are available for the same product category within 7 days of delivery. Subject to availability. Email us with your order number and exchange request.',
  
  'defective': 'We\'re sorry about the defective item! Email originalhitesh@gmail.com immediately with photos of the product and your order details. We\'ll arrange free return pickup and provide full refund or replacement.',
  
  // Payment queries
  'payment': 'We accept UPI, credit/debit cards, net banking, and COD (cash on delivery) for select locations. All payments are secure and encrypted.',
  
  'invoice': 'Invoices are automatically sent to your email after payment confirmation. For GST invoices, provide your GSTIN during checkout.',
  
  'payment failed': 'If payment failed but money was deducted, it will be auto-refunded in 3-5 business days. If delayed, email originalhitesh@gmail.com with transaction screenshot.',
  
  'cod': 'Cash on Delivery (COD) is available for most locations in India. You can select this option at checkout. COD orders are delivered within 5-7 working days.',
  
  'gst': 'GST invoices are available. Please provide your GSTIN during checkout or email originalhitesh@gmail.com within 24 hours of purchase with your order details.',
  
  // Product support
  'warranty': 'All electronic products come with a 6-month limited warranty covering manufacturing defects. Contact originalhitesh@gmail.com with purchase proof for warranty claims.',
  
  'product not working': 'Sorry for the trouble! Email originalhitesh@gmail.com with your order number, photos/videos of the issue, and detailed problem description. We\'ll resolve within 24-48 hours.',
  
  'technical support': 'For technical issues, email originalhitesh@gmail.com with detailed problem description, product model, and purchase date. Our team will assist within 24 hours.',
  
  // Business queries
  'bulk order': 'Yes, we offer wholesale pricing for bulk orders (50+ units). Email originalhitesh@gmail.com with your requirements, quantity needed, and delivery location for custom pricing.',
  
  'wholesale': 'For B2B and wholesale inquiries, please email originalhitesh@gmail.com with your business details and requirements. We\'ll provide customized pricing.',
  
  // Contact information
  'contact': 'You can reach us at:\n📧 Email: originalhitesh@gmail.com\n🌐 Website: https://siwachinterprices.netlify.app\n📞 Support Hours: Mon-Sat, 10 AM - 6 PM IST',
  
  'human support': 'I\'ll connect you with our human support team. Please email originalhitesh@gmail.com or they\'ll contact you within 24 hours for personalized assistance.',
  
  'phone': 'For immediate assistance, email originalhitesh@gmail.com. Our support team responds within 24 hours on weekdays.',
  
  // Default responses
  'hello': 'Hello! Welcome to Siwach Enterprises. How can I help you today? You can browse through the question categories above or ask me anything directly.',
  
  'thank you': 'You\'re welcome! Is there anything else I can help you with? Feel free to explore other categories or ask any specific questions.',
  
  'default': 'I\'m here to help with orders, shipping, returns, payments, and product support. You can browse the question categories above or ask me directly. For complex queries, email originalhitesh@gmail.com for detailed assistance.'
};

export function getBotResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();
  
  // Check for keywords in knowledge base
  for (const [key, response] of Object.entries(knowledgeBase)) {
    if (input.includes(key)) {
      return response;
    }
  }
  
  // Check for specific patterns
  if (input.includes('hi') || input.includes('hey') || input.includes('hello')) {
    return knowledgeBase['hello'];
  }
  
  if (input.includes('thanks') || input.includes('thank')) {
    return knowledgeBase['thank you'];
  }
  
  return knowledgeBase['default'];
}