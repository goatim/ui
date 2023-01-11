import { ReactElement } from 'react';
import IconProps from './props';

export default function Podium({ size = 15 }: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 512.83 496.72" height={size}>
      <title>Podium</title>
      <path d="M512.83,335.52c-.01-1.04-.32-1.98-.77-2.85-.14-.27-.31-.48-.48-.72-.44-.62-.96-1.14-1.58-1.57-.16-.11-.23-.3-.39-.39-.09-.05-.2-.03-.29-.08-.87-.45-1.82-.77-2.87-.77l-140.6-.36v-64.58s-.01-.03-.01-.05c-.01-1.04-.32-1.98-.77-2.85-.14-.27-.31-.48-.48-.72-.44-.62-.96-1.14-1.58-1.57-.16-.11-.23-.3-.39-.39-.09-.05-.2-.03-.3-.08-.87-.45-1.82-.76-2.87-.77l-140.21-.35-.05-95.68s-.01-.03-.01-.04c0-1.05-.32-1.99-.77-2.86-.13-.26-.3-.46-.46-.69-.44-.63-.96-1.15-1.6-1.59-.15-.11-.22-.29-.39-.38-.09-.05-.2-.03-.29-.08-.88-.45-1.82-.77-2.88-.77l-92.84-.18,.13-19.9c6.16-1.29,11.84-4.41,16.16-9.01,3.58-3.81,6.72-8.34,9.55-13.27,2.04,3.26,5.06,6.66,9.55,10.07,.78,.37,5.71,2.54,11.51,2.54,3.07,0,6.38-.6,9.46-2.4,3.78-2.2,8.47-7.02,9.32-17.45,.28-3.53-2.35-6.62-5.88-6.91-3.72-.16-6.63,2.36-6.91,5.88-.21,2.7-.91,6.18-2.96,7.39-2.5,1.47-7.25,.17-7.9,.08-5.14-3.99-7.52-8.28-7.06-12.75,.53-5.22,4.82-9.98,7.59-11.35,.96-.4,3.23-.99,3.58-1.08,10.43-3.33,19.1-12.13,23.18-23.56,3.09-8.68,2.03-18.28-2.94-26.31-4.24-6.88-10.77-11.72-18.32-14.02,.7-9.36,.81-15.68,.82-16.59,.02-1.71-.64-3.37-1.85-4.59-1.21-1.22-2.85-1.91-4.56-1.91H64.96c-1.71,.01-3.36,.7-4.56,1.92-1.21,1.22-1.87,2.88-1.85,4.59,.01,.91,.13,7.27,.83,16.65-7.45,2.34-13.9,7.15-18.09,13.96-4.96,8.03-6.03,17.63-2.94,26.31,4.08,11.42,12.75,20.23,23.48,23.64,0,0,2.31,.59,3.16,.94,2.89,1.43,7.17,6.18,7.7,11.41,.45,4.46-1.92,8.75-5.82,11.99-1.53,.7-6.52,2.19-9.11,.69-2.07-1.21-2.77-4.7-2.98-7.41-.29-3.52-3.12-5.9-6.91-5.88-3.53,.29-6.16,3.38-5.88,6.91,.84,10.43,5.54,15.25,9.32,17.45,3,1.75,6.24,2.37,9.29,2.37,6,0,11.31-2.39,12.93-3.26,3.9-3.04,6.31-6.14,8.16-9.18,2.82,4.88,5.93,9.37,9.47,13.14,4.3,4.58,9.96,7.7,16.1,8.99l-.13,19.9-47.65-.09c-1.43,.37-2.48,.36-3.54,1.05L2.89,190.91c-.19,.12-.3,.32-.47,.46-.33,.27-.62,.55-.89,.89-.27,.33-.5,.66-.69,1.02-.19,.35-.33,.7-.45,1.08-.14,.43-.22,.85-.26,1.3-.02,.21-.12,.39-.12,.61V490.1c0,3.54,2.87,6.4,6.41,6.42l441.31,.2c1.05,0,2-.32,2.88-.77,.09-.05,.21-.03,.3-.08l58.7-33.43c2-1.14,3.24-3.27,3.24-5.57v-121.32s-.01-.03-.01-.05h0ZM175.4,43.86c2.95,4.77,3.58,10.2,1.76,15.27-2.73,7.67-8.34,13.52-14.7,15.55,0,0-1.16,.33-2.46,.73,3.39-13.67,5.48-27.44,6.77-39.07,3.5,1.64,6.57,4.18,8.63,7.52h0Zm-109.98,30.91c-6.64-2.12-12.24-7.97-14.98-15.63-1.82-5.07-1.19-10.5,1.76-15.27,2.01-3.27,5-5.75,8.41-7.41,1.28,11.59,3.36,25.28,6.73,38.89-.99-.31-1.85-.55-1.92-.57h0Zm6.2-61.93h84.13c-.98,19.9-5.82,80.08-28.87,104.64-6.71,7.16-19.66,7.15-26.39,0-23.05-24.56-27.89-84.73-28.87-104.63h0Zm88.48,187.12l46.26-27.04,.05,87.28c0,.12,.07,.23,.07,.36l-46.38,27.36v-87.96Zm55.19,70.3l120.66,.3-36.96,21.74h-121.09s37.39-22.04,37.39-22.04Zm91.86,32.13l45.84-26.98v56.78l-45.84,27.06v-56.87Zm0,74.12h134.14v107.39l-134.14-.06v-107.33Zm138.82-12.84h-121.07l37.37-22.06,120.67,.32-36.97,21.74ZM61.36,167.87l45.67,.09-.03,4.95h-10.07c-3.54,0-6.41,2.88-6.41,6.41s2.88,6.41,6.41,6.41h32.74c3.54,0,6.41-2.88,6.41-6.41s-2.88-6.41-6.41-6.41h-9.84l.03-4.92,69.31,.13-37.21,21.75H27.85l33.5-22ZM12.82,202.68H147.28V483.75l-134.46-.06V202.68h0Zm147.28,102.45h134.21v178.68l-134.21-.06v-178.62Zm339.9,148.02l-45.86,26.12v-105.52l45.86-26.98v106.38Z" />
      <path d="M283.83,143.38c-.53,2.38,.34,4.86,2.24,6.39,1.93,1.53,4.52,1.85,6.73,.81l23.22-10.81,22.06,13c1,.59,2.13,.89,3.26,.89,1.22,0,2.46-.35,3.52-1.05,2.04-1.34,3.15-3.72,2.85-6.14l-3.12-25.4,19.16-16.97c1.83-1.61,2.58-4.12,1.94-6.48-.64-2.36-2.57-4.14-4.96-4.61l-25.11-4.9-10.21-23.48c-.99-2.24-3.13-3.73-5.57-3.84-2.49-.23-4.73,1.15-5.92,3.29l-12.43,22.39-25.47,2.46c-2.43,.23-4.52,1.82-5.39,4.11-.87,2.28-.36,4.86,1.31,6.64l17.43,18.73-5.54,25Zm22.25-44.5c2.1-.2,3.98-1.43,4.99-3.27l7.75-13.97,6.37,14.66c.84,1.93,2.58,3.33,4.66,3.73l15.67,3.05-11.96,10.6c-1.58,1.39-2.38,3.48-2.13,5.58l1.94,15.85-13.76-8.11c-1-.59-2.13-.89-3.26-.89-.93,0-1.85,.2-2.71,.59l-14.48,6.75,3.46-15.61c.45-2.06-.12-4.21-1.57-5.75l-10.9-11.7,15.91-1.53Z" />
      <path d="M242.39,217.26l27.66-7.62,13.84,24.72c1.21,2.17,3.38,3.34,6.09,3.27,2.49-.2,4.63-1.82,5.51-4.16l13.09-35.27,7.38,36.42c.48,2.46,2.36,4.39,4.79,4.97,.5,.12,1,.17,1.49,.17,1.94,0,3.8-.89,5.04-2.45l17.5-22.28,26.13,11.81c2.43,1.11,5.26,.6,7.14-1.27,1.89-1.86,2.44-4.69,1.39-7.12l-22.11-50.97c1.8-1.27,3.69-2.39,5.39-3.84,14.34-12.27,23.06-29.4,24.52-48.21,1.47-18.83-4.46-37.09-16.74-51.44-12.27-14.35-29.4-23.06-48.22-24.54-38.7-2.95-72.94,26.1-75.97,64.96-1.46,18.83,4.48,37.1,16.75,51.45,.95,1.12,2.12,1.96,3.13,3.01l-30.92,48.77c-1.42,2.24-1.32,5.12,.27,7.25,1.57,2.13,4.27,3.06,6.85,2.37h0Zm118.68-8.95l-15.58-7.04c-2.72-1.25-5.87-.45-7.69,1.88l-12.02,15.31-7.7-37.96c9.82-.16,19.28-2.51,28.07-6.55l14.91,34.36Zm-101.96-102.89c1.2-15.41,8.33-29.43,20.08-39.47,10.57-9.04,23.75-13.89,37.51-13.89,1.52,0,3.05,.05,4.59,.18,15.41,1.2,29.43,8.33,39.47,20.07,10.05,11.75,14.92,26.7,13.71,42.11-1.21,15.41-8.33,29.43-20.07,39.47-11.76,10.04-26.87,14.92-42.12,13.71-15.41-1.2-29.42-8.33-39.47-20.07-10.04-11.74-14.91-26.7-13.7-42.11h0Zm16.89,61.96c7.82,5.56,16.64,9.38,26.11,11.39l-13.82,37.22-9.5-16.99c-1.43-2.57-4.45-3.84-7.29-3.05l-16.5,4.54,21-33.11Z" />
      <path d="M417.1,260.62l-5.15,29.93c-.41,2.39,.58,4.84,2.55,6.26,1.99,1.44,4.6,1.61,6.77,.5l26.88-14.14,26.88,14.14c.94,.48,1.97,.73,2.99,.73,1.33,0,2.64-.42,3.77-1.24,1.97-1.43,2.96-3.87,2.55-6.26l-5.15-29.93,21.76-21.2c1.75-1.71,2.38-4.25,1.63-6.57-.77-2.32-2.77-4.02-5.18-4.37l-30.06-4.37-13.45-27.23c-2.16-4.37-9.33-4.37-11.49,0l-13.45,27.23-30.06,4.37c-2.41,.35-4.41,2.04-5.18,4.37-.75,2.32-.12,4.87,1.63,6.57l21.77,21.2Zm17.03-24.3c2.08-.3,3.9-1.62,4.82-3.51l9.19-18.61,9.19,18.61c.93,1.89,2.74,3.2,4.82,3.51l20.54,2.98-14.88,14.48c-1.5,1.48-2.21,3.59-1.85,5.68l3.52,20.45-18.36-9.66c-.94-.48-1.97-.73-2.99-.73s-2.05,.25-2.99,.73l-18.36,9.66,3.52-20.45c.36-2.08-.34-4.2-1.85-5.68l-14.88-14.48,20.54-2.98Z" />
    </svg>
  );
}