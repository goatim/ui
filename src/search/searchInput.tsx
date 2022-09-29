import { ChangeEvent, ReactElement, useCallback, useMemo, useState } from 'react';
import { SearchResult } from '@fridaygame/client';
import _ from 'lodash';
import { To } from 'react-router';
import { Wrapper } from '@cezembre/fronts';
import Icon from '../general/icon';
import AssetThumbnail from '../trading/assets/assetThumbnail';

export type SearchInputTheme = 'light' | 'lighter';

export interface Props {
  onSearch?: (query: string) => unknown;
  results?: SearchResult[];
  onClickResult?: (result: SearchResult) => unknown;
  toResult?: (result: SearchResult) => To;
  throttle?: number;
  theme?: SearchInputTheme;
  flat?: boolean;
}

export default function SearchInput({
  onSearch,
  results,
  onClickResult,
  toResult,
  throttle = 1000,
  theme = 'light',
  flat = false,
}: Props): ReactElement {
  const [query, setQuery] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  const throttledSearch = useMemo(() => {
    return _.throttle(
      async (q: string) => {
        if (q && onSearch) {
          await onSearch(q);
        }
      },
      throttle,
      { leading: false },
    );
  }, [onSearch, throttle]);

  const focus = useCallback(() => {
    setActive(true);
  }, []);

  const change = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target || event.currentTarget;
      setQuery(value);
      throttledSearch(value);
    },
    [throttledSearch],
  );

  const blur = useCallback(() => {
    // Hack to register click event on results
    setTimeout(() => {
      setActive(false);
    }, 50);
  }, []);

  const className = useMemo<string>(() => {
    const nextClassNames: string[] = ['friday-ui-search-input', theme];

    if (flat) {
      nextClassNames.push('flat');
    }

    if (active) {
      nextClassNames.push('active');
    }

    return nextClassNames.join(' ');
  }, [active, flat, theme]);

  return (
    <div className={className}>
      <div className={`container${active ? ' active' : ''}`}>
        <div className="icon">
          <Icon name="search" />
        </div>
        <input type="text" onFocus={focus} onChange={change} onBlur={blur} value={query} />
      </div>

      {query && results?.length ? (
        <div className="results">
          {results.map((result) => (
            <Wrapper
              className="result"
              key={result.id}
              onClick={onClickResult ? () => onClickResult(result) : undefined}
              to={toResult ? toResult(result) : undefined}>
              {result.asset ? (
                <AssetThumbnail
                  asset={result.asset}
                  size="small"
                  shape="text"
                  showQuotation={false}
                />
              ) : null}
            </Wrapper>
          ))}
        </div>
      ) : null}
    </div>
  );
}
