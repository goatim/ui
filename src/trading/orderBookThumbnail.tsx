import { ReactElement } from 'react';
import { OrderBook } from '@fridaygame/client';
import FridayCoins from '../market/fridayCoins';

export interface Props {
  orderBook?: OrderBook;
}

export default function OrderBookThumbnail({ orderBook }: Props): ReactElement {
  return (
    <div className="friday-ui-order-book-thumbnail">
      <div className="aggregated-orders buying">
        {orderBook?.buying?.length ? (
          <table>
            <thead>
              <tr>
                <th>Ordres</th>
                <th>Quantité</th>
                <th>Achat</th>
              </tr>
            </thead>

            <tbody>
              {orderBook.buying.map((order) => (
                <tr key={order.price_limit}>
                  <td>
                    <span className="data">{order.nb_orders}</span>
                  </td>
                  <td>
                    <span className="data">{order.total_quantity}</span>
                  </td>
                  <td>
                    <FridayCoins amount={order.price_limit} size="small" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      <div className="aggregated-orders selling">
        {orderBook?.selling?.length ? (
          <table>
            <thead>
              <tr>
                <th>Vente</th>
                <th>Quantité</th>
                <th>Ordres</th>
              </tr>
            </thead>

            <tbody>
              {orderBook.selling.map((order) => (
                <tr key={order.price_limit}>
                  <td>
                    <FridayCoins amount={order.price_limit} size="small" />
                  </td>
                  <td>
                    <span className="data">{order.total_quantity}</span>
                  </td>
                  <td>
                    <span className="data">{order.nb_orders}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
