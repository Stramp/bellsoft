import { PageWrapper } from "../../components/PageWrapper";
import { BtnBack } from "../../components/BtnBack";
import { SocialMediaLogin } from "../../components/SocialMediaLogin";
import { RoutePaths } from "../../general/RoutePaths";
import { useNavigate } from "react-router-dom";
import { validarInput } from "../../general/utils";
import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import PhoneInput from "../../components/PhoneInput";

export const Create = () => {
  const navigate = useNavigate();
  const [objForm, setObjForm] = useState({});
  function handlerBlurValidate(e) {
    const infoValidate = validarInput(e.target);
    if (infoValidate.resp) {
      console.log(e.target.id, 'validado');
      setObjForm({
        ...objForm,
        [e.target.id]: {
          status: true,
          value: e.target.value,
        },
      });
    } else {
      console.log(e.target.id, 'invalido ');
      setObjForm({
        ...objForm,
        [e.target.id]: {
          status: false,
          value: '',
          tipo: infoValidate.tipo,
        },
      });
    }
  }
  return (
    <div className="w-full flex-col flex justify-between h-dvh">
      <div>
        <div className="bg-p-header bg-right bg-no-repeat h-35 w-full flex justify-start items-end px-8 pb-9">
          <BtnBack />
        </div>
        <PageWrapper>
          <div className="m-0 px-8 font-title ">
            <h1 className="mb-6 text-2xl-1 text-primary tracking-wider">
              Create Account
            </h1>
            <p className="text-gray-55 text-sm tracking-wider mb-7">
              Enter your information below or continue with social media account
            </p>
            <div className="flex flex-col gap-2 w-full justify-center items-center">
              <EmailInput
                tipo="email"
                blurValidate={handlerBlurValidate}
                objForm={objForm}
              />

              <PhoneInput
                tipo="tel"
                blurValidate={handlerBlurValidate}
                objForm={objForm}
              />

              <PasswordInput
                blurValidate={handlerBlurValidate}
                objForm={objForm}
                isCreate={true}
              />

              <button
                onClick={() => console.log('create account', objForm)}
                type="button"
                className="flex w-full justify-center rounded-md bg-secondary-100 p-5 text-white hover:bg-secondary-200 text-xs-13 tracking-wider max-w-md my-2"
              >
                Create Account
              </button>
              <button
                onClick={() => console.log('recuperar senha')}
                className="text-xs-13 text-secondary-100 leading-6"
              >
                Forgot Password
              </button>
            </div>
          </div>
        </PageWrapper>
      </div>
      <div className="w-full">
        <div className="text-center text-gray-55 text-xs-13">
          Or Register with Social Accounts
        </div>
        <SocialMediaLogin />
        <div className="text-center text-gray-55 py-5 mb-6 text-xs-13">
          Already have an account?{' '}
          <button
            className="text-secondary-100"
            onClick={() => navigate(RoutePaths.LOGIN)}
          >
            Login Now
          </button>
        </div>
      </div>
    </div>
  );
};
