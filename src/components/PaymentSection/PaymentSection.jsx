import styles from './PaymentSection.module.css';

const PaymentSection = () => {
  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: 50000,
      currency: 'INR',
      name: 'NexusCTC',
      description: 'AWS Course Payment',
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999',
      },
    };

    const paymentGateway = new window.Razorpay(options);
    paymentGateway.open();
  };

  return (
    <div className={styles.payment}>
      <h2>Secure Your Spot</h2>
      <button onClick={handlePayment} className={styles.payButton}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentSection;
