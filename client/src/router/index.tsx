import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from '../App';

import useAuthStore from '@store/authStore';

import HomePage from '@pages/User/HomePage';
import AboutPage from '@pages/User/AboutPage';
import TestsPage from '@pages/User/TestsPage';
import ArticlesPage from '@pages/User/ArticlesPage';
import NotFoundPage from '@pages/NotFoundPage';
import PrivacyPolicyPage from '@pages/User/PrivacyPolicyPage';
import ProfilePage from '@pages/User/ProfilePage';
import ArticleDetailPage from '@pages/User/ArticleDetailPage';
import ForPsychologistPage from '@pages/User/ForPsychologistPage';
import TestsPassingPage from '@pages/User/TestsPassingPage';

import AdminPage from '@pages/Admin/AdminPage';
import AdminAnalyticsPage from '@pages/Admin/AdminAnalitycsPage';
import AdminUserPage from '@pages/Admin/AdminUserPage';
import AdminPsychologistPage from '@pages/Admin/AdminPsychologistPage';
import AdminArticlePage from '@pages/Admin/AdminArticlePage';
import AdminTestPage from '@pages/Admin/AdminTestPage';

import PsychologistPage from '@pages/Psychologist/PsychologistPage';
import MyArticlePage from '@pages/Psychologist/MyArticlePage';
import MyTestsPage from '@pages/Psychologist/MyTestsPage';

const AuthGuard = ({ element }: { element: React.ReactNode }) => {
  const { accessToken } = useAuthStore();
  return accessToken ? element : <Navigate to="/" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/tests" element={<TestsPage />} />
      <Route path="/tests/:id" element={<TestsPassingPage />} />

      <Route path="/for-psychologist" element={<ForPsychologistPage />} />

      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticleDetailPage />} />

      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/profile" element={<AuthGuard element={<ProfilePage />} />} />

      <Route path="/admin" element={<AuthGuard element={<AdminPage />} />}>
        <Route path="/admin/" element={<AuthGuard element={<AdminAnalyticsPage />} />} />
        <Route path="/admin/users" element={<AuthGuard element={<AdminUserPage />} />} />
        <Route path="/admin/psychologists" element={<AuthGuard element={<AdminPsychologistPage />} />} />
        <Route path="/admin/articles" element={<AuthGuard element={<AdminArticlePage />} />} />
        <Route path="/admin/tests" element={<AuthGuard element={<AdminTestPage />} />} />
      </Route>

      <Route path="/psychologist/" element={<AuthGuard element={<PsychologistPage />} />}>
        <Route path="/psychologist/articles" element={<AuthGuard element={<MyArticlePage />} />} />
        <Route path="/psychologist/tests" element={<AuthGuard element={<MyTestsPage />} />} />
      </Route>

      <Route path="/*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
