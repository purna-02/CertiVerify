import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '@/pages/public/LandingPage';
import { VerificationPage } from '@/pages/public/VerificationPage';
import { LoginPage } from '@/pages/public/LoginPage';
import { SignupPage } from '@/pages/public/SignupPage';
import { AboutPage } from '@/pages/public/static/AboutPage';
import { ContactPage } from '@/pages/public/static/ContactPage';
import { ThemeProvider } from '@/context/ThemeContext';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardHome } from '@/pages/dashboard/DashboardHome';
import { IssueCertificatePage } from '@/pages/dashboard/IssueCertificatePage';
import { CertificatesPage } from '@/pages/dashboard/CertificatesPage';
import { SettingsPage } from '@/pages/dashboard/SettingsPage';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/verify" element={<VerificationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Dashboard Routes (Protected) */}
                    <Route path="/dashboard" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
                    <Route path="/dashboard/issue" element={<DashboardLayout><IssueCertificatePage /></DashboardLayout>} />
                    <Route path="/dashboard/certificates" element={<DashboardLayout><CertificatesPage /></DashboardLayout>} />
                    <Route path="/dashboard/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />

                    {/* Catch-all */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
