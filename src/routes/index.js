import config from '@/config';


//pages
import LoginPage from '@pages/auth/LoginPage';
import ForgotPasswordForm from '@pages/auth/ForgotPage';
import OtpPage from '@pages/auth/OtpPage';
import ResetPassword from '@pages/auth/ResetPassword';
import DashboardPage from '@pages/dashboard/DashboardPage';
import ChangePassword from '@pages/dashboard/ChangePasswordPage'


//khong can dang nhap van xem duoc
const publicRoutes  = [
    {path: config.routes.login,component: LoginPage,layout: null},
    {path: config.routes.forgot, component: ForgotPasswordForm,layout: null},
    {path: config.routes.otp, component: OtpPage, layout: null},
    {path: config.routes.reset, component: ResetPassword, layout: null},
    {path: config.routes.dashboard, component: DashboardPage},
    {path: config.routes.change, component: ChangePassword}
];

//phai dang nhap moi vao duoc: khong dang nhap se chuyen huong den login
const privateRoutes = [];

export {publicRoutes, privateRoutes};