import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components/PageWrapper';
import { RoutePaths } from '../../general/RoutePaths';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="m-0 px-8 font-title flex flex-col items-center">
        <h1 className="mb-6 text-2xl-1 text-primary tracking-wider max-w-xl w-full">
          Welcome
        </h1>
        <p className="text-gray-55 text-sm tracking-wider mb-7 max-w-xl w-full">
          Please login or create account to continue
        </p>
        <div className="flex flex-col gap-5 w-full justify-center items-center">
          <button
            onClick={() => navigate(RoutePaths.LOGIN)}
            type="button"
            className="flex w-full justify-center rounded-md bg-secondary-100 p-5 text-white hover:bg-secondary-200 text-xs-13 tracking-wider max-w-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate(RoutePaths.CREATE)}
            type="button"
            className="flex w-full justify-center rounded-md bg-secondary-100 p-5 text-white hover:bg-secondary-200 text-xs-13 tracking-wider max-w-md"
          >
            Create Account
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};
