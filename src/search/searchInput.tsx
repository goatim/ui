import { ChangeEvent, ReactElement, useCallback, useMemo, useState } from 'react';
import { SearchResult } from '@goatim/client';
import _ from 'lodash';
import { Wrapper } from '@cezembre/fronts';
import { UrlObject } from 'url';
import { Icon } from '../general';
import { AssetThumbnail } from '../trading';

export type SearchInputTheme = 'light' | 'lighter';

export interface SearchInputProps {
  onSearch?: (query: string) => unknown;
  results?: SearchResult[];
  onClickResult?: (result: SearchResult) => unknown;
  resultHref?: (result: SearchResult) => string | UrlObject;
  throttle?: number;
  theme?: SearchInputTheme;
  flat?: boolean;
}

export function SearchInput({
  onSearch,
  results,
  onClickResult,
  resultHref,
  throttle = 1000,
  theme = 'light',
  flat = false,
}: SearchInputProps): ReactElement {
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
    }, 200);
  }, []);

  const className = useMemo<string>(() => {
    const nextClassNames: string[] = ['goatim-ui-search-input', theme];

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
              href={resultHref ? resultHref(result) : undefined}>
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
