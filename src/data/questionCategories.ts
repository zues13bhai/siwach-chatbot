import { QuestionCategory } from '../types/chat';

export const questionCategories: QuestionCategory[] = [
  {
    id: 'orders',
    label: 'Orders',
    icon: '📦',
    questions: [
      { label: 'Check Order Status', message: 'What is my order status?', icon: '🔍' },
      { label: 'Track My Package', message: 'How can I track my order?', icon: '📍' },
      { label: 'Order Confirmation', message: 'I didn\'t receive order confirmation', icon: '✉️' },
      { label: 'Cancel Order', message: 'How can I cancel my order?', icon: '❌' },
    ]
  },
  {
    id: 'shipping',
    label: 'Shipping',
    icon: '🚚',
    questions: [
      { label: 'Delivery Time', message: 'How long does delivery take?', icon: '⏰' },
      { label: 'Shipping Costs', message: 'What are the shipping charges?', icon: '💰' },
      { label: 'Change Address', message: 'Can I change my delivery address?', icon: '🏠' },
      { label: 'International Shipping', message: 'Do you ship internationally?', icon: '🌍' },
    ]
  },
  {
    id: 'returns',
    label: 'Returns',
    icon: '🔄',
    questions: [
      { label: 'Return Policy', message: 'What is your return policy?', icon: '📋' },
      { label: 'Process Refund', message: 'How do I get a refund?', icon: '💸' },
      { label: 'Exchange Item', message: 'Can I exchange my item?', icon: '🔁' },
      { label: 'Defective Product', message: 'My product is defective', icon: '⚠️' },
    ]
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: '💳',
    questions: [
      { label: 'Payment Methods', message: 'What payment methods do you accept?', icon: '💰' },
      { label: 'Payment Failed', message: 'My payment failed but money was deducted', icon: '❗' },
      { label: 'Invoice/Receipt', message: 'I need my invoice', icon: '🧾' },
      { label: 'Cash on Delivery', message: 'Is COD available?', icon: '💵' },
    ]
  },
  {
    id: 'support',
    label: 'Support',
    icon: '🛠️',
    questions: [
      { label: 'Product Warranty', message: 'What is the warranty policy?', icon: '🛡️' },
      { label: 'Technical Issue', message: 'My product is not working', icon: '⚙️' },
      { label: 'Human Support', message: 'I need to speak with a human', icon: '👨‍💻' },
      { label: 'Bulk Orders', message: 'I want to place a bulk order', icon: '📦' },
    ]
  }
];