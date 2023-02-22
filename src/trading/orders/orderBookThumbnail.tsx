import { ReactElement } from 'react';
import { OrderBook } from '@fridaygame/client';
import { FridayCoins } from '../../market';

export type OrderBookThumbnailSize = 'narrow' | 'small' | 'medium' | 'big';

export type OrderBookThumbnailTheme = 'light' | 'medium-light';

export interface OrderBookThumbnailProps {
  orderBook?: OrderBook;
  size?: OrderBookThumbnailSize;
  theme?: OrderBookThumbnailTheme;
}

export function OrderBookThumbnail({
  orderBook,
  size = 'medium',
  theme = 'light',
}: OrderBookThumbnailProps): ReactElement {
  return (
    <div className={`friday-ui-order-book-thumbnail ${size} ${theme}`}>
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
                    <span className="data">{order.total_shares}</span>
                  </td>
                  <td>
                    <FridayCoins amount={order.price_limit} size="small" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-order">
            <span>Aucun ordre d&apos;achat</span>
          </div>
        )}
      </div>
      <div className="aggregated-orders selling">
        {orderBook?.selling?.length ? (
          <table>
            <thead>
              <tr>
                <th>{size !== 'narrow' ? 'Vente' : 'Ordres'}</th>
                <th>Quantité</th>
                <th>{size !== 'narrow' ? 'Ordres' : 'Vente'}</th>
              </tr>
            </thead>

            <tbody>
              {orderBook.selling.map((order) => (
                <tr key={order.price_limit}>
                  <td>
                    {size !== 'narrow' ? (
                      <FridayCoins amount={order.price_limit} size="small" />
                    ) : (
                      <span className="data">{order.nb_orders}</span>
                    )}
                  </td>
                  <td>
                    <span className="data">{order.total_shares}</span>
                  </td>
                  <td>
                    {size !== 'narrow' ? (
                      <span className="data">{order.nb_orders}</span>
                    ) : (
                      <FridayCoins amount={order.price_limit} size="small" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-order">
            <span>Aucun ordre de vente</span>
          </div>
        )}
      </div>
    </div>
  );
}
