import { Product } from './Product.model';
import { PaymentMethod } from './PaymentMethod.model';
import { Delivery } from './Delivery.model';
import { Shipping } from './Shipping.model';

export interface Order {
    id: number;
    items: Array<Product>;
    delivery: Delivery;
    cardMessage: string;
    shipping: Shipping;
    paymentMethods?: Array<PaymentMethod>;
    paymentMethod: number;
    note: string;
    subTotal: number;
    deliveryCharge: number;
    total: number;
}
