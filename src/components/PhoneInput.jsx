import { validarEFormatarTelefone } from "../general/utils";

export default function PhoneInput({ blurValidate, objForm }) {
  return (
    <>
      <div className="w-full border border-gray-300 rounded-lg max-w-md flex py-4 px-5 justify-center items-center gap-4">
        <div>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#CCC"
              d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z"
            />
          </svg>
        </div>
        <div className="relative container mx-auto max-w-md text-xs-13">
          <label htmlFor="tel">Mobile Number</label>
          <input
            required
            id="tel"
            type="tel"
            placeholder="Your mobile number"
            onInput={validarEFormatarTelefone}
            onBlur={blurValidate}
            className="w-full
          text-xs-13
          outline-none
          mt-1
          placeholder:text-xs-13"
          />
        </div>
      </div>
      {!objForm?.tel?.status && objForm?.tel !== undefined ? (
        <div className="text-red-600  w-full">
          {objForm?.tel?.tipo === 'textVoid'
            ? 'Fill a Phone Number'
            : 'Invalid Phone Number'}
        </div>
      ) : null}
    </>
  );
}
