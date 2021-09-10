import { Cart } from '../domain/cart';
import { createOrder } from '../domain/order';
import { User } from '../domain/user';
import { useNotifier } from '../services/notificationAdapter';
import { usePayment } from '../services/paymentAdapter';
import { useCartStorage, useOrdersStorage } from '../services/storageAdapter';

export function useOrderProducts() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();

  // We can also get `user` and `cart` right here through the corresponding hooks
  // and not pass them as arguments to a function.

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function orderProducts(user: User, cart: Cart) {
    // Here we can validate the data before creating the order.

    const order = createOrder(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("The payment wasn't successful 🤷");

    // And here we can save the order on the server, if necessary.

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  }

  return { orderProducts };
}