
export const SocialMediaLogin = () => {
  return (
    <div
      
      className="px-8 py-5 flex justify-between max-w-sm mx-auto"
    >
      <button className="h-16 w-16 rounded-lg shadow-social flex justify-center items-center">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.54714 12C5.54714 11.2205 5.67659 10.4733 5.90765 9.77235L1.86337 6.68399C1.07516 8.28435 0.631073 10.0876 0.631073 12C0.631073 13.9107 1.07461 15.7129 1.86173 17.3122L5.90382 14.2178C5.67495 13.5202 5.54714 12.7756 5.54714 12Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6481 4.90909C14.3414 4.90909 15.8709 5.50909 17.0726 6.49091L20.5685 3C18.4382 1.14545 15.707 0 12.6481 0C7.89921 0 3.81778 2.71582 1.86337 6.684L5.90766 9.77236C6.83952 6.94364 9.49584 4.90909 12.6481 4.90909Z"
            fill="#EB4335"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6481 19.0909C9.49584 19.0909 6.83952 17.0564 5.90766 14.2276L1.86337 17.3154C3.81778 21.2842 7.89921 24 12.6481 24C15.5792 24 18.3775 22.9593 20.4778 21.0093L16.6389 18.0414C15.5557 18.7238 14.1918 19.0909 12.6481 19.0909Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.1189 12C24.1189 11.2909 24.0097 10.5273 23.8458 9.81818H12.6481V14.4545H19.0936C18.7714 16.0353 17.8941 17.2505 16.6389 18.0414L20.4778 21.0093C22.684 18.9616 24.1189 15.9114 24.1189 12Z"
            fill="#4285F4"
          />
        </svg>
      </button>
      <button className="h-16 w-16 rounded-lg shadow-social flex justify-center items-center">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.163696"
            width="23.9226"
            height="24"
            fill="url(#pattern0_1_264)"
          />
          <defs>
            <pattern
              id="pattern0_1_264"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1_264"
                transform="scale(0.00323625 0.00322581)"
              />
            </pattern>
            <image
              id="image0_1_264"
              width="309"
              height="310"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </button>
      <button className="h-16 w-16 rounded-lg shadow-social flex justify-center items-center">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_266)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2124 3.89624C14.9951 2.88584 15.5884 1.45774 15.3738 0C14.0945 0.088904 12.5992 0.907396 11.7267 1.97424C10.9314 2.9409 10.2777 4.37889 10.533 5.77454C11.9315 5.81828 13.3749 4.98002 14.2124 3.89624ZM21.125 17.6086C20.5653 18.8561 20.296 19.4135 19.575 20.5185C18.5692 22.0609 17.1511 23.9815 15.3921 23.9956C13.8308 24.0125 13.4282 22.9725 11.3087 22.9852C9.18921 22.9965 8.74735 24.0153 7.18331 23.9998C5.4257 23.9843 4.08188 22.2514 3.07613 20.709C0.262261 16.3992 -0.0337152 11.3402 1.70146 8.64908C2.93586 6.73835 4.88284 5.6207 6.71199 5.6207C8.57341 5.6207 9.74469 6.64804 11.2863 6.64804C12.7816 6.64804 13.692 5.61789 15.8451 5.61789C17.4751 5.61789 19.2019 6.51115 20.4307 8.05215C16.402 10.2733 17.0543 16.0606 21.125 17.6086Z"
              fill="#20130B"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_266">
              <rect
                width="20.5"
                height="24"
                fill="white"
                transform="translate(0.625)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button className="h-16 w-16 rounded-lg shadow-social flex justify-center items-center">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.025 2.84117C27.9668 3.32308 26.8274 3.64897 25.6323 3.79459C26.8528 3.04572 27.7893 1.85829 28.2305 0.443774C27.0878 1.13717 25.825 1.6416 24.476 1.91202C23.4009 0.734993 21.8643 0 20.1637 0C16.9029 0 14.2573 2.71289 14.2573 6.0585C14.2573 6.53348 14.308 6.99459 14.4095 7.43836C9.49874 7.18527 5.14586 4.77573 2.22986 1.10596C1.72104 2.0039 1.43027 3.04572 1.43027 4.15515C1.43027 6.25612 2.47328 8.11095 4.05892 9.19784C3.09199 9.16837 2.17914 8.89275 1.38125 8.44204V8.51657C1.38125 11.4531 3.41823 13.9025 6.12294 14.4572C5.62764 14.5993 5.10529 14.6704 4.56604 14.6704C4.1857 14.6704 3.8138 14.634 3.45373 14.5629C4.20598 16.969 6.38664 18.7216 8.97301 18.7684C6.95124 20.3944 4.40207 21.3634 1.63482 21.3634C1.15812 21.3634 0.686488 21.3356 0.224998 21.2802C2.84011 22.9963 5.94713 24 9.28237 24C20.1519 24 26.0938 14.7692 26.0938 6.7623C26.0938 6.49881 26.0887 6.23532 26.0786 5.97703C27.2331 5.12243 28.2356 4.05634 29.025 2.84117Z"
            fill="#00AAEC"
          />
        </svg>
      </button>
    </div>
  );
};


