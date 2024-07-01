import { useState } from 'react';

export default function PasswordInput({ blurValidate, objForm, isCreate = false }) {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [objStrongValidate, setObjStrongValidate] = useState({});

  function togglePasswordVisibility() {
    setIsPasswordVisible(prevState => !prevState);
  }
  function validateStrong(e) {
    setObjStrongValidate({
      lowerCaseLetters: e.target.value.match(lowerCaseLetters),
      upperCaseLetters: e.target.value.match(upperCaseLetters),
      numbers: e.target.value.match(numbers),
      length: e.target.value.length >= 8,
    });
  }
  const allKeysValidate = Object.values(objStrongValidate).every(value => value);
  console.log("allKeysValidate: ", allKeysValidate);
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
              d="M12 2a4 4 0 0 1 4 4v2h2.5A1.5 1.5 0 0 1 20 9.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-11A1.5 1.5 0 0 1 5.5 8H8V6a4 4 0 0 1 4-4Zm0 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 4a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2Z"
            />
          </svg>
        </div>
        <div className="relative container mx-auto max-w-md text-xs-13">
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Enter your password"
            className="w-full
            text-xs-13
            outline-none
            mt-1
            placeholder:text-xs-13"
            onBlur={blurValidate}
            onChange={isCreate ? validateStrong : null}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.00462C14.2091 9.00462 16 10.7955 16 13.0046C16 15.2138 14.2091 17.0046 12 17.0046C9.79086 17.0046 8 15.2138 8 13.0046C8 10.7955 9.79086 9.00462 12 9.00462ZM12 5.5C16.6135 5.5 20.5961 8.65001 21.7011 13.0644C21.8017 13.4662 21.5575 13.8735 21.1557 13.9741C20.7539 14.0746 20.3466 13.8305 20.246 13.4286C19.3071 9.67796 15.9214 7 12 7C8.07694 7 4.6901 9.68026 3.75286 13.4332C3.6525 13.835 3.24536 14.0794 2.84349 13.9791C2.44162 13.8787 2.1972 13.4716 2.29756 13.0697C3.40065 8.65272 7.38449 5.5 12 5.5Z"
                  fill="#8B8B8B"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.00462C14.2091 9.00462 16 10.7955 16 13.0046C16 15.2138 14.2091 17.0046 12 17.0046C9.79086 17.0046 8 15.2138 8 13.0046C8 10.7955 9.79086 9.00462 12 9.00462ZM12 5.5C16.6135 5.5 20.5961 8.65001 21.7011 13.0644C21.8017 13.4662 21.5575 13.8735 21.1557 13.9741C20.7539 14.0746 20.3466 13.8305 20.246 13.4286C19.3071 9.67796 15.9214 7 12 7C8.07694 7 4.6901 9.68026 3.75286 13.4332C3.6525 13.835 3.24536 14.0794 2.84349 13.9791C2.44162 13.8787 2.1972 13.4716 2.29756 13.0697C3.40065 8.65272 7.38449 5.5 12 5.5Z"
                  fill="#8B8B8B"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {!objForm?.password?.status && objForm?.password !== undefined ? (
        <div className="text-red-600 w-full">
          {objForm?.password?.tipo === 'textVoid' && 'Fill a Password'}
        </div>
      ) : null}
      {isCreate && !allKeysValidate && objForm?.password !== undefined && (
        <div className="w-full">
          <h3>Password must contain the following:</h3>
          <p
            id="letter"
            className={` w-full ${objStrongValidate.lowerCaseLetters ? 'text-green-600s' : 'text-red-600'}`}
          >
            A <b>lowercase</b> letter
          </p>
          <p
            id="capital"
            className={` w-full ${objStrongValidate.upperCaseLetters ? 'text-green-600s' : 'text-red-600'}`}
          >
            A <b>capital (uppercase)</b> letter
          </p>
          <p
            id="number"
            className={` w-full ${objStrongValidate.numbers ? 'text-green-600s' : 'text-red-600'}`}
          >
            A <b>number</b>
          </p>
          <p
            id="length"
            className={` w-full ${objStrongValidate.length ? 'text-green-600s' : 'text-red-600'}`}
          >
            Minimum <b>8 characters</b>
          </p>
        </div>
      )}
    </>
  );
}
