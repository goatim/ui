import { ReactElement } from 'react';

export interface Props {
  size?: number;
  color?: string;
}

export default function Message({
  color = '#333',
  size = 20,
}: Props): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 512 512" height={size} fill={color}>
      <title>Message</title>
      <path d="m181.718 133.843h148.564c8.284 0 15-6.716 15-15s-6.716-15-15-15h-148.564c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
      <path d="m181.718 205.396h148.564c8.284 0 15-6.716 15-15s-6.716-15-15-15h-148.564c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
      <path d="m502.749 146.393-68.002-28.217v-91.227c0-8.284-6.716-15-15-15h-327.494c-8.284 0-15 6.716-15 15v91.226l-68.002 28.218c-5.601 2.324-9.251 7.791-9.251 13.854v324.804c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15v-324.804c0-6.063-3.65-11.53-9.251-13.854zm-472.749 49.862 139.423 138.305-139.423 118.123zm226 104.273 200.091 169.522h-400.182zm86.577 34.032 139.423-138.305v256.428zm127.862-169.094-35.692 35.406v-50.216zm-65.692-123.517v188.682l-85.146 84.463-53.905-45.67c-5.595-4.74-13.798-4.74-19.393 0l-53.905 45.67-85.146-84.463v-188.682zm-327.494 158.923-35.692-35.406 35.692-14.81z" />
    </svg>
  );
}
