export const initialNodes = [
  {
    id: "1",
    type: "payment",
    data: { amount: 100 },
    position: { x: 100, y: 300 },
  },
  {
    id: "2",
    type: "currencyList",
    data: {
      currencyList: [
        { code: "USD", name: "US Dollar", flag: "US" },
        { code: "EUR", name: "Euro", flag: "EU" },
        { code: "INR", name: "Indian Rupee", flag: "IN" },
        { code: "JPY", name: "Japanese Yen", flag: "JP" },
      ],
    },
    position: { x: 650, y: 10 },
  },
  {
    id: "3",
    type: "currency",
    data: { currency: "USD", flag: "US" },
    position: { x: 650, y: 300 },
  },
  {
    id: "4",
    type: "interfaceDropdown",
    data: {
      paymentInterfaceList: [
        { code: "stripe", name: "Stripe" },
        { code: "razorpay", name: "Razorpay" },
        { code: "paypal", name: "Paypal" },
        { code: "gpay", name: "Gpay" },
        { code: "applePay", name: "Apple Pay" },
      ],
    },
    position: { x: 1000, y: 50 },
  },
  {
    id: "5",
    type: "paymentInterface",
    data: { paymentInterface: "stripe" },
    position: { x: 1000, y: 250 },
  },
  {
    id: "6",
    type: "table",
    data: {
      tableData: [
        {
          id: 1,
          name: "Jennifer Lopez",
          email: "jennifer.lopez@example.com",
        },
        {
          id: 2,
          name: "Marlin Monroe",
          email: "marlin.monroe@example.com",
        },
      ],
    },
    position: { x: 1000, y: 450 },
  },
];
