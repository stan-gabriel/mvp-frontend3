import React from 'react';

export type Props = {
  primaryColor: string;
  secondaryColor: string;
};

const DashboardIcon: React.FC<Props> = ({
  primaryColor,
  secondaryColor,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.32 0H2.68C1.19988 0 0 1.19988 0 2.68V21.32C0 22.8001 1.19988 24 2.68 24H21.32C22.8001 24 24 22.8001 24 21.32V2.68C24 1.19988 22.8001 0 21.32 0Z"
      fill={secondaryColor}
    />
    <path
      d="M12.82 10.5H11.17C10.8 10.5 10.5 10.8 10.5 11.17V20.33C10.5 20.7 10.8 21 11.17 21H12.82C13.19 21 13.49 20.7 13.49 20.33V11.17C13.49 10.8 13.19 10.5 12.82 10.5Z"
      fill="white"
    />
    <path
      d="M6.83001 16.5H5.18001C4.80998 16.5 4.51001 16.8 4.51001 17.17V20.33C4.51001 20.7 4.80998 21 5.18001 21H6.83001C7.20004 21 7.50001 20.7 7.50001 20.33V17.17C7.50001 16.8 7.20004 16.5 6.83001 16.5Z"
      fill={primaryColor}
    />
    <path
      d="M18.83 3H17.18C16.81 3 16.51 3.29997 16.51 3.67V20.33C16.51 20.7 16.81 21 17.18 21H18.83C19.2 21 19.5 20.7 19.5 20.33V3.67C19.5 3.29997 19.2 3 18.83 3Z"
      fill={primaryColor}
    />
  </svg>
);

export default DashboardIcon;
