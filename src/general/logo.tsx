import { ReactElement } from 'react';
import colors from '../styles/_colors.scss';

export interface Props {
  size?: number;
  color?: string;
}

export default function Logo({ size = 20, color = colors.BLUE }: Props): ReactElement {
  return (
    <span className="theme-logo">
      <svg viewBox="0 0 495.79 473.21" height={size} fill={color as string}>
        <title>Fleuraison</title>
        <g id="Fleuraison">
          <path
            d="M2.1,440.21H43v8.14H11.38v12H38.25V468H11.38v18H2.1Z"
            transform="translate(-2.1 -13.4)"
          />
          <path d="M52,440.21h9.27v37.61H87.86V486H52Z" transform="translate(-2.1 -13.4)" />
          <path
            d="M96.84,440.21h39v8.14H106.12v9.13H132.4v7.64H106.12v12.73h30.29V486H96.84Z"
            transform="translate(-2.1 -13.4)"
          />
          <path
            d="M145,440.21h9.28v25.2a16.76,16.76,0,0,0,.84,5.52,10.54,10.54,0,0,0,2.54,4.08,10.7,10.7,0,0,0,4.17,2.53,19.67,19.67,0,0,0,11.57,0,10.36,10.36,0,0,0,6.72-6.61,16.75,16.75,0,0,0,.85-5.52v-25.2h9.27v26.32a21.19,21.19,0,0,1-1.52,8.19,17.18,17.18,0,0,1-4.42,6.32,20,20,0,0,1-7.09,4.07,32.84,32.84,0,0,1-19.17,0,20,20,0,0,1-7.1-4.07,17.3,17.3,0,0,1-4.42-6.32,21.19,21.19,0,0,1-1.52-8.19Z"
            transform="translate(-2.1 -13.4)"
          />
          <path
            d="M201.53,440.21H224.8a33.72,33.72,0,0,1,9.13,1.1,17.51,17.51,0,0,1,6.41,3.18,12.74,12.74,0,0,1,3.79,5.06,17.41,17.41,0,0,1,1.25,6.76,18.61,18.61,0,0,1-.62,4.84,14.18,14.18,0,0,1-1.89,4.23,14.45,14.45,0,0,1-3.2,3.44,17.49,17.49,0,0,1-4.54,2.51l10,14.63H233.73l-8.61-13h-.26l-14.05,0v13h-9.28ZM225,464.92a15.49,15.49,0,0,0,4.61-.62,9.37,9.37,0,0,0,3.31-1.73,6.9,6.9,0,0,0,2-2.7,9.25,9.25,0,0,0,.66-3.56,7.17,7.17,0,0,0-2.63-5.93c-1.76-1.39-4.4-2.09-7.94-2.09H210.81v16.63Z"
            transform="translate(-2.1 -13.4)"
          />
          <path
            d="M272,440.21h9.84L303.91,486h-9.74l-3.66-7.7H263.79l-3.54,7.7h-9.78Zm14.9,30.41L277,449.84l-9.63,20.78Z"
            transform="translate(-2.1 -13.4)"
          />
          <path d="M309.85,440.21h9.34V486h-9.34Z" transform="translate(-2.1 -13.4)" />
          <path
            d="M333.15,472.35a55.34,55.34,0,0,0,5.05,2.53,39.85,39.85,0,0,0,5.31,1.9,41,41,0,0,0,5.78,1.19,48.71,48.71,0,0,0,6.45.41,39.09,39.09,0,0,0,7-.54,16.92,16.92,0,0,0,4.72-1.5,6.77,6.77,0,0,0,2.67-2.26,5.33,5.33,0,0,0,.83-2.87,4.56,4.56,0,0,0-2.08-3.94c-1.38-1-3.52-1.45-6.41-1.45a35.78,35.78,0,0,0-4,.25l-4.25.54c-1.44.2-2.85.38-4.25.54a32.4,32.4,0,0,1-3.93.25,21.66,21.66,0,0,1-5.9-.79,15.45,15.45,0,0,1-5-2.37,11.77,11.77,0,0,1-3.47-3.95,11.49,11.49,0,0,1-1.28-5.53,13.9,13.9,0,0,1,.51-3.72,12.1,12.1,0,0,1,1.64-3.52,14.23,14.23,0,0,1,2.91-3.14,17.52,17.52,0,0,1,4.32-2.5,28.47,28.47,0,0,1,5.85-1.65,42.87,42.87,0,0,1,7.57-.6,55.73,55.73,0,0,1,6.17.34,61.09,61.09,0,0,1,6.05.95c2,.41,3.84.9,5.66,1.47a48.6,48.6,0,0,1,5.06,1.92l-4.07,7.49c-1.28-.56-2.67-1.08-4.15-1.56s-3-.89-4.65-1.25-3.3-.63-5-.83a46,46,0,0,0-5.29-.31,29.46,29.46,0,0,0-6.3.56,13.71,13.71,0,0,0-3.94,1.42,5.24,5.24,0,0,0-2,1.93,4.59,4.59,0,0,0-.57,2.12,4,4,0,0,0,1.85,3.35,9.77,9.77,0,0,0,5.62,1.31,34,34,0,0,0,3.5-.22l4.15-.49c1.45-.17,2.94-.33,4.45-.48s3-.22,4.41-.22a25.44,25.44,0,0,1,7.15.91,15,15,0,0,1,5.23,2.59,11.06,11.06,0,0,1,3.19,4.07,12.8,12.8,0,0,1,1.08,5.34,13.56,13.56,0,0,1-1.83,7,15.53,15.53,0,0,1-5.21,5.21,26.64,26.64,0,0,1-8.15,3.22,47.56,47.56,0,0,1-10.62,1.09,58.56,58.56,0,0,1-7.56-.48,54.79,54.79,0,0,1-7.06-1.38,51.15,51.15,0,0,1-6.44-2.13,46.64,46.64,0,0,1-5.67-2.74Z"
            transform="translate(-2.1 -13.4)"
          />
          <path
            d="M388.26,463a23.17,23.17,0,0,1,1.9-9.48,21.54,21.54,0,0,1,5.34-7.39,24.3,24.3,0,0,1,8.26-4.78,34.27,34.27,0,0,1,21.32,0,24.25,24.25,0,0,1,8.27,4.78,21.54,21.54,0,0,1,5.34,7.39,23.17,23.17,0,0,1,1.9,9.48,23.55,23.55,0,0,1-1.9,9.56,21.89,21.89,0,0,1-5.34,7.48,24.43,24.43,0,0,1-8.27,4.87,33.52,33.52,0,0,1-21.32,0A24.48,24.48,0,0,1,395.5,480a21.89,21.89,0,0,1-5.34-7.48A23.55,23.55,0,0,1,388.26,463Zm9.28,0a15.45,15.45,0,0,0,1.27,6.39,14.14,14.14,0,0,0,3.54,4.84,15.86,15.86,0,0,0,5.36,3.09,21.42,21.42,0,0,0,13.43,0,15.67,15.67,0,0,0,5.34-3.09,14.14,14.14,0,0,0,3.54-4.84,15.29,15.29,0,0,0,1.29-6.39A15.07,15.07,0,0,0,430,456.6a13.61,13.61,0,0,0-3.54-4.75,15.43,15.43,0,0,0-5.34-3,22.4,22.4,0,0,0-13.43,0,15.62,15.62,0,0,0-5.36,3,13.61,13.61,0,0,0-3.54,4.75A15.22,15.22,0,0,0,397.54,463Z"
            transform="translate(-2.1 -13.4)"
          />
          <path
            d="M450.83,440.21h9.28l28.51,14.93V440.21h9.28V486h-9.28V465l-28.51-14.83V486h-9.28Z"
            transform="translate(-2.1 -13.4)"
          />
        </g>
        <g id="Flower">
          <path
            d="M441.43,189.32a75.39,75.39,0,0,0-62.88-74.23A75.26,75.26,0,0,0,250,40.85a75.26,75.26,0,0,0-128.58,74.24,75.25,75.25,0,0,0,0,148.46,75.33,75.33,0,0,0,70.36,101.7,75.52,75.52,0,0,0,19.6-2.6A74.67,74.67,0,0,0,250,337.79a74.67,74.67,0,0,0,38.62,24.86,75.27,75.27,0,0,0,92.18-53.22,74.72,74.72,0,0,0-2.22-45.88A75.37,75.37,0,0,0,441.43,189.32ZM292.82,31.79a58.91,58.91,0,0,1,69.86,79l-101-58.31A58.47,58.47,0,0,1,292.82,31.79ZM250,314.05,142,251.69V127L250,64.59,358,127V251.69ZM135,73.45a58.9,58.9,0,0,1,103.33-21l-101,58.33A58.41,58.41,0,0,1,135,73.45ZM74.86,189.32A59,59,0,0,1,125.6,131V247.65A59,59,0,0,1,74.86,189.32ZM207.12,346.85a58.9,58.9,0,0,1-69.85-79l101,58.3A58.35,58.35,0,0,1,207.12,346.85ZM337.52,341a58.79,58.79,0,0,1-75.84-14.8l101-58.3A59,59,0,0,1,337.52,341Zm36.82-93.32V131a58.9,58.9,0,0,1,0,116.66Z"
            transform="translate(-2.1 -13.4)"
          />
          <polygon points="179.72 195.16 193.63 195.16 193.63 168.15 233.94 168.15 233.94 156.69 193.63 156.69 193.63 138.73 241.1 138.73 241.1 126.53 179.72 126.53 179.72 195.16" />
          <path
            d="M319.08,207.85a21.72,21.72,0,0,0,2.83-6.34,28.23,28.23,0,0,0,.92-7.27A26,26,0,0,0,321,184.1a19.22,19.22,0,0,0-5.68-7.6,26.45,26.45,0,0,0-9.62-4.77,50.77,50.77,0,0,0-13.7-1.64H257.05v68.63H271V219.18l21.08,0h.39l12.91,19.49h17l-14.93-21.95a26.14,26.14,0,0,0,6.81-3.76A21.91,21.91,0,0,0,319.08,207.85Zm-11.9-8.27a10.51,10.51,0,0,1-3,4.06,14.39,14.39,0,0,1-5,2.59,23.53,23.53,0,0,1-6.92.92H271V182.21h21.34q7.95,0,11.9,3.14t4,8.89A14.07,14.07,0,0,1,307.18,199.58Z"
            transform="translate(-2.1 -13.4)"
          />
        </g>
      </svg>
    </span>
  );
}
