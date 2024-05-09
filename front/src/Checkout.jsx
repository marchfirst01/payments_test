import { loadTossPayments } from '@tosspayments/payment-sdk';

const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

export function CheckoutPage() {
  const clientKey = 'test_ck_E92LAa5PVbJJQoY6logPV7YmpXyJ';
  const onClickTest = () =>
    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments.requestPayment('카드', {
        amount: 15000,
        orderId: generateRandomString(),
        orderName: '토스 티셔츠 외 2건',
        customerName: '박토스',
        successUrl:
          window.location.origin + '/success' + window.location.search,
        failUrl: window.location.origin + '/fail' + window.location.search,
      });
    });

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
