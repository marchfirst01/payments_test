import { loadTossPayments } from '@tosspayments/payment-sdk';

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

export function CheckoutPage() {
  const clientKey = 'test_ck_E92LAa5PVbJJQoY6logPV7YmpXyJ';
  const onClickTest = async () => {
    try {
      const tossPayments = await loadTossPayments(clientKey);
      const orderId = generateRandomString();
      const amount = 20000;
      const orderName = '토스 티셔츠';
      const customerName = '김토스';

      await tossPayments.requestPayment('카드', {
        amount: amount,
        orderId: orderId,
        orderName: orderName,
        customerName: customerName,
        successUrl:
          window.location.origin + '/success' + window.location.search,
        failUrl: window.location.origin + '/fail' + window.location.search,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='wrapper w-100'>
      <div className='max-w-540 w-100'>
        <button className='btn primary w-100' onClick={onClickTest}>
          결제하기
        </button>
      </div>
    </div>
  );
}
