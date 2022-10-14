import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

type EmptyPageProps = {
  title: string;
  subtitle: string;
};

export const EmptyPage: React.FC<EmptyPageProps> = ({ title, subtitle }) => (
  <Flex
    textAlign="center"
    h="100%"
    minH="400px"
    flexDirection="column"
    justifyItems="center"
    alignItems="center"
    justifyContent="center"
  >
    <Box mb="50px" maxW="470px">
      <Heading>{title}</Heading>
      <Heading size="sm" variant="secondary" fontWeight="700">
        {subtitle}
      </Heading>
    </Box>

    <Flex justifyContent="center" w="100%">
      <svg
        width="403"
        height="172"
        viewBox="0 0 403 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M332.722 162.923C333.031 162.408 333.315 161.898 333.647 161.335C335.799 155.442 335.028 151.808 334.056 149.603C330.215 140.995 319.716 136.383 296.614 132.648C294.924 132.387 284.372 129.062 280.223 118.966C277.507 112.41 279.037 105.853 280.122 101.911C283.809 87.9737 292.055 86.794 296.46 75.323C300.1 65.8379 299.946 52.3691 292.826 42.3268C283.934 29.7236 267.009 26.6528 254.56 29.1604C242.371 31.6206 233.971 39.8726 229.768 44.8878C226.409 37.3236 221.799 30.3794 216.133 24.3467C198.971 6.05836 172.698 -2.59675 148.825 0.681524C122.148 4.36884 105.597 21.9933 97.2973 30.8559C50.7375 80.599 81.5005 161.335 0.500488 171.353H403.001C385.275 168.816 357.466 165.994 332.722 162.923Z"
          fill="#00628B"
        />
        <path
          d="M279.721 159.692C277.623 164.05 273.935 166.356 272.347 167.399C269.295 169.247 265.879 170.412 262.334 170.814C261.433 170.918 260.526 170.968 259.619 170.962C232.213 170.962 218.898 171.377 209.01 171.377C185.961 171.377 149.29 171.27 100.934 171.27C94.2766 167.684 66.0526 150.628 55.0381 113.536C54.2733 111.028 40.0873 59.797 65.7443 30.0317C67.3331 28.1881 83.3687 10.0539 100.217 14.3043C118.001 18.7623 120.402 44.2238 142.069 49.3457C151.288 51.551 159.024 48.8833 161.632 47.9644C182.974 40.3823 183.199 17.5826 201.997 11.3343C211.725 8.10941 224.483 10.8245 231.757 20.1436C241.947 33.1855 240.157 55.4458 231.164 69.122C225.733 77.3207 220.048 79.52 216.871 89.9714C215.745 93.6587 213.492 101.549 216.978 110.003C221.892 121.859 234.288 125.73 236.238 126.038C259.18 129.726 277.113 135.257 280.107 145.915C282.537 153.907 279.721 159.692 279.721 159.692Z"
          fill="#F6CA65"
        />
        <path
          d="M119.145 151.037C113.454 150.219 111.717 147.243 105.469 147.451C100.395 147.605 99.4758 149.656 93.4291 151.037C90.1508 151.808 80.1144 154.108 74.5775 149.656C68.0566 144.321 67.9202 133.259 72.6865 125.321C78.4723 115.788 87.08 111.336 89.9967 102.32C91.2297 98.5256 90.4591 97.091 90.714 91.56C91.5854 72.1928 100.756 50.9344 107.722 51.2486C110.283 51.3493 112.026 54.3193 114.433 58.4691C117.758 64.1067 117.758 68.1557 119.768 79.2176C121.41 88.0802 122.175 92.5382 124.024 97.2511C126.686 104.169 128.684 105.296 132.472 112.315C138.157 122.713 144.512 134.344 140.179 142.435C136.657 148.885 126.52 152.092 119.145 151.037Z"
          fill="#3ABD9D"
        />
        <path
          d="M98.7582 171.27C98.7582 171.27 107.467 151.855 105.771 133.158C104.076 114.46 102.084 118.201 104.752 101.602C107.419 85.0032 105.979 72.6074 105.979 72.6074C105.979 72.6074 111.871 95.3004 108.131 108.414C104.39 121.527 113.816 126.791 113.152 147.196C112.488 167.6 113.199 171.27 113.199 171.27H98.7582Z"
          fill="#465477"
        />
        <path
          d="M105.108 127.318L86.3627 122.09L105.771 133.312L105.108 127.318Z"
          fill="#465477"
        />
        <path
          d="M106.904 119.274L120.989 110.874L106.904 113.559V119.298V119.274Z"
          fill="#465477"
        />
        <path
          d="M62.1878 143.046C57.4037 143.047 52.7268 141.629 48.7489 138.972C44.7709 136.314 41.6706 132.536 39.8404 128.116C38.0102 123.696 37.5322 118.832 38.467 114.14C39.4017 109.448 41.7072 105.139 45.0917 101.758C48.4762 98.377 52.7876 96.0757 57.4804 95.1455C62.1731 94.2154 67.0364 94.6981 71.4547 96.5327C75.873 98.3673 79.6478 101.471 82.3016 105.452C84.9553 109.432 86.3686 114.111 86.3628 118.895C86.3549 125.302 83.8046 131.444 79.272 135.972C74.7393 140.5 68.5948 143.044 62.1878 143.046Z"
          fill="#8FDD66"
        />
        <path
          d="M61.571 126.008L42.7194 120.786L62.1875 132.002L61.571 126.008Z"
          fill="#465477"
        />
        <path
          d="M62.1876 118.895L76.3203 110.495L62.1876 115.871V118.895Z"
          fill="#465477"
        />
        <path
          d="M61.725 105.444L66.2305 171.246H58.1385L61.725 105.444Z"
          fill="#465477"
        />
        <path
          d="M347.103 171.706H177.898C174.211 171.705 170.676 171.152 168.07 170.168C165.464 169.184 164 167.851 164 166.46V47.9507C164 46.5603 165.464 45.2267 168.07 44.2432C170.676 43.2596 174.211 42.7066 177.898 42.7056H347.103C350.79 42.7066 354.324 43.2596 356.93 44.2432C359.536 45.2267 361 46.5603 361 47.9507V166.46C360.972 167.848 359.499 169.175 356.899 170.156C354.299 171.137 350.781 171.694 347.103 171.706Z"
          fill="#4B4C61"
        />
        <path d="M345 56.7056H177V152.706H345V56.7056Z" fill="white" />
        <path
          d="M263.5 161C274.675 161 285.599 157.686 294.89 151.478C304.181 145.27 311.423 136.446 315.699 126.122C319.976 115.798 321.095 104.437 318.915 93.4774C316.735 82.5175 311.353 72.4501 303.452 64.5485C295.55 56.6468 285.483 51.2657 274.523 49.0857C263.563 46.9056 252.203 48.0245 241.879 52.3008C231.555 56.5772 222.73 63.8189 216.522 73.1103C210.314 82.4017 207 93.3254 207 104.5C207 119.485 212.953 133.856 223.549 144.452C234.145 155.047 248.516 161 263.5 161Z"
          fill="#8FDD66"
        />
        <path
          opacity="0.3"
          d="M164 145.706V47.913C163.999 47.2294 164.356 46.5523 165.05 45.9205C165.745 45.2887 166.764 44.7146 168.049 44.231C169.333 43.7474 170.859 43.3638 172.538 43.102C174.217 42.8403 176.017 42.7056 177.834 42.7056H323L164 145.706Z"
          fill="white"
        />
        <path
          d="M309.011 31.3501C308.923 28.5829 309.392 25.8262 310.389 23.2433C311.386 20.6604 312.891 18.3038 314.815 16.313C316.739 14.3222 319.043 12.7377 321.59 11.6534C324.138 10.569 326.877 10.0068 329.645 10.0001C332.414 9.99332 335.156 10.5422 337.708 11.6141C340.261 12.686 342.573 14.2593 344.506 16.2407C346.44 18.2221 347.957 20.5713 348.966 23.1493C349.976 25.7273 350.458 28.4817 350.383 31.2493"
          stroke="#9AFA67"
          strokeWidth="6.12"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M317.874 31.8123C317.937 28.6049 319.253 25.5497 321.542 23.3012C323.83 21.0527 326.908 19.7897 330.116 19.7827C333.324 19.7758 336.407 21.0254 338.705 23.2639C341.003 25.5024 342.333 28.5518 342.41 31.759"
          stroke="#8FDD66"
          strokeWidth="6.12"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M325.402 32.2687C325.402 31.1272 325.856 30.0325 326.663 29.2254C327.47 28.4183 328.565 27.9648 329.706 27.9648C330.848 27.9648 331.942 28.4183 332.749 29.2254C333.557 30.0325 334.01 31.1272 334.01 32.2687H325.402Z"
          fill="#6EC142"
        />
      </svg>
    </Flex>
  </Flex>
);

export default EmptyPage;
